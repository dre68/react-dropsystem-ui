const positionsDesktop = [100,300,500,700,900,1100];
const positionsMobile = [75,225,375,525,675,825];

const imgStripeUrlDesktop1 = 'https://cdn.hashguardians.io/wp-content/uploads/2022/04/ea_reel1_1_full.png';
const imgStripeUrlDesktop2 = 'https://cdn.hashguardians.io/wp-content/uploads/2022/04/ea_reel1_2_full.png';
const imgStripeUrlMobile1 = 'https://cdn.hashguardians.io/wp-content/uploads/2022/04/ea_reel1_1_mobile.png';
const imgStripeUrlMobile2 = 'https://cdn.hashguardians.io/wp-content/uploads/2022/04/ea_reel1_2_mobile.png';
    
const stripe1DataDesktop = [
    {
        imageSrc: imgStripeUrlDesktop1,
        symbols: [
        {
            title: 1,
            position: positionsDesktop[0],
            weight: 0
        },
        {
            title: 2,
            position: positionsDesktop[1],
            weight: 9
        },
        {
            title: 3,
            position: positionsDesktop[2],
            weight: 0
        },
        {
            title: 4,
            position: positionsDesktop[3],
            weight: 0
        },
        {
            title: 5,
            position: positionsDesktop[4],
            weight: 0
        },
        {
            title: 6,
            position: positionsDesktop[5],
            weight: 0
        }
        ]
    },
];

const stripe1DataMobile = [
{
    imageSrc: imgStripeUrlMobile1,
    symbols: [
    {
        title: 1,
        position: positionsMobile[0],
        weight: 0
    },
    {
        title: 2,
        position: positionsMobile[1],
        weight: 9
    },
    {
        title: 3,
        position: positionsMobile[2],
        weight: 0
    },
    {
        title: 4,
        position: positionsMobile[3],
        weight: 0
    },
    {
        title: 5,
        position: positionsMobile[4],
        weight: 0
    },
    {
        title: 6,
        position: positionsMobile[5],
        weight: 0
    }
    ]
},
];

const stripe2DataDesktop = [
{
    imageSrc: imgStripeUrlDesktop2,
    symbols: [
    {
        title: 7,
        position: positionsDesktop[0],
        weight: 9
    },
    {
        title: 8,
        position: positionsDesktop[1],
        weight: 0
    },
    {
        title: 9,
        position: positionsDesktop[2],
        weight: 0
    },
    {
        title: 10,
        position: positionsDesktop[3],
        weight: 0
    },
    {
        title: 11,
        position: positionsDesktop[4],
        weight: 0
    },
    {
        title: 12,
        position: positionsDesktop[5],
        weight: 0
    }
    ]
},
];

const stripe2DataMobile = [
{
    imageSrc: imgStripeUrlMobile2,
    symbols: [
    {
        title: 7,
        position: positionsMobile[0],
        weight: 9
    },
    {
        title: 8,
        position: positionsMobile[1],
        weight: 0
    },
    {
        title: 9,
        position: positionsMobile[2],
        weight: 0
    },
    {
        title: 10,
        position: positionsMobile[3],
        weight: 0
    },
    {
        title: 11,
        position: positionsMobile[4],
        weight: 0
    },
    {
        title: 12,
        position: positionsMobile[5],
        weight: 0
    }
    ]
},
];

export {stripe1DataDesktop, stripe1DataMobile, stripe2DataDesktop, stripe2DataMobile}