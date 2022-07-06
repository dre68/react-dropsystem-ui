import React from 'react';
import './stepperHoriz.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepperHorizLogic from './StepperHorizLogic';


const HorizontalLinearStepper = ({ activeStep }) => { 

  const {steps, returnStepperLabeltext} = StepperHorizLogic(); 

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep-1}>
        {steps.map((label, index) => {
          return (            
            <Step key={label} >
              <StepLabel>
                {returnStepperLabeltext(label, index, activeStep)}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>      
    </Box>
  );
}

export default HorizontalLinearStepper
