import Image from "next/image";

import { useContext } from "react";

import emailStyles from './emailStyles.module.scss';
import groupDataStyles from './groupsStyles.module.scss';
import acomplishmentsStyles from './acomplishments.module.scss';

import { RegisterContext } from "@contexts/RegisterContext";
import axios from "axios";

export const EmailContent = (): JSX.Element => {
  const { setEmail, setPassword } = useContext(RegisterContext);

  const handleRegister = async (): Promise<void> => {
    try {
      // TODO: Enhance this... later.
      await axios.get(`${process.env.API_URL}/auth/oauth`, {
        headers: {
            "Access-Control-Allow-Origin": "*"
          }
      })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={emailStyles.contentWrapper}>
      <div onClick={handleRegister} className={emailStyles.googleButton}>
        <div>
          <Image
            src="/icons/google.svg"
            width={35}
            height={35}
            alt="Logar com o google"
          />
        </div>
        <span>Cadastrar-se com o Google</span>
      </div>

      <div className={emailStyles.divisor}>
        <div><hr /></div>
        ou
        <div><hr /></div>
      </div>

      <form
        className={emailStyles.form}
        onSubmit={(e): void => e.preventDefault()}
      >
        <input
          onChange={(e): void => setEmail(e.target.value)}
          type="text"
          placeholder="e-mail"
        />
        <input
          onChange={(e): void => setPassword(e.target.value)}
          type="password"
          placeholder="senha"
        />
      </form>
    </div >
  );
}

export const GroupDataContent = (): JSX.Element => {
  const {
    setCity,
    setUF,
    setGroupName,
    setIES,
  } = useContext(RegisterContext);

  return (
    <div className={groupDataStyles.wrapper}>
      <h1>Informações do Grupo</h1>
      <input onChange={(e): void => setGroupName(e.target.value)} type="text" placeholder="Nome do grupo PET" />
      <input onChange={(e): void => setIES(e.target.value)} type="text" placeholder="Instituição de Ensino" />
      <div>
        <input onChange={(e): void => setUF(e.target.value)} type="text" placeholder="UF" />
        <input onChange={(e): void => setCity(e.target.value)} type="text" placeholder="Cidade" />
      </div>
    </div>
  );
}

export const EndContent = (): JSX.Element => {
  return (
    <div className={acomplishmentsStyles.wrapper}>
      <p>Os dados coletados durante o cadastro serão utilizados apenas para cunhos estatístico do FNDEChecker 😀!</p>

      <p>Agora que você já está cadastrado na plataforma, pode acessar  seu perfil, e adicionar os e-mails/telefones dos membros do seu grupo que desejam ser notificados!</p>

      <p>Após o cadastro, cada um dos membros receberá uma mensagem de quando constar no FNDE que a bolsa foi depositada!</p>

      <p>Qualquer dúvida, sujestão ou elogio, basta entrar em contato com os desenvolvedores através do whatsapp ou e-mail disponíveis no rodapé da página! </p>
    </div>
  );
}

export const ErrorContent = (): JSX.Element => {
  return (
    <p>Erro inesperado, reinicie a página</p>
  );
}
