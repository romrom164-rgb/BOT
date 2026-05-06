const TelegramBot = require('node-telegram-bot-api');

// берём токен из Render (не вставляй напрямую)
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Я живой бот 🤖');
});