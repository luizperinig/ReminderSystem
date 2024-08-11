const router = require('express').Router();
const reminderServices = require('../services/reminderServices');
const StatusCodes = require('../../../../utils/httpStatusCodes');
const reminderValidator = require('../../../middlewares/reminderValidator');

router.post('/newReminder', reminderValidator("create"), async (req, res, next) => {
    try{
        await reminderServices.create(req.body);
        res.status(StatusCodes.ACCEPTED).send('Lembrete criado com sucesso');
    }
    catch(error){
        next(error);
    }
}); 

router.delete('/deleteReminder/:id', async (req, res, next) => {
    try{
        await reminderServices.delete(req.params.id);
        res.status(StatusCodes.ACCEPTED).send('Lembrete deletado com sucesso');
    }
    catch(error){
        next(error);
    }
});

router.get('/getReminder', async (req, res, next) => {
    try{
        const allReminders = await reminderServices.getAll();
        res.status(StatusCodes.ACCEPTED).send(allReminders);
    }
    catch(error){
        next(error);
    }
});

module.exports = router;