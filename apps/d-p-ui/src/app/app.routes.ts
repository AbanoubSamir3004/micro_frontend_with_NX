// import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'traning-ui',
    loadChildren: () =>
      import('traning-ui/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'vacation-ui',
    loadChildren: () =>
      import('vacation-ui/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
