import firebaseconfig from "../firebaseconfig";
import { getAnalytics, logEvent } from "firebase/analytics";
const analytics = getAnalytics(firebaseconfig);

export default class Logger {
  static instance = Logger.instance || new Logger();

  static _decorateAndLog(logObject, logLevel) {
    const decoratedMessage = {
      logLevel: logLevel,
      timeStamp: new Date(),
      userId: 1234,
      ...logObject,
    };
    const message = JSON.stringify(decoratedMessage, (k, v) => {
      return v === null ? undefined : v;
    });
    if (process.env.NODE_ENV !== "production") {
      console.log(`${message}`);
    } else {
      // here use firebase for logging in production
      logEvent(analytics, logLevel, decoratedMessage);
    }
  }

  debug(logObject) {
    Logger._decorateAndLog(logObject, "DEBUG");
  }

  warn(logObject) {
    Logger._decorateAndLog(logObject, "WARN");
  }

  error(logObject) {
    Logger._decorateAndLog(logObject, "ERROR");
  }
}
