const { Sequelize } = require("sequelize");

module.exports = new Sequelize("dbsb", "root", "root666", {
  host: "master.b670ca9e-2e78-4a4c-8d38-522377a1294b.c.dbaas.selcloud.ru",
  port: "5432",
  dialect: "postgres",
});
