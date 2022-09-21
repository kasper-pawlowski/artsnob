import paint_1 from './assets/paint_1.jpg';
import paint_2 from './assets/paint_2.jpg';
import paint_3 from './assets/paint_3.jpeg';

const data = [
    {
        question: 'This painting was a gift from Vincent Van Gogh to his newborn nephew, who was also named Vincent.',
        answers: [
            {
                title: 'STARRY NIGHT',
                is_correct: false,
                id: 0,
            },
            {
                title: 'ALMOND BLOSSOM',
                is_correct: true,
                id: 1,
            },
            {
                title: 'THE NIGHT CAFÉ',
                is_correct: false,
                id: 2,
            },
            {
                title: 'IRISES',
                is_correct: false,
                id: 3,
            },
        ],
        paint: paint_1,
        color: '#1b3132',
    },
    {
        question: 'The Persistence of Memory by Salvador Dali features what kind of melting objects?',
        answers: [
            {
                title: 'CLOCKS',
                is_correct: true,
                id: 0,
            },
            {
                title: 'CANDLES',
                is_correct: false,
                id: 1,
            },
            {
                title: 'FOOD',
                is_correct: false,
                id: 2,
            },
            {
                title: 'DOOR KNOBS',
                is_correct: false,
                id: 3,
            },
        ],
        paint: paint_2,
        color: '#332936',
    },
    {
        question: 'This painting is Katsushika Hokusai’s most famous from the series “Thirty-Six Views of Mount Fuji”.',
        answers: [
            {
                title: 'FINE WIND, CLEAR MORNING',
                is_correct: false,
                id: 0,
            },
            {
                title: 'SUNDAI, EDO',
                is_correct: false,
                id: 1,
            },
            {
                title: 'THE GREAT WAVE',
                is_correct: true,
                id: 2,
            },
            {
                title: 'TEAHOUSE',
                is_correct: false,
                id: 3,
            },
        ],
        paint: paint_3,
        color: '#042d52',
    },
];

export default data;
