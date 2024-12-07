const { Login } = require("../Models/schema");
const {
  getUserData,
  updateUserData
} = require("../Service/userService");



const errorHandler = async (err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

const getUser = async (req, res, next) => {
  try {
    
    const email = req.params["email"];
    console.log(email);
    const user = await getUserData(email);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    res.header("Access-Control-Allow-Origin: *");
    res.status(200).json({
      success: true,
      msg: "User fetched successfully",
      file: { ...user._doc },
    });
  } catch (error) {
    next(error);
  }
};


const updateUser = async (req, res, next) => {
  try {
    const inputData = req.body;
    const uid = Number(req.params["id"]);
    if (!Object.keys(inputData).length) {
      const error = new Error("Invalid input data");
      error.statusCode = 400;
      throw error;
    }
    if (req.files) {
      const fileLinks = req.files.map((file) => file.path);
      inputData.files = fileLinks;
    }
    await updateUserData(uid, inputData);
    res.status(200).json({
      success: true,
      msg: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  console.log(req);
  try {
    const inputData = req.body;
    // const user = new userStorage(inputData)
    console.log(inputData);
    
    await Login.create(inputData)
    // .then(response => {
    res.status(201).json({ success: true, msg: 'user added succesfull' })
    // }).catch(err =>  {throw err} )

  } catch (error) {
    next(error)
  }

}

module.exports = {
  getUser,
  updateUser,
  errorHandler,
  addUser
};
