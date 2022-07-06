import React from 'react';
import './liveMint.css'
import { Button } from '@mui/material';
import SlotMachineHg from '../../SlotMachine/SlotMachineHg';
import LiveMintLogic from './LiveMintLogic';

const LiveMint = () => {

  const {hbClassName, hbUrl, isSlotRunning, smClassName, onClickHandlerLiveMint, isBtnDisabled, btnText} = LiveMintLogic() 

  return (    
    <section>
      <div className='livemint__secion-content'>
        <div className={hbClassName}>
          <img src={hbUrl} alt="Box" style={{width: '100%'}} />
        </div>
        <div>
          <SlotMachineHg isSlotRunning={isSlotRunning} smClassName={smClassName}/>
        </div>        
      </div>
      <div className='livemint__secion-footer'>
        <Button onClick={onClickHandlerLiveMint} variant='contained' disabled={isBtnDisabled}>{btnText}</Button>
      </div>
    </section>
  )
}

export default LiveMint