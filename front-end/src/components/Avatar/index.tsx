/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import cookieCutter from 'cookie-cutter';

import styles from './styles.module.scss';

export const Avatar = (): JSX.Element => {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  useEffect((): void => {
    if(cookieCutter.get('sessionToken')) 
      setIsLogged(true);
  }, []);

  const handleLogin = (): void => {
    router.push('/login');
  }

  const handleProfile = (): void => {
    router.push('/profile');
  }

  return (
    <div className={styles.wrapper}>
      {
        !isLogged ? (
          <button id={styles.loginButton} onClick={handleLogin}>Entrar</button>
        ) : (
          <button id={styles.seeProfileButton} onClick={handleProfile}>
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
