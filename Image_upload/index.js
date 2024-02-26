const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const Image = require('./src/model/image'); // Import the image model
const app = express();
const PORT = 3000;

// MongoDB connection setup
// mongoose.connect('mongodb+srv://kp648027:Kishan@cluster0.spvkpc0.mongodb.net/image?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect('mongodb://localhost:27017/imageDB')
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error while connecting to DB", error)
  })

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'src', 'views')); // Specify the correct path to your views directory
app.use(express.static(path.join(__dirname, "src", "public")));



// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Multer middleware for handling file uploads
// const storage = multer.diskStorage({
//   destination: 'src/public/images/',
//   filename: (req, file, cd) => {
//     cd(null, file.originalname)
//   }
// });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/", async (req, res) => {
  // res.render("index", { title: "upload Image" })
  res.sendFile(__dirname + '/src/views/index.html');
})

// Route for uploading an image
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image({
      data: req.file.buffer,
      fileName: req.file.originalname,
      contentType: req.file.mimetype
    });
    // console.log(newImage);
    await newImage.save();
    res.redirect('image');
    // res.send('Image uploaded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading image');
  }
});

// Route for displaying an image
app.get('/image', async (req, res) => {
  try {
    const image = await Image.find();
    if (!image) {
      return res.status(404).send('Image not found');
    }
    // console.log("image", image);
    const urls = [];
    for (images of image) {
      // console.log("images", images);
      // Convert the buffer data to a Base64-encoded string
      const base64Data = Buffer.from(images.data).toString('base64');

      // Create the data URL for embedding the images in HTML
      const dataUrl = `data:${images.contentType};base64,${base64Data}`;
      urls.push(dataUrl);
    }
    // console.log("urls", urls);
    // console.log(image)
    res.render('image', { urls });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error displaying image');
  }
});

// Route for serving the HTML page to display the image
app.get('/display', (req, res) => {
  // res.sendFile(path.join(__dirname, 'src', 'views', 'display.html'));
  res.render('display',);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
