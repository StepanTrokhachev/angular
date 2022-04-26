import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './entities/user-card/user-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {AppService} from "./entities/services/app.service";
import {MatTableModule} from "@angular/material/table";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import {HttpClientModule} from "@angular/common/http";

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
