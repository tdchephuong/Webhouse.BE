import express = require('express');
import { Router } from 'express';
import { UsersRouter } from './user/users-router';
import { ThemesRouter } from './theme/themes-router';
import { Logger, LoggerFactory, InvalidResourceUrlError } from '../common';
import { AppDataServices } from '../services';

////////////////////

export class ApiRouterFactory {

  private static readonly LOGGER: Logger = LoggerFactory.getLogger();

  private constructor() {}

  static getApiRouter(services: AppDataServices): Router {
    const router: Router = express.Router();

    const usersRouter: Router = new UsersRouter(services.usersService).router;
    const themesRouter: Router = new ThemesRouter(services.themesService).router;

    ApiRouterFactory.LOGGER.info('Mounting users route');
    router.use('/users', usersRouter);

    router.use('/themes', themesRouter);

    router.all('*', (req, res, next) => {
      ApiRouterFactory.LOGGER.info('-- Route mapping missing --');
      next(new InvalidResourceUrlError());
    });

    return router;
  }
}