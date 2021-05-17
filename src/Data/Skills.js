import { DataStack } from './Stack.js';

export const DataSkills = {
  Languages: [
    {
      key: 0,
      stack: DataStack.js,
      info: [
        'ES6+',
        'Object-oriented programming with design patterns and SOLID',
        'Functional programming',
        'Asynchronous programming with Promise',
        'DOM API',
        'Event Loop',
        'RegExp',
      ],
    },

    {
      key: 2,
      stack: DataStack.html5,
      info: [],
    },
    {
      key: 3,
      stack: DataStack.css3,
      info: [],
    },
  ],
  'Frameworks/libraries': [
    {
      key: 0,
      stack: DataStack.react,
      info: [],
    },
    {
      key: 1,
      stack: DataStack.redux,
      info: [],
    },

    {
      key: 2,
      stack: DataStack.reactBootstrap,
      info: [],
    },
    {
      key: 3,
      stack: DataStack.reactRouter,
      info: [],
    },
  ],

  Databases: [
    {
      key: 0,
      stack: DataStack.mongodb,
      info: [],
    },
    {
      key: 1,
      stack: DataStack.tsql,
      info: ['ERD', 'T-SQL'],
    },
  ],
  Backend: [
    {
      key: 0,
      stack: DataStack.node,
      info: ['Node.js API', 'Networking with Socket.io'],
    },
    {
      key: 1,
      stack: DataStack.express,
      info: [],
    },
  ],

  Tools: [
    {
      key: 0,
      stack: DataStack.webpack,
      info: [],
    },
    {
      key: 1,
      stack: DataStack.git,
      info: [],
    },
    {
      key: 2,
      stack: DataStack.github,
      info: [],
    },
    {
      key: 3,
      stack: DataStack.postman,
      info: [],
    },
  ],
};
