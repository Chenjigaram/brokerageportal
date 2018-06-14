import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule, MatButtonModule,
   MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule,
   MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
   MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
   MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
   MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
   MatTabsModule, MatToolbarModule, MatTooltipModule

} from '@angular/material';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule, MatNativeDateModule, ReactiveFormsModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
