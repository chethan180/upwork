import generatePDF from '../controllers/pdf';
import express from 'express';

const Pdf = express.Router();
Pdf.post('/pdf',generatePDF);

export default Pdf;
