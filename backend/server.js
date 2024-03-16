import cors from 'cors';
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
