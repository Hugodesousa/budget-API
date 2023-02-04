import express from 'express';
import userRoutes from './Routes/Users.routes';
import productsRoutes from './Routes/Products.routes';
import budgetRoutes from './Routes/Budget.routes';


const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(productsRoutes);
app.use(budgetRoutes);


// app.use(GenericError);

export default app;