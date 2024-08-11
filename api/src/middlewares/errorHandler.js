const NotFoundError = require("../../errors/notFoundError");
const statusCodes = require("../../utils/httpStatusCodes");

function errorHandler(error, req, res, next){
    let message = error.message;
    let status;

    if(error instanceof NotFoundError)
        status = statusCodes.NOT_FOUND;
    else
        status = statusCodes.INTERNAL_SERVER_ERROR;

    res.status(status).json(message);
}

module.exports = errorHandler;