const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=fdde4b171274ce1f",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Hnsk23/hnsk/blob/main/images/HANSA%20md.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 HANSA-MD Is Alive Now😍*",
BOT_OWNER: '94768546691',  // Replace with the owner's phone number



};
