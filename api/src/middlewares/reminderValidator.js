const {body, validationResult} = require("express-validator");

const statusCodes = require("../../utils/httpStatusCodes");

function reminderTitleValidator(title, optional = false){
    if(!optional){
        return body("title")
            .exists().withMessage("Todo lembrete deve ter título").bail()
            .notEmpty().withMessage("O título não pode ser vazio");
    }
    else{
        return body("title")
            .optional()
            .exists().withMessage("Todo lembrete deve ter título").bail()
            .notEmpty().withMessage("O título não pode ser vazio");
    }
}

function reminderDateValidator(date, optional = false){
    if(!optional){
        return body("date")
            .exists().withMessage("Todo lembrete deve ter uma data").bail()
            .notEmpty().withMessage("A data não pode ser vazia").bail()
            .isDate().withMessage("A data deve estar no formato correto");
    }
    else{
        return body("date")
            .optional()
            .exists().withMessage("Todo lembrete deve ter uma data").bail()
            .notEmpty().withMessage("A data não pode ser vazia").bail()
            .isDate().withMessage("A data deve estar no formato correto");
    }
}

function getReminderValidations(route){
    switch(route){
        case("create"):
            return[
                reminderTitleValidator("content"),
                reminderDateValidator("date")
            ];

            default:
                return[];
    }
}

function validateReminderRoute(route){
    const validations = getReminderValidations(route);

    return async (req, res, next) => {
        for(const validation of validations)
            await validation.run(req);

        const errors = validationResult(req);
        if(errors.isEmpty())
            return next();

        res.status(statusCodes.BAD_REQUEST).json(errors);
    };
}

module.exports = validateReminderRoute;