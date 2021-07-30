import Modal from '@material-ui/core/Modal';
import { DataGrid } from '@material-ui/data-grid';

import Image from 'next/image';
import { useContext } from 'react';

import { DepositContext } from 'src/contexts/DepositContext';
import { columns, useModalStyles } from './table.config';

import styles from './styles.module.scss';

// import { randonData } from '../../../MOCK_DATA';

const CloseIcon = (): JSX.Element => {
  const { setHomeModalIsOpen, setDepositsData } = useContext(DepositContext);

  const handleCloseModal = (): void => {
    setDepositsData([]);
    setHomeModalIsOpen(false);
  }

  return (
    <div onClick={handleCloseModal} className={styles.closeIcon}>
      <Image
        src="/icons/close.svg"
        width={39}
        height={39}
        alt="Fechar"
      />
    </div>
  );
}

export const HomeModal = (): JSX.Element => {
  const { homeModalIsOpen, depositsData } = useContext(DepositContext);

  const classes = useModalStyles();
  return (
    <Modal
      open={homeModalIsOpen}
    >
      <div className={classes.paper}>
        <CloseIcon />
        <h1>Dados dos depósitos das bolsas</h1>

        <div className={styles.tableWrapper}>
          <DataGrid
            rows={depositsData}
            columns={columns}
            pageSize={7}
            disableColumnMenu
            disableColumnSelector
          />
        </div>
      </div>
    </Modal>
  );
}
