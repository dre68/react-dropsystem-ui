import React from 'react';
import { Typography } from '@mui/material';

const Start = () => {
  return (
    <>
      <section>
        <h2>Hello everyone!</h2>
        <Typography paragraph>
          I present here the frontend solution as a basic construct for nft payment systems. In this section an introduction text is placed so that the user gets a rough information about the process of the drop.
          {/* Here you will be able to submit your HashBoxes to Professor Hash and reveal what has been hidden within!  Follow the instructions carefully, and best of luck, Guardians!  May the Universe be in your favor! */}
        </Typography>
        <Typography paragraph>
          This example does not include any API calls. No NFT's are sent or received. The following data is only an example for this system.
          {/* Two variations of the solution are currently running productive on <a href='https://www.hashguardians.io'>https://www.hashguardians.io</a> (as of July 2022). 
          Then just click on "JOIN MINT" or "OPEN HASHBOX" to see what is possible with this solution. */}
        </Typography>  
        <Typography>
          Two variations of the solution are currently running productive (as of July 2022). Just visit {' '}
          <a href='https://www.hashguardians.io' target='_blank' rel="noreferrer">https://www.hashguardians.io</a>{' '}
          and click on "JOIN MINT" or "OPEN HASHBOX" to see what is possible with this solution.
          {/* If you are using the Eternl wallet (ccvault), please be sure that any simultaneous donations are disabled before submitting the transaction.  Assets may be sent to the donation address otherwise.   
          Officially supported wallets: Eternl | Nami | Daedalus | AdaLite */}
        </Typography>
      </section>   
    </>
  )
}

export default Start