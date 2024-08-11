const Reminder = require("../model/reminder");
const ReminderServices = require("./reminderServices");

const reminderValidator = require("../../../middlewares/reminderValidator");
const NotFoundError = require("../../../../errors/notFoundError");

jest.mock("../model/reminder");

describe("create", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    test("O método recebe um body com as informações do lembrete => um novo objeto lembrete é criado no banco de dados",
        async() => {
            const body = { title: "Lembrete 1", date: "2024-10-20" };

            jest.spyOn(Reminder, "create").mockResolvedValue(body);

            await ReminderServices.create(body);
            expect(Reminder.create).toHaveBeenCalledWith(body);
    });
});

describe("delete", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    test("O método recebe o id de um lembrete => o lembrete é apagado do banco de dados", 
        async() => {
            const reminder = { id: 1, title: "Lembrete 1", destroy: jest.fn() };
                
            jest.spyOn(Reminder, "findByPk").mockResolvedValue(reminder);
            
            await ReminderServices.delete(reminder.id);
            
            expect(reminder.destroy).toHaveBeenCalled();
    });

    test("O método recebe um id de um lembrete => lança um erro quando o lembrete com o respectivo id não existe", 
        async() => {
            jest.spyOn(Reminder, "findByPk").mockResolvedValue(null);
            
            
            return expect(async () => {
                await ReminderServices.delete(1);
            }).rejects.toThrow(new NotFoundError("Lembrete não encontrado"));
    });
});

describe("getAll", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    test("O método recebe a requisição => retorna todos os lembretes cadastrados no sistema", 
        async() => {
            const reminders = [{
                id: 1, 
                title: "Lembrete 1" 
            }, 
            { 
                id: 2, 
                title: "Lembrete 2" 
            }];
                
            jest.spyOn(Reminder, "findAll").mockResolvedValue(reminders);
            
            const result = await ReminderServices.getAll();
            
            expect(result).toBe(reminders);
    });

    test("O método recebe a requisição => lança um erro quando não há lembretes cadastrados no sistema", 
        async() => {
            jest.spyOn(Reminder, "findAll").mockResolvedValue([]);
                            
            return expect(async() => {
                await ReminderServices.getAll();
            }).rejects.toThrow(new NotFoundError("Nenhum lembrete encontrado"));
    });
});