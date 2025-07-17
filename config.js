//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +919366316018
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

//contact details
global.ownernomer = "254740358165"
global.dev = ["254740358165"]
global.ownername = "DEVIL KING"
global.ytname = "YT: DEVILSTORE"
global.socialm = "GitHub: DEVILXKING"
global.location = "India, ASSAM, GOALPARA"

global.ownernumber = '254740358165'  //creator number
global.ownername = 'DEVIL KING' //owner name
global.botname = 'DEVIL CRASH V6' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'DEVIL\n\nContact: +254740358165'

//console view/theme
global.themeemoji = '🪀'
global.wm = "DEVIL CRASH PREMIUM"

//theme link
global.link = 'https://whatsapp.com/channel/0029Vb2zlJP1CYoLCdr1k13f'
global.idch = '120363387791500799@newsletter'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @DEVILSTOREALL\nTelegram: @DEVILXKING06\nWhatsApp: +254740358165`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @DEVILSTOREALL\nTelegram: @DEVILXKING06\nWhatsApp: +254740358165`,
}

global.banner = ["254740358165@s.whatsapp.net"]

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})