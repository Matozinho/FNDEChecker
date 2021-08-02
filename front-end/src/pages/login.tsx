import axios from 'axios';
import { useState } from 'react';
import {Footer} from '@components/Footer';
import {LoadSpinner} from '@components/LoadSpinner';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@styles/login.module.scss';
import {useRouter} from 'next/router';

export default function Login(): JSX.Element {
  const [startLoadSpinner, setStartLoadSpinner] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: any): Promise<any> => {
    setStartLoadSpinner(true);
    e.preventDefault();
    try {
      const resp = await axios.post(`${process.env.API_URL}/auth/login`, {
        email,
        password,
      });

      if (resp.status === 201) {
        document.cookie = `sessionToken = ${resp.data.access_token}`;
        router.push('/profile');
      } 
    }catch(e) {
      alert('Usuário ou senha incorretos');
    }

    setStartLoadSpinner(false);
  }

  const handleGoogleLogin = async (): Promise<any> => {
    alert('Funcionalidade em Deesenvolvimento');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>FNDEChecker | Consulta pública</title>
      </Head>
      {startLoadSpinner ? <LoadSpinner /> : <></>}
      <Image
        src="/coloredLogo.svg"
        width={250}
        height={130}
        alt="Logo do FNDEChecker"
      />
      <main>
        <div onClick={handleGoogleLogin} className={styles.googleButton}>
          <div>
            <Image
              src="/icons/google.svg"
              width={35}
              height={35}
              alt="Logar com o google"
            />
          </div>
          <span>Entrar com o Google</span>
        </div>

        <div className={styles.divisor}>
          <div><hr /></div>
          ou
          <div><hr /></div>
        </div>

        <form
          className={styles.form}
          onSubmit={handleLogin}
        >
          <input
            required
            onChange={(e): void => setEmail(e.target.value)}
            type="email"
            placeholder="e-mail"
          />
          <input
            required
            onChange={(e): void => setPassword(e.target.value)}
            type="password"
            placeholder="senha"
          />
          <span>
            Ainda não é cadastrado? 
            <Link href="/register">
              <a>Cadastre-se</a>
            </Link>
          </span>

          <button type="submit">Entrar</button>
        </form>
      </main>
      <Footer />
    </div >

  );
}
