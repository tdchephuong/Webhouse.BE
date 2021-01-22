import { Logger, LoggerFactory, RestController } from '../../common';
import { IThemeForestService } from '../../services';
import { ThemeModel } from '../../models';

export class ThemesController extends RestController {
  constructor(private themesService: IThemeForestService) {
    super();
  }

  private static readonly LOGGER: Logger = LoggerFactory.getLogger();

  getAll(req, res, next): Promise<any> {
    ThemesController.LOGGER.info('Retrieving all users');

    return this.themesService.getAll()
      .then((themes: Array<ThemeModel>) => {
        return this.respond(res, themes);
      });
  }

  getThemeBycategory(req, res, next): Promise<any> {
    ThemesController.LOGGER.info('Retrieving theme by category');
    const {
      category,
      page
    } = req.body;

    if(category == 'marketing') {
      return this.themesService.getThemeMarketing(page)
      .then((themes: Array<ThemeModel>) => {
        this.respond(res, themes);
      });
    }

    if(category == 'ecom') {
      return this.themesService.getThemeEcom(page)
      .then((themes: Array<ThemeModel>) => {
        this.respond(res, themes);
      });
    }

    if(category == 'blog') {
      return this.themesService.getThemeBlog(page)
      .then((themes: Array<ThemeModel>) => {
        this.respond(res, themes);
      });
    }
    
    // ---- return not found ----------
  }

}