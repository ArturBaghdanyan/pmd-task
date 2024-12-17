import { v4 } from "uuid";
import card1 from '../../assets/statistics_icons/card1.svg';
import card2 from '../../assets/statistics_icons/card2.svg';
import card3 from '../../assets/statistics_icons/card3.svg';

export const statisticsData = [
    {
        firstItem: [
            {
                id: v4(),
                icon: card1,
                title: 'Card Type',
                text: 'Secondary'
            },
            {
                id: v4(),
                title: 'Bank',
                text: 'DBL Bank'
            },
            {
                id: v4(),
                title: 'Card Number',
                text: '**** **** 5600'
            },
            {
                id: v4(),
                title: 'Namain Card',
                text: 'William'
            },
            {
                id: v4(),
                button: 'View Details'
            },
        ],
        secItem: [
            {
                id: v4(),
                icon: card2,
                title: 'Card Type',
                text: 'Secondary'
            },
            {
                id: v4(),
                title: 'Bank',
                text: 'BRC Bank'
            },
            {
                id: v4(),
                title: 'Card Number',
                text: '**** **** 4300'
            },
            {
                id: v4(),
                title: 'Namain Card',
                text: 'Michel'
            },
            {
                id: v4(),
                button: 'View Details'
            },
        ],
        thirdItem: [
            {
                id: v4(),
                icon: card3,
                title: 'Card Type',
                text: 'Secondary'
            },
            {
                id: v4(),
                title: 'Bank',
                text: 'ABM Bank'
            },
            {
                id: v4(),
                title: 'Card Number',
                text: '**** **** 7560'
            },
            {
                id: v4(),
                title: 'Namain Card',
                text: 'Edward'
            },
            {
                id: v4(),
                button: 'View Details'
            },
        ],
    }
  
]