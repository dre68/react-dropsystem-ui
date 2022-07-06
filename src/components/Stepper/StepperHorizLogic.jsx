const StepperHorizLogic = () => {

    const steps = ['Start', 'Payment Details', 'Confirmation', 'Live Mint!'];
 
    const returnStepperLabeltext = (label, index, activeStep) => {
      if (window.innerWidth >= 1000) {
        return label;
        // Mobile Fix - return only on active Step
      } else if (window.innerWidth < 1000 && index===activeStep-1) {
        return label;
      }   
    } 
    return {steps, returnStepperLabeltext}
}

export default StepperHorizLogic



