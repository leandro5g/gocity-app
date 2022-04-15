import React, { useCallback, useState } from "react";
import { Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";

import { Feather } from "@expo/vector-icons";
import { maskBrazilianCellPhoneNumber } from "../../utils/masks";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { InputHookForm } from "../../components/Forms/HookForms/InputHookForm";
import { KeyboardDismiss } from "../../components/Keyboards/KeyboardDismiss";
import { KeyboardView } from "../../components/Keyboards/KeyboardView";
import { LogoSimple } from "../../components/Logos/LogoSimple";
import { SubTitle } from "../../components/Texts/SubTitle";

import {
  Container,
  Content,
  Description,
  ButtonBack,
  ContentDescription,
} from "./styles";
import { api } from "../../services/api";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .required("O e-mail é obrigatório")
    .email("E-mail inválido"),
  cellphone: Yup.string()
    .required("A telefone é obrigatório")
    .min(15, "Telefone inválido")
    .max(15, "Telefone inválido"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve possuir pelo menos 6 caracteres."),
});

interface FormProps {
  email: string;
  password: string;
  cellphone: string;
  name: string;
}

const SignUp: React.FC = () => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  const toast = useToast();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    async ({ email, password, cellphone, name }: FormProps) => {
      Keyboard.dismiss();

      setIsLoading(true);

      const body = {
        email,
        password,
        cellphone: cellphone.replace(/\D/g, ""),
        name,
      };

      try {
        const response = await api.post("/users", body);

        toast.show(
          "Seu cadastro foi criado com sucesso! Faça o login para acessar a plataforma.",
          {
            type: "success",
            placement: "top",
            duration: 4000,
            animationType: "zoom-in",
          }
        );

        goBack();
      } catch (error) {
        toast.show(
          "Ops, aconteceu um erro na criação do seu cadastro. Verifique os dados e tente novamente.",
          {
            type: "danger",
            placement: "top",
            duration: 3000,
            animationType: "zoom-in",
          }
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return (
    <KeyboardView>
      <KeyboardDismiss>
        <Container>
          <LogoSimple />

          <ButtonBack activeOpacity={0.9} onPress={goBack}>
            <ContentDescription>
              <Feather
                color={colors.secondary}
                name="arrow-left"
                size={RFValue(20)}
              />
              <Description>Voltar</Description>
            </ContentDescription>
          </ButtonBack>

          <Content>
            <SubTitle>Olá, complete seu cadastro para começar</SubTitle>

            <InputHookForm
              error={errors?.name?.message}
              name="name"
              icon="account"
              control={control}
              placeholder="Digite seu nome"
              keyboardType="default"
              autoCapitalize="words"
              isLoading={isLoading}
            />

            <InputHookForm
              error={errors?.cellphone?.message}
              name="cellphone"
              icon="cellphone"
              control={control}
              mask={maskBrazilianCellPhoneNumber}
              placeholder="Digite seu número de telefone"
              keyboardType="numeric"
              maxLength={15}
              isLoading={isLoading}
            />

            <InputHookForm
              error={errors?.email?.message}
              name="email"
              icon="email"
              control={control}
              placeholder="Digite seu E-mail"
              keyboardType="email-address"
              isLoading={isLoading}
            />
            <InputHookForm
              error={errors?.password?.message}
              name="password"
              icon="lock"
              keyboardType="visible-password"
              control={control}
              placeholder="Digite sua senha"
              isLoading={isLoading}
            />
          </Content>

          <ButtonPrimary
            onPress={handleSubmit(onSubmit)}
            icon="login"
            textButton="Criar conta!"
          />
        </Container>
      </KeyboardDismiss>
    </KeyboardView>
  );
};

export { SignUp };
