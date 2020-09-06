import { ServerComponent } from './server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './WarningAlert/WarningAlert.component';
import { SuccessAlertComponent } from './SuccessAlert/SuccessAlert.component';
BigContainer
import { BigContainer } from './BigContainer/BigContainer.component';

@NgModule({
  declarations: [
    AppComponent,
   ServerComponent,
   ServersComponent,
   WarningAlertComponent,
   SuccessAlertComponent,
   BigContainer


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
