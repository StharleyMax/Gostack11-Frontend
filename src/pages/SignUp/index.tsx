import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SingUp: React.FC = () => (
  <>
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <form>
          <h1>Faça seu Cadastro </h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="Criar Conta">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  </>
);

export default SingUp;
