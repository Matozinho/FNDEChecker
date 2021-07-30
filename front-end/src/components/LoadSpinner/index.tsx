import {DotLoader} from "react-spinners"

import styles from './styles.module.scss';

export const LoadSpinner = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <DotLoader
        size={150}
      />
    </div>
  );
}
