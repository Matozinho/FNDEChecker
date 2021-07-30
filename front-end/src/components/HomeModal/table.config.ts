import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { GridColDef } from "@material-ui/data-grid";

export const columns: GridColDef[] = [
  {
    field: 'referencia',
    headerName: 'Mês de Referência',
    align: 'center',
    headerAlign: 'center',
    width: 200,
    sortable: false,
  },
  {
    field: 'data',
    headerName: 'Data de Emissão',
    headerAlign: 'center',
    align: 'center',
    width: 200,
    sortable: false,
  },
  {
    field: 'ordermBancaria',
    headerAlign: 'center',
    align: 'center',
    headerName: 'Número da OB',
    width: 180,
    sortable: false,
  },
  {
    field: 'valor',
    headerAlign: 'center',
    align: 'center',
    headerName: 'Valor pago',
    width: 150,
    sortable: false,
  },
];

export const useModalStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: '70%',
      height: '70%',
      top: '50%',
      left: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      borderRadius: '18px',
      minWidth: '800px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'var(--background-color)',
      outline: 'none',
      border: '0',
      boxShadow: theme.shadows[5],
      padding: '2rem 2.5rem',
    },
  }),
);
