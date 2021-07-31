/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useState } from 'react';

import styles from './styles.module.scss';

export const Avatar = (): JSX.Element => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = (): void => {
    alert('Funcionalidade em desenvolvimento!');
  }

  return (
    <div className={styles.wrapper}>
      {
        !isLogged ? (
          <button id={styles.loginButton} onClick={handleLogin}>Entrar</button>
        ) : (
          <button id={styles.seeProfileButton} onClick={handleLogin}>
            <img
              src='/icons/user.svg'
              width={38}
              height={42}
              alt="Ver perfil"
            />
          </button>
        )
      }
    </div>
  )
}
