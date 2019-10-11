import portfolio from './../../Assets/Images/portfolio.png';
import contact from './../../Assets/Images/contact.svg';
import music_note from './../../Assets/Images/music_note.png';
import tic_tac_toe from './../../Assets/Images/tic_tac_toe.png';
import guided_daydreaming from './../../Assets/Images/guided_daydreaming.svg';

export const projectData = [
    {
        subtitle: 'This Portfolio',
        description: 'A marketting page to market myself',
        technologies: 'React, styled components',
        image: portfolio,
        link: 'https://github.com/marwaybs/simple_portfolio'
    },
    {
        subtitle: 'Contacts App',
        description: 'Exploring the new technologies used with react development as reccomended by react boilerplate',
        technologies: 'React, Redux, Redux Saga, styled components, Ruby on Rails',
        image: contact,
        link: 'https://github.com/marwaybs/simple_portfolio'
    },
    {
        subtitle: 'Tic Tac Toe Game',
        description: 'Wanted to build a simple app to explore vanilla js a bit. Future addition is to add a cpu, animations',
        technologies: 'React, vanilla JS',
        image: tic_tac_toe,
        link: 'https://github.com/marwaybs/tic_tac_toe'
    },
    {
        subtitle: 'Musicality Trainer',
        description: 'A cross platform mobile app to train musicality for dancing.',
        technologies: 'React Native',
        image: music_note,
        link: 'https://github.com/marwaybs/musicality'
    },
    {
        subtitle: 'Guided Daydreaming',
        description: 'An experimental computational therapy based on EMDR',
        technologies: 'Rails, JS, bulma.css',
        image: guided_daydreaming,
        link: 'https://github.com/marwaybs/guidedDaydreaming'
    }
]
