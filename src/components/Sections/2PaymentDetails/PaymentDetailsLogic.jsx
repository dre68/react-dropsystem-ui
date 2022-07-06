import { useState, useEffect } from 'react';

const PaymentDetailsLogic = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const payment = { addr: 'addr123123123123123123123123123123', amount: '3' };
    const copyBoxLabel = { addr: 'Send to', amount: 'Amount', iconcolor: 'rgba(255, 255, 255, 0.6)' };

    const showContent = () => {
        setIsLoading(false);
        setIsLoaded(true);
    }

    // Replace this with something that needs to be loaded
    useEffect(() => {
        const timer = setTimeout(() => showContent(), 3000);
        return () => clearTimeout(timer);
    }, []);

    return {
        isLoading, isLoaded, payment, copyBoxLabel
    }
}

export default PaymentDetailsLogic




