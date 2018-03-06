import express from 'express';
import * as userController from '../controllers/users_controller';
import * as priceController from '../controllers/prices_controller';
import * as portfolioController from '../controllers/portfolio_controller';
import * as companyController from '../controllers/companies_controller';

const router = express.Router();

router.route('/').get((req, res) => res.end('API Initialized'));

//Company Routes
router.route('/companies')
      .get(companyController.getAll);

export default router;
