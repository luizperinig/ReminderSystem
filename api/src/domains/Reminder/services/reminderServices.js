const Reminder = require('../model/reminder');
const NotFoundError = require('../../../../errors/notFoundError');

class ReminderServices{
    async create( body ){
        await Reminder.create( body );
    }
    
    async delete( id ){
        const reminder = await Reminder.findByPk(id);
        if(!reminder){
            throw new NotFoundError('Lembrete não encontrado');
        }else{
            await reminder.destroy();
        }
    }

    async getAll(){
        const allReminders = await Reminder.findAll();
        if(allReminders.length == 0){
            throw new NotFoundError('Nenhum lembrete encontrado');
        }else{
            return allReminders;
        }
    }
};

module.exports = new ReminderServices();