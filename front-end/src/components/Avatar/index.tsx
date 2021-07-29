import { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

export const Avatar = (): JSX.Element => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (): void => {
    setIsLogged(!isLogged);
  }

  return (
    <div className={styles.wrapper}>
      {
        !isLogged ? (
          <button id={styles.loginButton} onClick={handleLogin}>Entrar</button>
        ) : (
          <button id={styles.seeProfileButton} onClick={handleLogin}>
            <Image
              src="/user.svg"
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