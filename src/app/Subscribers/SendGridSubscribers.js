const { AppError } = require('../../../src/error/Errors');
const sendGridServices = require('../../../domain/services/SendGrid/SendGridServices');
const TemplateEmailServices = require('../../../domain/services/TemplateEmail/TemplateEmailServices');
const axios = require('axios');
const cheerio = require('cheerio');
const templateEmailServices = new TemplateEmailServices();

// --------------------------EXAMPLE--------------------------
// async function example(body) {
//   const parameters = {
//     code: 'codigo Exemplo',
//     token: 'seu_token_aqui',
//     name: 'Nome do Usuário',
//   };
//
//   const msg = await sendGridServices.createBodyMail(
//     body.mail,
//     body.type,
//     parameters,
//   );
//
//   return await sendGridServices.sendEmail(msg);
// }

// ---------------------------FIM-----------------------------
async function resetPassword(body) {
  const parameters = {
    code: body.code,
    name: body.name,
  };

  const msg = await sendGridServices.createBodyMail(
    body.mail,
    body.type,
    parameters,
  );

  return await sendGridServices.sendEmail(msg);
}
async function verifyEmail(body) {
  const parameters = {
    code: body.code,
    nome: body.name,
  };

  const msg = await sendGridServices.createBodyMail(
    body.email,
    body.type,
    parameters,
  );

  return await sendGridServices.sendEmail(msg);
}

module.exports = { resetPassword, verifyEmail };
