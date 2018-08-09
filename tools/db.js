const DB_TYPE = {
  MYSQL: 'MYSQL',
  MONGO: 'MONGO',
  DEFAULT: 'DEFAULT'
}

const MEMORY_DB = (data) => {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data)
    }
    reject(new Error('No Data.'))
  })
}

const MYSQL = () => {
  return new Promise((resolve, reject) => {
    // knex & knex
  })
}

const MONGO = () => {
  return new Promise((resolve, reject) => {
    // mongoose & mongodb
  })
}

export default (db_type) => {
  switch (db_type) {
    case 'MYSQL':
      return MYSQL
    case 'MONGO':
      return MONGO
    default:
      return MEMORY_DB
  }
}
