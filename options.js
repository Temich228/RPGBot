module.exports = {
    GameOption:{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Воин', callback_data: 'warrior'}],
                [{text: 'Маг', callback_data: 'mage'}],
                [{text: 'Вор', callback_data: 'thief'}],
                [{text: 'Нищий', callback_data: 'beggar'}]
            ]
        })
    }
}