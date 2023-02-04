import express from 'express';
import 'express-async-errors';
import userRoutes from './Routes/Users.routes';
import productsRoutes from './Routes/Products.routes';
import budgetRoutes from './Routes/Budget.routes';
import { GenericError } from './err/GenericError';


const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(productsRoutes);
app.use(budgetRoutes);


// app.use(GenericError);
app.use(GenericError);

export default app;