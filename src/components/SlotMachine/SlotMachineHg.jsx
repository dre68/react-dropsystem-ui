import React from 'react';
import SlotMachine from './distSlotMachine/react-slot-machine';
import './slotMachineHg.css';
import SlotmachineHgLogic from './SlotmachineHgLogic';

const Slot = SlotMachine;

const SlotMachineHg = ({ isSlotRunning, smClassName }) => {  
  const {dataStripeOne, dataStripeTwo, options1, options2} = SlotmachineHgLogic();

  return ( 
    <div className='slotmachine__container'>
      <div className={smClassName}>
          <Slot reels={dataStripeOne} play={isSlotRunning} options={options1} />   
          <Slot reels={dataStripeTwo} play={isSlotRunning} options={options2} />  
      </div>
    </div>       
  )
}

export default SlotMachineHg