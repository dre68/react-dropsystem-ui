import { useState } from 'react';
import Start from '../Sections/1Start/Start';
import PaymentDetails from '../Sections/2PaymentDetails/PaymentDetails';
import Confirmation from '../Sections/3Confirmation/Confirmation';
import LiveMint from '../Sections/4LiveMint/LiveMint';

const HomeLogic = () => {
    const [activeStep, setActiveStep] = useState(1);

    const incrementStep = () => {
        setActiveStep(activeStep + 1);
    }

    const returnCurrentStep = (activeStepValue) => {
        switch(activeStepValue){
            case 1:
                return <Start />
            case 2:
                return <PaymentDetails incrementStep={incrementStep}/>
            case 3:
                return <Confirmation incrementStep={incrementStep}/>
            case 4:
                return <LiveMint />
            default:
                throw new Error('Unknown step');
        }
    } 

    return {activeStep, incrementStep, returnCurrentStep}
}

export default HomeLogic
