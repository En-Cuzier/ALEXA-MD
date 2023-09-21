const chalk = require("chalk")
const fs = require("fs")

//✅automatic system | ☑️ස්වයංක්‍රීය පද්ධතිය ( true to on, false to off | කියාත්මක කිරීම true, අකීයකිරීම false )
global.autoTyping = false //auto tying in group (සමූහ තුල ස්වයංක්‍රීය පණිවිඩ)
global.autoRecord = false //auto recording (ස්වයංක්‍රීය කටහඩ පටිගත කිරීම්)
global.autoblockmorroco = false //♻️auto block (ස්වයංක්‍රීය අවහිර කිරීම්)
global.autokickmorroco = false //♻️auto kick (ස්වයංක්‍රීය ඉවත් කිරීම්)
global.antispam = false 
//♻️auto kick spammer | ♻️ස්පෑම් එවන්නන් ස්වයංක්‍රීයව ඉවත් කිරීම



//👤owmner deatils | 👤අයිතිකරු ගේ විස්තර

global.owner = ['94702256963'] //number
global.ownernomer = "94702256963" //number2
global.ownername = "💎Coustem" //👥owner (අයිතිකරු)
global.ytname = "YT: Toxic-Devil-music" //yt chanel
global.socialm = "GitHub: Chamodkeshan" //github or insta name
global.location = "Sri Lanka, Colombo" //location (♎වාසස්ථානය)

global.botname = "Queen-Alexa Lite"
global.ownernumber = '94702256963'
global.ownername = 'unknown'
global.ownerNumber = ["94702256963@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/"
global.websitex = "https://youtube.com/"
global.wagc = "https://chat.whatsapp.com/"
global.themeemoji = '🪀'
global.wm = "unknown."
global.botscript = 'https://github.com/' //github
global.packname = "Sticker By"
global.author = "unknown\n\n+94702256963"
global.creator = "94702256963@s.whatsapp.net"
global.prefa = ['','!','.','#','&']

//⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️


  //👇👇👇Don't Change / Don't Change👇👇👇

 //👇👇👇කරුණාකර මෙය වෙනස් නොකරන්න👇👇👇

//🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫

//🚫don't change

global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./Queen-Alexa/logo.jpg")
global.log0 = fs.readFileSync("./Queen-Alexa/logo.jpg")
global.err4r = fs.readFileSync("./Queen-Alexa/logo.jpg")
global.thumb = fs.readFileSync("./Queen-Alexa/logo.jpg")
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

global.keyopenai = "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"

//👇👇👇🚫DO NOT CHANGE🚫👇👇👇

//(⚠️Do not change)

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
