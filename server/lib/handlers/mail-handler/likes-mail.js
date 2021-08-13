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

   const like=async()=>{
    await transporter.sendMail({
        from:'babysfoodplace@hotmail.com',
        to:user.email,
        subject:"Wohoo you have a like!",
        text:`Hellooo ${user.first_name}, someone liked your recipe! You're famous, keep going!`,
    });
}

    emitter
        .on('like',data=>{
            like();
            console.log('Message sent!');
        })

    emitter.emit('like')
}