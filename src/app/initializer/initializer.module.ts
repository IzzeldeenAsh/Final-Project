import { APP_INITIALIZER, NgModule } from '@angular/core';
import { UsersDataService } from './users-data.service';
import { take } from 'rxjs/operators';

export function initializeApp1(UsersDataService: UsersDataService) {
  return (): Promise<any> => {
    return UsersDataService.Init();
  };
}

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true, // prvide multiple values for a single token ( APP_INI)
      useFactory: initializeApp1, //specifies that the provider is a factory function whose implementation is initializeApp1
      deps: [UsersDataService],
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (data: UsersDataService) => {
        return () => {
          data.isAuthenticated$.pipe(take(1));
        };
      },
      deps: [UsersDataService],
    },
  ],
})
export class InitializerModule {}
