import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config.js';
// import propertyRoutes from './routes/propertyRoutes.js'
// import investmentRoutes from './routes/investmentRoutes.js';



dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.get('/', (req, res) => {
    res.send('Backend is running ✅');
  });
  

app.use('/api/users', userRoutes);
// app.use('/api/properties', propertyRoutes);
// app.use('/api/investments', investmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
