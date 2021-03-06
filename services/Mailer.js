const sendgrid = require('@sendgrid/mail');
const keys = require('../config/keys');

class Mailer {
  constructor({ subject, recipients }, content) {
    this.message = {
      to: recipients,
      from: 'no-reply@emaily.com',
      subject: subject,
      html: content,
      trackingSettings: {
        clickTracking: { enable: true }
      }
    };
    sendgrid.setApiKey(keys.sendGridKey);
  }

  async send() {
    const response = await sendgrid.sendMultiple(this.message);
    return response;
  }
}

module.exports = Mailer;
