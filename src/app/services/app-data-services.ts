import { MOCK_USERS } from '../data/mock-data';
import { MockUsersService } from './mock-users-service';
import { ThemesService } from './theme/themes-service';
import { UsersService } from './contracts';

export class AppDataServices {
  public usersService: UsersService;
  public themesService: ThemesService;

  constructor(useMock = true) {
    if (useMock) {
      this.initMockDataServices();
    }
  }

  private initMockDataServices() {
    this.usersService = new MockUsersService(MOCK_USERS);
    this.themesService = new ThemesService();
  }
}