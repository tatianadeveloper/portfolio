import React from '../images/icons/react.svg';
import Node from '../images/icons/nodejs.svg';
import { DataStack } from './Stack.js';

export const DataProjects = [
  {
    id: 0,
    name: 'Tetris game',
    screenshot: 'Tetris.png',
    description:
      'The project is built in vanila JavaScript, CSS and HTML canvas',
    githubLink: 'https://github.com/tatianadeveloper/Tetris',
    link: 'https://tatianadeveloper.github.io/Tetris/',
    stack: [DataStack.js, DataStack.html5, DataStack.css3, DataStack.webpack],
    feature: [],
  },
  {
    id: 2,
    name: 'Portfolio website',
    screenshot: 'Portfolio.png',
    description: 'The project is built in React',
    githubLink: '',
    link: '',
    stack: [
      DataStack.js,
      DataStack.react,
      DataStack.reactBootstrap,
      DataStack.html5,
      DataStack.css3,
    ],
    feature: [],
  },
  {
    id: 1,
    name: 'Kanban board',
    screenshot: '',
    description: 'MERN stack Kanban board app. Currently In progress',
    githubLink: '',
    link: '',
    stack: [
      DataStack.js,
      DataStack.react,
      DataStack.reactBootstrap,
      DataStack.mongodb,
      DataStack.redux,
      DataStack.html5,
      DataStack.css3,
    ],
    feature: [],
  },

  {
    id: 3,
    name: 'Headfi',
    screenshot: 'Headfi.png',
    description:
      'e-commerce website for headphones online store built on Wordpress and theme Flatsome',
    githubLink: '',
    link: 'https://headfi.co.nz/',
    stack: [
      DataStack.js,
      DataStack.html5,
      DataStack.css3,
      DataStack.php,
      DataStack.wp,
    ],
    feature: [],
  },
  {
    id: 4,
    name: 'Dimension Screens',
    screenshot: 'DimensionScreens.png',
    description:
      'e-commerce website for screens online store built on Wordpress and theme Flatsome',
    githubLink: '',
    link: 'https://dimensionscreens.co.nz/',
    stack: [
      DataStack.js,
      DataStack.html5,
      DataStack.css3,
      DataStack.php,
      DataStack.wp,
    ],
    feature: [],
  },
];
