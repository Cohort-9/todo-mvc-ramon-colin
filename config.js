module.exports = {
  DEV: {
    client: 'pg',
    connection:'postgres://ghnufhnx:qI4AZzMvCoiaB-L0ty990gL85h4p-723@stampy.db.elephantsql.com:5432/ghnufhnx',
    // connection: {
    //   user: 'dev',
    //   password: 'letmein',
    //   database: 'todo-list'
    // },
    debug: false
  },
  TEST: {
    client: 'pg',
    connection:'postgres://ghnufhnx:qI4AZzMvCoiaB-L0ty990gL85h4p-723@stampy.db.elephantsql.com:5432/ghnufhnx',
    // connection: {
    //   user: 'dev',
    //   password: 'letmein',
    //   database: 'todo-list'
    // },
    debug: true
  },
  PROD: {},
  PORT: process.env.PORT || 8080  
};