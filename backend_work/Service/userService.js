// const {event,Users} = require("../Models/schema/");

const { Login} = require("../Models/schema");

const getUserData = async (email) => {
  return await Login.findOne({ email: email });
};


const updateUserData = async (uid, inputData) => {
  return await Login.findOneAndUpdate({ _id: uid }, inputData, {
    new: true,
  });
};



module.exports = {
  getUserData,
  updateUserData
};
