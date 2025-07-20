//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "7851981075:AAHJHfotU_hkyhvYSE9fklFOmcR6izahsnk" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "DEVIL CRASH V6" //your bot name
global.OWNER_NAME = "DEVIL KING" //your name with sign @
global.OWNER = ["https://t.me/+EFc86BlQ4142NThl", "https://youtube.com/@DEVILSTOREALLF"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7203033368"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://i.ibb.co/KjjRX8Sh/thumb.png' //your bot pp


//approval
global.GROUP_ID = -1002777037316; // Replace with your group ID
global.CHANNEL_ID = -1002697297786; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/+CiQitI3yc4QyMzQ1"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/devilCrahVip"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb2zlJP1CYoLCdr1k13f"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@DEVIL-KING-STORE"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://www.instagram.com/self__style__girl"; // Replace with your ig linkl

global.owner = global.owner = ['254740358165'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
