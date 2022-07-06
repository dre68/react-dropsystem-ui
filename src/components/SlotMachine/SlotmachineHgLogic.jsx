import {stripe1DataDesktop, stripe1DataMobile, stripe2DataDesktop, stripe2DataMobile} from './stripedata';

const SlotmachineHgLogic = () => {
    const mobileBreakpoint = 600;    
    const isMobilePhone = window.innerWidth < mobileBreakpoint ? true : false;

    const reelWidth = isMobilePhone ? 125 : 185;
    const reelHeight = isMobilePhone ? 900 : 1200;
    const options1 = { animSpeed: 6900, reelWidth: reelWidth, reelHeight: reelHeight };
    const options2 = { animSpeed: 12400, reelWidth: reelWidth, reelHeight: reelHeight };

    let dataStripeOne = isMobilePhone ? stripe1DataMobile : stripe1DataDesktop;
    let dataStripeTwo = isMobilePhone ? stripe2DataMobile : stripe2DataDesktop;

    return {dataStripeOne, dataStripeTwo, options1, options2}
    }

export default SlotmachineHgLogic
