import styles from '@styles/Home.module.scss';

import { Footer } from '@components/Footer';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>FNDEChecker begining</h1>
      <Footer />
    </div>
  )
}
