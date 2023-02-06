// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerFile = require('../swagger_output.json');
import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express'
import userRoutes from './Routes/Users.routes';
import productsRoutes from './Routes/Products.routes';
import budgetRoutes from './Routes/Budget.routes';
import { GenericError } from './err/GenericError';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(productsRoutes);
app.use(budgetRoutes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(GenericError);

export default app;