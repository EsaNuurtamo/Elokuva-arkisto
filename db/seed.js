var Database = require('../db/connection');

var Message = Database.sequelize.define('Message', {
  id: { type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: Database.DataTypes.STRING,
  content: Database.DataTypes.TEXT
});

var Reply = Database.sequelize.define('Reply', {
  id: { type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  content: Database.DataTypes.TEXT
});

var Movie = Database.sequelize.define('Movie', {
  id: { type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: Database.DataTypes.STRING,
  description: Database.DataTypes.TEXT,
  year: Database.DataTypes.INTEGER,
  director: Database.DataTypes.STRING,
  writer: Database.DataTypes.STRING,
  actors: Database.DataTypes.TEXT
  
});

var User = Database.sequelize.define('User', {
  id: { type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: Database.DataTypes.STRING,
  password: Database.DataTypes.STRING,
});

Message.belongsTo(User);
Message.belongsTo(Movie);
Reply.belongsTo(Message);
Reply.belongsTo(User);

Message.hasMany(Reply);
Movie.hasMany(Message);
User.hasMany(Message);
User.hasMany(Reply);

Database.sequelize.sync();