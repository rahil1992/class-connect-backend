const nodemailer = require("nodemailer");
module.exports = {
  friendlyName: 'Mailer',
  description: 'Mailer something.',
  inputs: {
    to: {
      type: 'string',
      required: true
    },
    subject: {
      type: 'string',
      required: true
    },
    text: {
      type: 'string',
      required: false
    },
    html: {
      type: 'string',
      required: false
    }
  },
  exits: {
    success: {
      description: 'All done.',
    },
    error: {
      description: 'Failed to send mail'
    }
  },
  fn: async function (inputs, exits) {
    console.log(inputs);
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'agent@sdnatech.com', // Your Gmail address
        pass: 'Pesdab-cocqe1-myqdec' // Your Gmail password or App Password
      }
    });
    transporter.sendMail({
      from: '"C-Connect" agent@sdnatech.com', // Sender address
      to: inputs.to, // List of receivers
      subject: inputs.subject, // Subject line
      text: inputs.text, // Plain text body
      html: inputs.html, // HTML body (optional)
    }, (error, info) => {
      if (error) {
        sails.log.error(error);
        return exits.error(error);
      }
      sails.log.info('Mail Sent');
      return exits.success(info);
    });
  }


};

