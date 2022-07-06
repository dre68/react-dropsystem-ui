import React from 'react';
import PaymentDetailsLogic from './PaymentDetailsLogic';
import './paymentDetails.css';
import { CircularProgress, Typography } from '@mui/material';
import CopyBox from '../../../Helper/CopyBox/CopyBox';

const PaymentDetails = ({ incrementStep }) => { 
  const {isLoading, isLoaded, payment, copyBoxLabel} = PaymentDetailsLogic();
  return (
    <>      
      <section className='paymentdetails__section'>
          {isLoading && (
            <div className='paymentdetails__section-loading'>
              <CircularProgress />
            </div>
          )}
          {isLoaded && (
            <div>
              <Typography paragraph>
                {/* In order to successfully open your HashBox, you will need to send 1 HashBox to the address listed below.  You must also include the ADA amount displayed below to cover the TX fees.  In return, you will receive 2 NFT items for your HashGuardians!  */}
                {/* At this point, the user is supposed to be prompted to enter a certain amount and/or a certain number. */}
                In this example, the user already has a digital asset called HashBox.
                In order to open the HashBox, the user needs to send 1 HashBox and a small amount of ADA (cryptocurrency) to the address listed below. In return, the user will receive 2 NFT items.
              </Typography>
              <Typography paragraph>
                {/* Please double check both the asset ID as well as the ADA amount you are sending!  Only Pre-Alpha and Early Adopter HashBoxes can be opened.       */}
                The user is automatically redirected to the next step once the payment has arrived. In our case please click on the link below.       
              </Typography>
              <Typography paragraph>
                <span className='paymentdetails__section-next' onClick={incrementStep}>Click here for next step</span> (contains sound)<span></span>
              </Typography>
              <CopyBox label={copyBoxLabel.addr} copyContent={payment.addr} iconColor={copyBoxLabel.iconcolor}/>
              <CopyBox label={copyBoxLabel.amount} copyContent={payment.amount} iconColor={copyBoxLabel.iconcolor} />
            </div>
          )}
      </section>   
    </>
  )
}

export default PaymentDetails