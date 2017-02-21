import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddComponent } from '../pages/add/add';
import { LocationTracker } from './providers/location-tracker/location-tracker';
import { Devices } from './providers/devices/devices';

@NgModule({
  declarations: [
    MyApp,
    ConfigurationPage,
    HomePage,
    TabsPage,
    AddComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConfigurationPage,
    HomePage,
    TabsPage,
    AddComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LocationTracker, Devices]
})
export class AppModule {}