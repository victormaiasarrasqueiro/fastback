"use strict";

/*
 * Responsavel por funcoes utilitarias para criacao e manutencao de objetos de erro
 */
const nodemailer   = require('nodemailer');

const cryptoUtil = require('./CryptoUtil');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'contato@mapledev.com.br',
         pass: 'et4sdA123'
     }
 });

var emailUtil = {};

emailUtil.sendEmailNewUser = function(newUser){
  try{

    var mailOptions = {
        from: 'no-reply@mapledev.com.br',
        to: 'victor.sarrasqueiro@gmail.com',
        subject: 'teste', // Subject line
        html: '<p>teste</p>'// plain text body
    };

    mailOptions.subject = 'Bem-vindo à .... !';
    mailOptions.html = '<p> link: http://localhost:3000/user/activate/' + cryptoUtil.encrypt(newUser.email) +'</p>';

    transporter.sendMail(mailOptions, function (err, info) {
      if(err){
        console.log(err)
      }
    });

  }catch(e){
    console.log(e);
  }

}

module.exports = emailUtil;