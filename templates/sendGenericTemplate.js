const request = require('request');

module.exports = function sendGenericTemplate(recipientId, messageData) {
    const data = JSON.parse(messageData);
    console.log(data);
}