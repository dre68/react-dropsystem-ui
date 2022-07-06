import React from 'react';
import {  Button } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import paymentSuccessful from '../../../assets/payment-successful.json';
import './confirmation.css'


const Confirmation = ({ incrementStep }) => {
  const paymentSuccSoundUrl = 'https://cdn.hashguardians.io/wp-content/uploads/2022/05/Loading_Complete_Sound.mp3';
  const [paymentSuccSound] = React.useState(new Audio(paymentSuccSoundUrl));  

  return (
    <section>
      <div>
        <Player        
          autoplay
          onStateChange={paymentSuccSound.play()}
          className='my-lottie-player'
          src={paymentSuccessful}
          keepLastFrame
        />  
      </div>
      
      <div className='confirmation__section-footer'>
        <Button onClick={incrementStep} variant="contained">Start Live Mint!</Button> 
      </div>
          
    </section>   
  )
}

export default Confirmation