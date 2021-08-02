import Image from 'next/image';
import Head from 'next/head';

import styles from '@styles/register.module.scss';

import { Footer } from '@components/Footer';
import { Assistent } from '@components/Assistent';
import { useContext } from 'react';
import { RegisterContext } from '@contexts/RegisterContext';
import { LoadSpinner } from '@components/LoadSpinner';

export default function Register(): JSX.Element {
  const { startLoadSpinner } = useContext(RegisterContext);

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
        <Assistent />
      </main>
      <Footer />
    </div >
  )
}
