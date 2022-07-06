import React from 'react';
import './home.css';
import HomeLogic from './HomeLogic';
import StepperHoriz from '../Stepper/StepperHoriz';
import Button from '@mui/material/Button';

const Home = () => {  
  const {activeStep, incrementStep, returnCurrentStep} = HomeLogic();

  return (
    <>  
        <main className='main__container'>
          <div className='content__container'>
            <h1 className='content__container-header'>React Dropsystem UI</h1>  
            <StepperHoriz activeStep={activeStep} incrementStep={incrementStep}/>
            {returnCurrentStep(activeStep)}
            {
              activeStep === 1 && (
                <div className='content__container-footer'>
                  <Button variant="contained" onClick={incrementStep}>Next</Button>    
                </div>
              )
            }     
          </div> 
        </main>     
    </>
  )
}

export default Home