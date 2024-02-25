const promise = require('bluebird');
const pgPromise = require('pg-promise');
import { pgrevucConfig } from '@/configs';
//checking 
const initOptions = {
  promiseLib: promise,
  ...(process.env.NODE_ENV === 'dev' && {
    query(e) {
      console.log(e.query);
    },
    error(error, e) {
      if (e.cn) {
        console.error('CN:', e.cn);
        console.error('EVENT:', error.message || error);
      }
    }
  })
};

const pgp = pgPromise(initOptions);
pgp.pg.defaults.max = 50;


export default function getPgrevuc() {
  return createSingleton('revuc-api', () => {
    return {
      db: pgp(pgrevucConfig),
      pgp
    };
  });
};
