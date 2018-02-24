process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '540566105:AAHl5LaX1fdGqlN44WsNjNb9dK6AAC8RT1A';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Responder todas la preguntas

bot.on('message', (msg) => {

var pregunta = "?";
if (msg.text.toString().toLowerCase().includes(pregunta)) {
    bot.sendMessage(msg.chat.id, "Muy Pronto Lanzamiento Bot");
}

});

//direccion comando

bot.onText(/\/direccion/, (msg) => {

bot.sendMessage(msg.chat.id, "Local primero del primer centrocomercial");

});

//algunas veces - lee y responde
bot.on('message', (msg) => {

var algunas= "algunas veces";
if (msg.text.toString().toLowerCase().indexOf(algunas) === 0) {
bot.sendMessage(msg.chat.id,"No te conosco");
}

});

//Mayor que numeros

bot.onText(/\/mayor (.+)/, function Mayor(msg) {
  if (val1 > val2) {
  bot.sendMessage(msg.chat.id, "Mayor: " + val1);
  }
  else {
  bot.sendMessage(msg.chat.id, "Mayor: " + val2);
  }
});
//Numero de telefono

bot.onText(/\/telefono/, (msg) => {

bot.sendMessage(msg.chat.id, "2018-2018");

});
// Hola usuario

bot.onText(/\/hola/, (msg) => {

bot.sendMessage(msg.chat.id, "Hola @" + msg.from.username);
});

//Me quieres?

bot.onText(/\/mequieres/, (msg) => {

bot.sendMessage(msg.chat.id, "Me quiere?", {
"reply_markup": {
    "keyboard": [["Te Quiero", "No Te Quiero"]]
    }
});

});

// Respuesta a te quiero o no te quiero

bot.on('message', (msg) => {
var tequiero = "Te Quiero";
if (msg.text.indexOf(tequiero) === 0) {
    bot.sendMessage(msg.chat.id, "Aww que lindis");
}
var notequiero = "No Te Quiero";
if (msg.text.indexOf(notequiero) === 0) {
    bot.sendMessage(msg.chat.id, "Ushh que pesado");
}
});

//Enviar Meme

bot.onText(/\/unmeme/, (msg) => {

bot.sendPhoto(msg.chat.id,"http://blogs.publico.es/strambotic/files/2016/12/okkikkojpg_EDIIMA20150304_0426_13.jpg",{caption : "Por andar pidiendo momos"} );

});
