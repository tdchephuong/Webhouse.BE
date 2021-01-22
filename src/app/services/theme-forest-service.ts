import { IThemeForestService } from "./contracts/IThemeForestService";
import { User, ThemeModel } from "../models";

export class ThemeForestService implements IThemeForestService {

  constructor(users: Array<User>) {

  }

  getBycategory(id: string): Promise<ThemeModel> {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<Array<ThemeModel>> {
    // const users = Array.from(this.userMap.values());
    // return Promise.resolve(users);
    return null;
  };

  /////////////////////

  private populateUserMap(users: Array<User>): Map<string, User> {
    const usersMap = new Map<string, User>();

    users.forEach((user) => usersMap.set(user.id, user));

    return usersMap;
  }
}