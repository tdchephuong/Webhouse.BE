import { ThemeModel } from "../../models";

export interface IThemeForestService {
  getAll(): Promise<ThemeModel[]>;
  getThemeMarketing(page: string): Promise<ThemeModel[]>;
  getThemeEcom(page: number): Promise<ThemeModel[]>;
  getThemeBlog(page: number): Promise<ThemeModel[]>;

}