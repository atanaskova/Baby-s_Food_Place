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

    const reset=async()=>{
        await transporter.sendMail({
            from:'babysfoodplace@hotmail.com',
            to:user.email,
            subject:'Reset Password',
            text:`Hello ${user.name}! Click on the link to reset your password: localhost:3003/api/v1/auth/reset-password`
        });
    }

    emitter
        .on('reset',data=>{
            reset();
            console.log('Check your email to change password!');
        })

        emitter.emit('reset')
}