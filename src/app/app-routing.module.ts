import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./protected/dashboard/dashboard.component";
import { UserslistComponent } from "./protected/userslist/userslist.component";
import { UsersListResolver } from "./protected/userslist/userslist.resolver";
import { RoomComponent } from "./protected/room/room.component";
import { RoomResolver } from "./protected/room/room.resolver";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    resolve: {
      usersList: UsersListResolver
    },
    component: UserslistComponent
  },
  {
    path: "room/:id",
    resolve: {
      room: RoomResolver
    },
    component: RoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
