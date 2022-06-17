const isAdmin = async (request, response, next) => {
  if (request.user.role !== 1) {
    return response.status(400).json({
      msg: "you are not allowed to this service,only admin have the right",
    });
  } else {
    next();
  }
};
module.exports = isAdmin;
