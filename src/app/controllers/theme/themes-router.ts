import { Logger, LoggerFactory, RestRouter } from '../../common';
import { ThemesController } from './themes-controller';
import { IThemeForestService } from '../../services';

export class ThemesRouter extends RestRouter {
  themesCtrl: ThemesController;
  private static readonly LOGGER: Logger = LoggerFactory.getLogger();


  constructor(usersService: IThemeForestService) {
    super();
    this.themesCtrl = new ThemesController(usersService);
    this.initRoutes();
  }

  initRoutes() {

    this.router.get('/', this.wrapRouteFn(this.themesCtrl, this.themesCtrl.getAll));
    this.router.get('/category', this.wrapRouteFn(this.themesCtrl, this.themesCtrl.getThemeBycategory));

    this.router.all('/', this.wrapRouteFn(this.themesCtrl,
      this.themesCtrl.throwMethodNotAllowedError));
  }
}