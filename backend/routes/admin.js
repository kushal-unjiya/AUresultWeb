// backend/routes/admin.js
import express from 'express';
import multer from 'multer';
import xlsx from 'xlsx';
import mongoose from 'mongoose';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/uploadFile', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Extract column headers
    const columnHeaders = Object.keys(jsonData[0]);

    // Create dynamic schema
    const dynamicSchemaFields = {};
    columnHeaders.forEach(header => {
      dynamicSchemaFields[header] = { type: String, required: true };
    });

    const dynamicSchema = new mongoose.Schema(dynamicSchemaFields);
    const DynamicModel = mongoose.model('DynamicModel', dynamicSchema);

    // Insert data into the collection
    await DynamicModel.insertMany(jsonData);

    res.json({ message: 'Data imported successfully.' });
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ message: 'Error processing file.' });
  }
});

export default router;
