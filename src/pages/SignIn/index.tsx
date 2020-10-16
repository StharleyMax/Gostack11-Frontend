import React, { useCallback, useRef, useContext } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { AuthContext } from '../../context/AuthContext';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);

  // console.log(name);

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um E-mail válido'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn();
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        console.log(errors);
      }
    },
    [signIn]
  );
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="Gobarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Logon </h1>

            <Input name="email" icon={FiMail} placeholder="Email" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="senha"
            />

            <Button type="submit">Entrar</Button>
            <a href="#"> Esqueci minha senha</a>
          </Form>

          <a href="Criar Conta">
            <FiLogIn />
            Criar conta
          </a>
        </Content>
        <Background></Background>
      </Container>
    </>
  );
};

export default SignIn;
