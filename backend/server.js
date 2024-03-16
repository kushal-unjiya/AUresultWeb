// // backend/server.js
// // const Student = require('./models/student'); // Import the Student model
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// // import multer from 'multer';
// // import xlsx from 'xlsx';
import cors from 'cors';
// const app = express();
// const PORT = process.env.PORT || 3000;
// const corsOptions = {
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// };

// app.use(cors(corsOptions));

// mongoose.connect("mongodb+srv://admin:admin@cluster0.a5gtis4.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(bodyParser.json());

// // const storage = multer.memoryStorage();
// // const upload = multer({ storage });

// app.post('/api/getResult', async (req, res) => {
//   const { enrollmentNo, seatNo, semester } = req.body;

//   try {
//     const result = await Student.findOne({
//       enrollmentNo,
//       seatNo,
//       semester,
//     });

//     if (result) {
//       res.json(result);
//     } else {
//       res.status(404).json({ message: 'No result found for the provided details.' });
//     }
//   } catch (error) {
//     console.error('Error fetching result:', error);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// });

// // app.post('/api/uploadFile', upload.single('file'), (req, res) => {
// //   try {
// //     if (!req.file) {
// //       return res.status(400).json({ message: 'No file uploaded.' });
// //     }

// //     const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
// //     const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

// //     Student.insertMany(jsonData, (err) => {
// //       if (err) {
// //         console.error('Error inserting data:', err);
// //         return res.status(500).json({ message: 'Error inserting data into the database.' });
// //       }

// //       res.json({ message: 'Data imported successfully.' });
// //     });
// //   } catch (error) {
// //     console.error('Error processing file:', error);
// //     res.status(500).json({ message: 'Error processing file.' });
// //   }
// // });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// server.mjs
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js';
import studentRoutes from './routes/student.js';


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
mongoose.connect('mongodb+srv://admin:admin@cluster0.a5gtis4.mongodb.net/results');

app.use(bodyParser.json());

app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
