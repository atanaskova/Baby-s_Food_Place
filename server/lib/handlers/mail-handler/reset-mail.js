const nodemailer=require("nodemailer");
const events=require('events');
const emitter=new events.EventEmitter();
require('dotenv').config();

module.exports=(email)=>{
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS
        }
      });

    const reset=async()=>{
        await transporter.sendMail({
            from:'babysfoodplace@hotmail.com',
            to:email,
            subject:'Reset Password',
            html: {path:'./lib/handlers/mail-handler/reset-mail.html'}
        });
    }

    emitter
        .on('reset',data=>{
            reset();
            console.log('Check your email to change password!');
        })

        emitter.emit('reset')
}