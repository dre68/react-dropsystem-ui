import { useState, useEffect } from 'react';

const LiveMintLogic = () => {
    const hbUrl = 'https://cdn.hashguardians.io/wp-content/uploads/2022/05/EarlyAdopterHashBox.gif';
    const hbRotatingSoundUrl = 'https://cdn.hashguardians.io/wp-content/uploads/2022/05/boxRotating.mp3';
    const slotMachineSoundUrl = 'https://cdn.hashguardians.io/wp-content/uploads/2022/05/slotsound_weaponsdetected.mp3';
  
    const [hbClassName, setHbClassname] = useState('');
    const [boxRotatingSound] = useState(new Audio(hbRotatingSoundUrl));
    const [slotMachineSound] = useState(new Audio(slotMachineSoundUrl));
    const [wasBtnClicked, setWasBtnClicked] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [btnText, setBtnText] = useState('Open Box');  
    const [isSlotRunning, setIsSlotRunning] = useState(false);
    const [smClassName, setSmClassname] = useState('slotmachine__container-hidden');
  
    const onClickHandlerLiveMint = () => {
        if(!wasBtnClicked) {    
            setHbClassname('hashbox__container');
            setWasBtnClicked(true);
            slotMachineSound.play();
            setIsBtnDisabled(true);    
            setTimeout(() => setBtnText('Open next one'),200);
            setIsSlotRunning(true);
            setSmClassname('slotmachine__container-content');
        } else {
            window.location.reload(true);
        }            
    }
  
    useEffect(() => {    
      boxRotatingSound.volume = 0.5;  
      wasBtnClicked ? boxRotatingSound.pause() : boxRotatingSound.play();    
    }, [wasBtnClicked, boxRotatingSound])  
  
    useEffect(() => {
      slotMachineSound.addEventListener('ended', () => setIsBtnDisabled(false));
      return () => {
        slotMachineSound.removeEventListener('ended', () => setIsBtnDisabled(false));
      };
    }, [slotMachineSound]);

  return {hbClassName, hbUrl, isSlotRunning, smClassName, onClickHandlerLiveMint, isBtnDisabled, btnText}
}

export default LiveMintLogic