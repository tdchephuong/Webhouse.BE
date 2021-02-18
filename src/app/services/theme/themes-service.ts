import { Logger, LoggerFactory } from '../../common';
import { ThemeModel } from '../../models';
import { IThemeForestService } from '../contracts';
import axios from 'axios';
import { launch } from 'puppeteer';

export class ThemesService implements IThemeForestService {

  private readonly THEME_FOREST_URL: string = process.env.THEME_FOREST_URL;
  private readonly LOGGER: Logger = LoggerFactory.getLogger();

  constructor() {
  }

  async getAll(): Promise<ThemeModel[]> {
    const url = `${this.THEME_FOREST_URL}/search?category=site-templates%2Fretail%2Fhealth-beauty&page=1&page_size=30&site=themeforest.net&sort_by=sales`;

    return axios.get(url).then(result => {
     
      return (result ? result.data : null);
    }).catch((exception) => {
      this.LOGGER.debug("Error of Notify user status changed API:");
      this.LOGGER.debug(exception);
    });
  };

  getThemeMarketing(page: string): Promise<ThemeModel[]> {
    const url = `${this.THEME_FOREST_URL}/search?category=marketing&page=${page}&page_size=30&site=themeforest.net&sort_by=sales`;

    return axios.get(url).then(result => {
      return (result ? result.data : null);
    }).catch((exception) => {
      this.LOGGER.debug("Error of Notify user status changed API:");
      this.LOGGER.debug(exception);
    });
  }

  getThemeEcom(page: number): Promise<ThemeModel[]> {
    const url = `${this.THEME_FOREST_URL}/search?category=ecommerce&page=${page}&page_size=30&site=themeforest.net&sort_by=sales`;

    return axios.get(url).then(result => {
      return (result ? result.data : null);
    }).catch((exception) => {
      this.LOGGER.debug("Error of Notify user status changed API:");
      this.LOGGER.debug(exception);
    });
  }

  getThemeBlog(page: number): Promise<ThemeModel[]> {
    const url = `${this.THEME_FOREST_URL}/search?category=blogging&page=${page}&page_size=30&site=themeforest.net&sort_by=sales`;
    return axios.get(url).then(result => {
      this.LOGGER.debug(result.data);
      return (result ? result.data : null);
    }).catch((exception) => {
      this.LOGGER.debug("Error of Notify user status changed API:");
      this.LOGGER.debug(exception);
    });
  }

  async getScreenshot(link: string, name: string) {
    const browser = await launch({
      headless: true,
      defaultViewport: null,
      args:['--start-maximized' ]
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setViewport({ width: 1366, height: 768});
    await page.goto(link, {
      waitUntil: 'load',
      // Remove the timeout
      timeout: 0
  });
    
    await page.screenshot({path: `./screenshoot/${name}.png`, fullPage: true});

    // await page.pdf

    await browser.close();
  }

}