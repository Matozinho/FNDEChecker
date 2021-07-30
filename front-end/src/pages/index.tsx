import axios from 'axios';

import Image from 'next/image';
import Head from 'next/head';
import { useContext, useState } from 'react';

import InputMask from 'react-input-mask';

import styles from '@styles/Home.module.scss';

import { Footer } from '@components/Footer';
import { Avatar } from '@components/Avatar';
import { HomeModal } from '@components/HomeModal';
import { DepositContext } from '@contexts/DepositContext';
import {LoadSpinner} from '@components/LoadSpinner';

export default function Home(): JSX.Element {
  const { setHomeModalIsOpen, setDepositsData } = useContext(DepositContext);
  const [userCPF, setUserCPF] = useState('');
  const [useSpinner, setUseSpinner] = useState(false);

  const handleSerachBenefit = async (): Promise<void> => {
    const cleanCPF = userCPF
      .split('.').join('')  // remove all the .
      .split('-').join('')  // remove all the -
      .split('_').join(''); // remove all the _ (if the CPF wasn't filled correctly)

    if (cleanCPF.length < 11) {
      alert('Preencha o CPF Corretamente');
      return;
    }

    setUseSpinner(true);

    try {
      const { status, data } = await axios.post('http://localhost:8000/', {
        cpf: cleanCPF,
      });

      if (status === 201) {
        let idx = 0;
        const reversedData = data.reverse();
        Object.values(reversedData).forEach((item: any) => {
          item['id'] = idx;
          idx++;
        });
        setDepositsData(reversedData);
        setUseSpinner(false);
        setHomeModalIsOpen(true);
      }
      else
        alert('CPF não encontrado');
    } catch (e) {
      setUseSpinner(false);
      alert(`Servidor com problemas, tente mais tarde`);
    }
    return;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>FNDEChecker | Consulta pública</title>
      </Head>
      <Avatar />
      <HomeModal />
      { useSpinner ? <LoadSpinner/> : <></> }
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
