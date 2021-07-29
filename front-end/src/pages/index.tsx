import Image from 'next/image';
import Head from 'next/head';

import InputMask from 'react-input-mask';

import styles from '@styles/Home.module.scss';

import { Footer } from '@components/Footer';
import { Avatar } from '@components/Avatar';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [userCPF, setUserCPF] = useState('');

  const handleSerachBenefit = (): void => {
    const cleanCPF = userCPF
      .split('.').join('')  // remove all the .
      .split('-').join('')  // remove all the -
      .split('_').join(''); // remove all the _ (if the CPF wasn't filled correctly)

    if (cleanCPF.length < 11)
      alert('Preencha o CPF Corretamente');
    else
      alert('Funcionalidade em Desenvolvimento');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>FNDEChecker | Consulta pública</title>
      </Head>
      <Avatar />
      <Image
        src="/coloredLogo.svg"
        width={250}
        height={130}
        alt="Logo do FNDEChecker"
      />
      <main>
        <h1>Consulte seu benefício pelo seu CPF</h1>

        <div className={styles.input}>
          <InputMask
            mask='999.999.999-99'
            placeholder="Insira seu CPF"
            onChange={(e): void => setUserCPF(e.target.value)}
          />
          <button onClick={handleSerachBenefit} disabled={!userCPF.length}>
            <Image
              src="/icons/search.svg"
              width={56}
              height={43}
              alt="Pesquisar"
            />
          </button>
        </div>

        <span>Gostaria de facilitar a verificação das bolsas de seu grupo? Faça cadastro do e-mail/telefone de seus membros e seja notificado quando a bolsa cair! :)</span>

        <button onClick={(): void => alert("Funcionalidade em desenvolvimento")}>Cadastrar seu grupo</button>
      </main>
      <Footer />
    </div>
  )
}
