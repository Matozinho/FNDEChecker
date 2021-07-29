import Image from 'next/image';

import styles from './styles.module.scss';

export const Footer = (): JSX.Element => {

  const handleCopyEmail = (): void => {
    navigator.clipboard.writeText("fndechecker@gmail.com");
  }

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <Image
          src='/darkLogo.svg'
          width={138}
          height={64}
          alt="Logo do FNDEChecker"
        />

        <div className={styles.contact}>
          <div id={styles.github} className={styles.contactIcons}>
            <a
              href="https://github.com/Matozinho/FNDEChecker/tree/main/front-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src='/icons/github.svg'
                width={88}
                height={69}
                alt="Entrar em contato via email"
              />
            </a>
          </div>
          <div id={styles.email} className={styles.contactIcons}>
            <button onClick={handleCopyEmail}>
              <Image
                src='/icons/email.svg'
                width={88}
                height={69}
                alt="Entrar em contato via email"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}