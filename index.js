const{GameOption} = require('./options')

const TelegramApi = require('node-telegram-bot-api')

const token = "5266282817:AAFAFARva70zBp4TNROGdctlRMK1bWxKwr8"

const bot = new TelegramApi(token, {polling:true})


bot.setMyCommands([
    {command: '/start',description:'запуск бота'  },

])

bot.on('message', async msg => {
    const text = msg.text
    const chatId = msg.chat.id;


    if(text === '/start' ){
        await  bot.sendMessage(chatId, 'Добро пожаловать в игру(WIP)')
        await  bot.sendMessage(chatId, 'Пожалуйста, выбери свой класс', GameOption )

    }


    bot.on('callback_query', msg=>{
        const data = msg.data;
        const chatId = msg.message.chat.id;

        switch (data){
            case 'warrior':{
                return bot.sendMessage(chatId, 'Значит ты выбрал путь безжалостного воина?')
                break;

            }
            case 'thief':{
                return bot.sendMessage(chatId, 'Значит ты выбрал путь тихого убийцы?')
                break;

            }
            case 'mage':{
                return bot.sendMessage(chatId, 'Значит ты выбрал путь благородного мага?')
                break;

            }
            case 'beggar':{
                return bot.sendMessage(chatId, 'Решил начать с низов ? Без таланта, силы, влияния, денег ... Интересный выбор')
                break;

            }
            default:{
                return bot.sendMessage(chatId, 'Неизвестный класс')
                break;
            }
        }
        console.log(msg)
    })




})