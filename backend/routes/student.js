// // routes/student.js
// import express from 'express';
// import Student from '../models/students.cjs';

// const router = express.Router();

// router.post('/getResult', async (req, res) => {
//   const { enrollmentNo, seatNo, semester } = req.body;
//   console.log('enrollmentNo:', enrollmentNo); 

//   try {
    
//     const result = await Student.findOne({
//       enrollmentNo,
//       seatNo,
//       semester,
//     });

//     if (result) {
//       res.json(result);
//       console.log("result");
//     } else {
//       res.status(404).json({ message: 'No result found for the provided details.' });
//     }
//   } catch (error) {
//     console.error('Error fetching result:', error);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// });

// export default router;



// backend/routes/student.js
import express from 'express';
import Student from '../models/students.cjs';

const router = express.Router();

router.post('/getResult', async (req, res) => {
  const { enrollmentNo, seatNo, semester,cgpa} = req.body;
  console.log("fetching result")
  try {
    // Log the incoming request
    console.log('Incoming request to /api/getResult:', req.body);

    const result = await Student.findOne({
      enrollmentNo,
      seatNo,
      semester,
    });

    if (result) {
      // Log successful result retrieval
      console.log('Result found:', result);
      res.json(result);
    } else {
      // Log when no result is found
      console.log('No result found for the provided details:', req.body);
      res.status(404).json({ message: 'No result found for the provided details.' });
    }
  } catch (error) {
    // Log any errors that occur during request processing
    console.error('Error fetching result:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

export default router;
