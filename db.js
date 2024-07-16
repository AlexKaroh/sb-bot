const { Sequelize } = require("sequelize");

module.exports = new Sequelize("sbbt_t9uw", "sbbt", "WHE94cprzY9WmD10zRLkZ2g7ZcI208Hw", {
  host: "dpg-cqb2akuehbks73dhcffg-a.frankfurt-postgres.render.com",
  port: "5432",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: "true",
    },
  },
});
