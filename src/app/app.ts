import 'core-js/library';

import { Logger, LoggerFactory } from './common';
import { Express, Router } from 'express';
import { AppConfig } from './config';
import { ExpressAppFactory } from './express-app-factory';
import { ApiRouterFactory } from './controllers';
import { RestErrorMiddleware } from './common';
import {AppDataServices } from './services';

const LOGGER: Logger = LoggerFactory.getLogger();

// Turn environment variables into a strongly typed configuration object
const appConfig: AppConfig = new AppConfig(process.env);

// Create the application data services
const appServices: AppDataServices = new AppDataServices();

// Create the application router (to be mounted by the express server)
const apiRouter: Router = ApiRouterFactory.getApiRouter(appServices);

// Get the application middleware (to be mounted after the api router)
const errorMiddleware = [
  RestErrorMiddleware.normalizeToRestError,
  RestErrorMiddleware.serializeRestError
];

const app: Express = ExpressAppFactory.getExpressApp(appConfig, apiRouter, null, errorMiddleware);

//------------- config swagger docs -------------
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(__dirname + "/docs/swagger.yaml");
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(appConfig.port, () => {
  LOGGER.info(`Express server listening on port ${appConfig.port}`);
});