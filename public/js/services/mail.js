const nodemailer = require('nodemailer');
module.exports = (res,form) => {
 var transporter = nodemailer.createTransport({
 service: 'Gmail',
 auth: {
 user: 'davidhernandez1997bgu@gmail.com', // Cambialo por tu email
 pass: '1997diablomadde' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: 'SOFTCONSULTING',
 to: `<${form.email}>`, // Cambia esta parte por el destinatario
 subject: 'Asesor',
 html: `
 <strong>Estimado/a </strong> ${form.usuario}<br/>
 <strong>Tu URL de chat es el siguiente:</strong> ${form.url} <br/>

 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 return res.status(500).send({message:"fallo"})
 else
 console.log(info);
 return res.status(200).send({message:"enviado"})
 });
}