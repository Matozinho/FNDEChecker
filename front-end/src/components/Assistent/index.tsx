import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { EmailContent, EndContent, ErrorContent, GroupDataContent } from './contents';

import styles from './styles.module.scss';
import { RegisterContext } from '@contexts/RegisterContext';
import axios from 'axios';
import {useRouter} from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '90%',
      margin: '0 auto',
      padding: '1 2rem',
      backgroundColor: '#ebeaea',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps(): string[] {
  return ['E-mail', 'Dados do Grupo', 'Muito Obrigado!'];
}

function getStepContent(stepIndex: number): JSX.Element {
  switch (stepIndex) {
    case 0:
      return <EmailContent />;
    case 1:
      return <GroupDataContent />;
    case 2:
      return <EndContent />;
    default:
      return <ErrorContent />;
  }
}

export function Assistent(): JSX.Element {
  const {
    setStartLoadSpinner,
    activeStep,
    setActiveStep,
    email,
    password,
    IES,
    groupName,
    city,
    UF,
  } = useContext(RegisterContext);

  const router = useRouter();
  const classes = useStyles();
  const steps = getSteps();

  const handleNext = async (): Promise<any> => {
    if (activeStep === 2) {
      setStartLoadSpinner(true);
      if (password && email && IES && groupName && city && UF) {
        try {
          const resp = await axios.post(`${process.env.API_URL}/group`, {
            email,
            password,
            city,
            UF,
            IES,
            groupname: groupName
          });

          if (resp.status === 201){
            alert('Conta Cadastrada com sucesso');
            router.push('/');
          }
        } catch (e) {
          alert('Problema com o servidor, tente mais tarde');
        }
      } else {
        alert('Preencha os campos corretamente');
      }
      setStartLoadSpinner(false);
    }
    else {
      setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
    }
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
  };

  return (
    <div className={styles.wrapper}>
      <Stepper className={classes.root} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={styles.test}>
        {getStepContent(activeStep)}
        <div className={styles.controlButton}>
          <button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Voltar
          </button>
          <button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Cadastrar' : 'Próximo'}
          </button>
        </div>
      </div>
    </div>
  );
}

