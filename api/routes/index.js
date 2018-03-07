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

router.route('/company/:symbol')
      .get(companyController.getSingle);

//User Routes
router.route('/user/login')
      .post(userController.login);

router.route('/user/:id/summary')
      .get(userController.portfolioSummary);

export default router;
