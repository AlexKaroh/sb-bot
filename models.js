const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const UserModel = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
  chatId: { type: DataTypes.INTEGER, unique: true },
  userName: { type: DataTypes.STRING, unique: true },
  role: { type: DataTypes.STRING, defaultValue: "Newcomer" },
});

const OfferModel = sequelize.define("offer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
  price: { type: DataTypes.STRING },
  game: { type: DataTypes.STRING },
  info: { type: DataTypes.STRING },
  creationDate: { type: DataTypes.DATE },
  status: { type: DataTypes.BOOLEAN },
  buyerId: { type: DataTypes.INTEGER },
  boosterId: { type: DataTypes.INTEGER, allowNull: true },
});

module.exports = { UserModel, OfferModel };
