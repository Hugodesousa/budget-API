
import swaggerFile from '../swagger_output.json';
// import fs from 'fs';

import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express'
import userRoutes from './Routes/Users.routes';
import productsRoutes from './Routes/Products.routes';
import budgetRoutes from './Routes/Budget.routes';
import { GenericError } from './err/GenericError';
import cors from 'cors';

// let swaggerFile;
// fs.readFile('./swagger_output.json', 'utf-8', (err, data) => {
//   if (err) throw err;
//   swaggerFile = JSON.parse(data);
// });

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(productsRoutes);
app.use(budgetRoutes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(GenericError);

export default app;