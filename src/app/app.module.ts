import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./legos/footer/footer.component";

import { ReactiveFormsModule } from "@angular/forms";
import { MatWidgetsModule } from "./matwidgets.module";
import { DashboardComponent } from "./protected/dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './legos/header/header.component';
import { MessageComponent } from './legos/message/message.component';
import { UserslistComponent } from './protected/userslist/userslist.component';
import { RoomComponent } from './protected/room/room.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
    MessageComponent,
    UserslistComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatWidgetsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
