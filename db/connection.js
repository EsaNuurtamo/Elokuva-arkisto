var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://sfzriydnmsxmtu:4CkLMByF770LfM-KzFnY4tY9Jo@ec2-107-21-223-72.compute-1.amazonaws.com:5432/d9cvcbvor77fop', {
  dialect: 'postgres',
  protocol: 'postgres'
});
/*var sequelize = new Sequelize('foorumi', '', '', {
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});*/
module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
