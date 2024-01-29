import {AUTH0_USER_ID} from "./constants/localStoreKeys";

class Logger {

  static _decorateAndLog(logObject, logLevel) {
    const userId = localStorage.getItem(AUTH0_USER_ID) || null;

    const decoratedMessage = {
      'logLevel': logLevel,
      'timeStamp': new Date(),
      'userId': userId,
      ...logObject
    };
    const message = JSON.stringify(decoratedMessage, (k, v) => {
      return (v === null) ? undefined : v
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log(`${message}`);
    }
  }

  //noinspection JSMethodCanBeStatic
  debug(logObject) {
    Logger._decorateAndLog(logObject, 'DEBUG')
  }

  //noinspection JSMethodCanBeStatic
  warn(logObject) {
    Logger._decorateAndLog(logObject, 'WARN')
  }

  //noinspection JSMethodCanBeStatic
  error(logObject) {
    Logger._decorateAndLog(logObject, 'ERROR');
  }
}

export const logger = new Logger();
