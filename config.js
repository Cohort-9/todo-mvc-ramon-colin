module.exports = {
  DEV: {
    client: 'pg',
    connection:process.env.DATABASE_URL,
    debug: false
  },
  TEST: {
    client: 'pg',
   connection:process.env.DATABASE_URL_TEST,
    debug: true
  },
  PROD: {},
  PORT: process.env.PORT || 8080  
};