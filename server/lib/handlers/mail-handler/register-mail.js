const nodemailer=require('nodemailer');
const events=require('events');
const emitter=new events.EventEmitter();
// const jwt=require('jsonwebtoken');
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

    // const payload={
    //     id:user._id,
    //     email:user.email
    // }

    // const token=jwt.sign(payload,process.env.SECRET_AUTH_KEY,{
    //     expiresIn:'60m'
    // });

    // const url=`http://localhost:3000/confirmation/${token}`;

    const register=async()=>{
        await transporter.sendMail({
            from:'babysfoodplace@hotmail.com',
            to:user.email,
            subject:"Confirm registration!",
            text:`Hello ${user.name}! Thank you for joining us!`,
            html: {path:'./lib/handlers/mail-handler/register-mail.html'}
        });
    }

    emitter
        .on('register',data=>{
            register();
            console.log('Message sent!');
        })

    emitter.emit('register')
}