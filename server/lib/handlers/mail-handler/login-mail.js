const nodemailer=require("nodemailer");
const events=require('events');
const emitter=new events.EventEmitter();
require('dotenv').config();

module.exports=(user)=>{
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS
        }
      });

   const login=async()=>{
    await transporter.sendMail({
        from:'babysfoodplace@hotmail.com',
        to:user.email,
        subject:"Welcome back!",
        text:`Hello ${user.name}, you have successfully logged in to our page!`,
        html: {path:'./lib/handlers/mail-handler/login-mail.html'}

    });
}

    emitter
        .on('login',data=>{
            login();
            console.log('Message sent!');
        })

        emitter.emit('login')
}