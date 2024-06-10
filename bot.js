const TelegramApi = require("node-telegram-bot-api");
const messageHandler = require("./message-handler");
const botCommands = require("./commands");
const menuHandler = require("./menu-handler");

const token = "7060393277:AAFX4gljOrbsjuSRb-cSODxERdmausDHhLY";
const bot = new TelegramApi(token, { polling: true });

botCommands(bot);
messageHandler(bot);
menuHandler(bot);
