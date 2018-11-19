import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class MatWidgetsModule {}
