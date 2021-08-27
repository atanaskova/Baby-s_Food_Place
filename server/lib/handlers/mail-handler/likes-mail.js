const nodemailer=require("nodemailer");
const events=require('events');
const emitter=new events.EventEmitter();
const User=require('../../../models/user');
require('dotenv').config();

module.exports=(userId)=>{

    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS
        }
      });

   const like=async()=>{
       const user=await User.findById(userId);
    await transporter.sendMail({
        from:'babysfoodplace@hotmail.com',
        to:user.email,
        subject:"Wohoo you have a like!",
        text:`Hellooo ${user.name}, someone liked your recipe! You're famous, keep going!`,
    });
}

    emitter
        .on('like',data=>{
            like();
            console.log('Message sent!');
        })

    emitter.emit('like')
}