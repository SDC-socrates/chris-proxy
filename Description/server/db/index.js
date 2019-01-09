const mysql = require('mysql');
const faker = require('faker');

let i;


// Create a database connection and export it from this file.

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'cars',
});

connection.connect();

// clear table
connection.query('delete from carInfo;', (err) => {
  if (err) { throw err; }
});

// insert 100 mock data into dabase
for (i = 1; i < 101; i += 1) {
  const queryString = 'insert into carInfo (id, companyName, carName, edition, trips, mpg, gas, doors, seats, description, business, features, extras, guidelines, faq, moreD, moreE, sentence) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
  const queryArgs = [i, 'LUSO', `${faker.name.firstName().toUpperCase()} ${faker.name.lastName().toUpperCase()}`, faker.name.findName(), faker.random.number({ min: 10, max: 100 }), faker.random.number({ min: 16, max: 30 }), `Gas (${faker.random.arrayElement(['Premium', 'Regular'])})`, 4, faker.random.arrayElement([2, 4, 5, 6, 7]), faker.lorem.paragraph(), 'This host caters to business travelers.', 'Automatic transmission', faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.sentence(8)];
  connection.query(queryString, queryArgs, (err) => {
    if (err) { throw err; }
  });
}

const getData = (id, callback) => {
  const queryString = `select * from carInfo where id = ${id};`;
  connection.query(queryString, (err, result) => {
    if (err) {
      throw err;
    } else {
      callback(result[0]);
    }
  });
};

module.exports.connection = connection;
module.exports.getData = getData;
