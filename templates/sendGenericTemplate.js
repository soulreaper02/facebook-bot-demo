const request = require('request');

module.exports = function sendGenericTemplate(recipientId, respBody) {
    console.log(respBody);
    const nutritionalValue = [];
    for (let i = 0; i < respBody.length; i++) { // I dont like using forEach
        let obj = {
            "title":respBody[i].food_name,
            "image_url": respBody[i].thumbnail,
            "subtitle": 'Total Calories: ' + respBody[i].total_calories + "\n" + 
                        'protein: ' + respBody[i].protein + "\n" + 
                        'Carbohydrates: ' + respBody[i].total_carbohydrate,
        }
        nutritionalValue.push(obj);
    }
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": nutritionalValue
            }
        }
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
            qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
            method: 'POST',
            json: {
                recipient: {id: recipientId},
                message: messageData,
            }
    }, function(error, response, body){
        if (error) {
            console.log("Error sending message: " + response.error)
        }
    })
}