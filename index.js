const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const app = express()
let bodyParser = require('body-parser');
const cors = require("cors");
const multer = require('multer');
const fs= require('fs')
const port = process.env.PORT
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected!'))




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Faylning qabul qilinadigan formatini va maydon nomini tekshirish
    if (file.fieldname === "file") {
      // To'g'ri formatlar uchun `null`, aks holda `new Error('Xatolik matn')`
      cb(null, true);
    } else {
      cb(new Error("Not a valid field")); 
    }
  },
});


app.delete('/delete-image/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = `uploads/${imageName}`;

  // Rasm faylini o'chirish
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Rasmni o\'chirishda xatolik yuz berdi' });
    } else {
      res.json({ message: 'Rasm muvaffaqiyatli o\'chirildi' });
    }
  });
});








app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('file'), (req, res) => {
  // Fayl muvaffaqiyatli yuklandi
  res.json({ message: 'Fayl muvaffaqiyatli yuklandi' });
});
//BODY PARSER
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({
  limit: '50mb',
  extended: true
}));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Request Body:', req.body);
  next();
});

app.use((req, res, next) => {
  const oldSend = res.send;
  res.send = function (data) {
    console.log('Response Body:', data);
    oldSend.apply(res, arguments);
  };
  next();
});

app.get('/image-names', (req, res) => {
  // Read the contents of the "uploads/" directory
  fs.readdir('uploads/', (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error reading directory' });
    } else {
      // Send the list of filenames as a response
      res.json({ filenames: files });
    }
  });
});



const RegisterRoute = require('./Routes/Register.route')
const PaymentRoute = require('./Routes/Payment.route')
const ContactFormRoute = require('./Routes/ContactForm.route')
const ContactRoute = require('./Routes/Contact.route')
const AbautRoute = require('./Routes/Abaut.route')
const ProductRoute = require('./Routes/Product.route')
const FooterRoute = require('./Routes/Footer.route')
const ProductliderRoute = require('./Routes/ProductSlider.route')
const LogoRouteRoute = require('./Routes/Logo.route')
const MainPageRoute = require('./Routes/MainPage.route');
const LoginRoute = require('./Routes/Login.route');

app.use('/user',RegisterRoute)
app.use('/payment',PaymentRoute)
app.use('/contactform',ContactFormRoute)
app.use('/contact',ContactRoute)
app.use('/abaut',AbautRoute)
app.use('/product',ProductRoute)
app.use('/footer',FooterRoute)
app.use('/productslider',ProductliderRoute)
app.use('/logo',LogoRouteRoute)
app.use('/mainpage',MainPageRoute)
app.use('/login',LoginRoute)



app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});









