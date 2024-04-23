require("dotenv").config();
const { userServices } = require("../services");
const { catchAsync } = require("../utils/error");
const { S3Client } = require("@aws-sdk/client-s3");
const request = require("request-promise");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: "wecode-richmaker-project-2",
    key: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
});
  
const presignIn = catchAsync(async (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    const error = new Error("KEY ERROR");
    error.statusCode = 400;
    throw error;
  }

  const phoneNumberCheck = await userServices.presignIn(phoneNumber);

  if (phoneNumberCheck.length === 0) {
    return res.statusCode(203).json({ message: "INVALID_USER" });
  } else{
    res.status(201).json({ message: "USER IS CONFIRMED"});
  }
});

const getCIByPhoneNumber = catchAsync(async (req, res) => {
  const { phoneNumber } = req.body;
    const options = {
      method: "POST",
      uri: "http://10.58.52.186:3001/auth",
      body: {
        phoneNumber: phoneNumber
      },
      json: true
    };

    const responseBody = await request(options);

    if (responseBody) {
      return res.status(200).json({ message: "Successful authentication", CI: responseBody.CI});
    }else {
      const error = new Error("not Personal authentication");
      error.status = 400;
      throw error;
    }
});

const signUp = catchAsync(async (req, res) => {
  const { userName, phoneNumber,password, CI} = req.body;
  if (!userName || !password || !phoneNumber|| !CI) {
    const error = new Error("KEY ERROR");
    error.statusCode = 400;
    throw error;
  }
    await userServices.signUp(userName, phoneNumber,password, CI);

    res.status(200).json({message: "USER IS CONFIRMED"});
});

const signIn = catchAsync(async (req, res) => {
  const { phoneNumber, password } = req.body;
  if (!phoneNumber || !password) {
    const error = new Error("KEY ERROR");
    error.statusCode = 400;
    throw error;
  }

  const { accessToken, userName, profileImage , id, grouping_id} = await userServices.signIn(
    phoneNumber,
    password,
  );
  
  res.status(201).json({
    id,
    userName,
    phoneNumber,
    grouping_id,
    profileImage,
    accessToken
  });
});

const changePassword  = catchAsync(async(req, res) =>{
  const userId = req.user.id;
  const {existingPassword, newPassword} = req.body;

  if(!userId || !existingPassword || !newPassword){
    const error = new Error("KEY ERROR");
    error.stauts = 400;
    throw error;
  }
  const change = await userServices.changePassword(userId, existingPassword, newPassword);
  if(change.message === "INVALID_PASSWORD"){
    res.status(200).json({success:false, message: "INVALID_PASSWORD"});
  }else{
  res.status(201).json({message: "changePassword"});
  }
})

const updateProfileImage = catchAsync(async (req, res) => {

  upload.single("image")(req, res, async function(err) {
    if(err){
      const error = new Error("File Upload Error")
      error.statusCode = 400
      throw error
    }
    const uploadedFileURL = req.file.location;

    const userId = req.user.id;
    await userServices.updateProfileImageURL(userId, uploadedFileURL);

    res.status(201).json({ profileImage: req.file.location });
  });
});

const getDefaultProfileImage = catchAsync(async(req, res) => {
  
  const userId = req.params.userId;
  const result = await userServices.getDefaultProfileImage(userId)
  
  res.status(200).json({ result });
})

module.exports = { 
  presignIn, 
  signUp, 
  signIn, 
  getCIByPhoneNumber,
  changePassword,
  updateProfileImage,
  getDefaultProfileImage
};
