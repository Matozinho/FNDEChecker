import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { EmailContent, EndContent, ErrorContent, GroupDataContent } from './contents';

import styles from './styles.module.scss';
import { RegisterContext } from '@contexts/RegisterContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
      margin: '0 auto',
      padding: '1 2rem',
      borderRadius: '25px',
      backgroundColor: 'var(--light-gray)',
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
  const [activeStep, setActiveStep] = useState(0);
  const { setStartLoadSpinner } = useContext(RegisterContext);

  const classes = useStyles();
  const steps = getSteps();

  const handleNext = (): void => {
    if (activeStep === 2) {
      setStartLoadSpinner(true);
    }
    else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
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
