// 'use strict';
// /*** @return {object} */
// export const createLogger = () => {
//   const date = new Date();
//   let arr = [];

//   return {
//     log: function (logText) {
//       arr.push({
//         message: logText,
//         type: log,
//         dateTime: date,
//       });
//     },
//     warm: function (warmText) {
//       arr.push({
//         message: warmText,
//         type: warm,
//         dateTime: date,
//       });
//     },
//     erorr: function (erorrText) {
//       arr.push({
//         message: erorrText,
//         type: erorr,
//         dateTime: date,
//       });
//     },
//   };
// };

// // examples
// const logger1 = createLogger();
// logger1.log('User logged in');
// logger1.warn('User is tring to ented restricted page');
// logger1.log('User logged out');
// logger1.error('Unexpected error on the site');

// logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

// const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
// logger2.getRecords('error'); // ===> []
// logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

// const logger3 = createLogger();
// logger3.getRecords('error'); // ===> []
// logger3.getRecords(); // ===> []

'use strict';

/**
 * @return {object}
 */
'use strict';

export const createLogger = () => {
  const arrayMessage = [];

  return {
    log: function (logMessage) {
      arrayMessage.push({
        message: logMessage,
        type: 'log',
        dateTime: new Date(),
      });
    },
    warn: function (warnMessage) {
      arrayMessage.push({
        message: warnMessage,
        type: 'warn',
        dateTime: new Date(),
      });
    },
    error: function (errorMessage) {
      arrayMessage.push({
        message: errorMessage,
        type: 'error',
        dateTime: new Date(),
      });
    },
    getRecords: (type) =>
      type === undefined
        ? arrayMessage.sort((a, b) => b.dateTime - a.dateTime)
        : arrayMessage
            .filter((el) => el.type === type)
            .sort((a, b) => b.dateTime - a.dateTime),
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []

console.log(createLogger());
