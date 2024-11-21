const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/6p4KXtvD/IMG-20241121-WA0001.jpg" || "https://i.postimg.cc/6p4KXtvD/IMG-20241121-WA0001.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Brainy Codes" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347068925562";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/6p4KXtvD/IMG-20241121-WA0001.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_26_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICA4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDg1LFxuICAgICAgICA4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNTVBWU4rbENZQjdjRFBYamEzZURZOUpGQXRtQ0NxUWRsamluV3NnYWpOWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDY4OTI1NTYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNTREODVCOTJGRDQ0MzgxQkNEN0U2QTc4NjNDMDkxOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIyMDk5NjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDY4OTI1NTYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1OEM5REE4QjkyNUY4REU0MEEwMTgxQzNDQTlCMDE1N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIyMDk5NjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicUllZDY0V0lUeHF2MzhKb0NncExIZ1wiLFxuICBcInBob25lSWRcIjogXCJmMzc0YTA5ZS04MDI1LTRjMWUtOWQ4ZS04ZjVmZWVmM2M0MDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgOTUsXG4gICAgICAxMzgsXG4gICAgICAzMSxcbiAgICAgIDI0NyxcbiAgICAgIDE4NCxcbiAgICAgIDE5LFxuICAgICAgMTcwLFxuICAgICAgMjQ3LFxuICAgICAgMTMxLFxuICAgICAgMTksXG4gICAgICAyMzMsXG4gICAgICAyMjAsXG4gICAgICAyNCxcbiAgICAgIDEzLFxuICAgICAgNzMsXG4gICAgICAxODcsXG4gICAgICAyNSxcbiAgICAgIDE5MixcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAxNDcsXG4gICAgICAxMzcsXG4gICAgICAxMDYsXG4gICAgICA4MyxcbiAgICAgIDE2OSxcbiAgICAgIDE5OCxcbiAgICAgIDI4LFxuICAgICAgMjU0LFxuICAgICAgMTg5LFxuICAgICAgMjksXG4gICAgICAyMjYsXG4gICAgICAxODQsXG4gICAgICAyMTAsXG4gICAgICAxNTEsXG4gICAgICAyMzYsXG4gICAgICAxMzUsXG4gICAgICAzOSxcbiAgICAgIDI0LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkEySEtMRUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjg5MjU1NjI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlLnwnZWj8J2VkvCdlZrwnZWf8J2VqiDihILwnZWg8J2VlfCdlZbwnZWkXCIsXG4gICAgXCJsaWRcIjogXCIxNjQyMDEzMzA5NjI2NDk6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOV09oTThGRUtYYS9ia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInEwQ3JmaS84TGMyMzcvTVdjY3Q4Vm4wY0l0Rk5mWkZYQmJBdTZXcm9yRk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOVp4QWNUa2FTQ0VHWVp5WUs5aFdudjdJZ0N3WFVHNndGK2c3WmtDZVNDOElzMDlIZUg3TUZZZThXaEc5QTMyaENtU1A0UzlVajNqQXJnZTM0NENtREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNnBwT0JvNE1Fdm9HS2RSTUV5M0xJT2N0ZzhPYnRTZWpxOVBabGg3NXZpVk1Pb2xqbUFXNm5oODRDNWU4SnNtZGpmRzJQWi8yT1JrWE5BQjQxTFZBQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODkyNTU2Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyMDk5NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHWHFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdYcS5qc29uIjogIntcImtleURhdGFcIjpcIkxuQm9mSjc4ck5mdmNkZ2g1eWNRODRkWm1Xd3N4bHpyWkpvT0Z4SmJRK0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwNzkxOTcwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyMjA5OTY3MTEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "@",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BCODES",
  ownername:process.env.OWNER_NAME|| "Itz Brainy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BCODES"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
