import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
  MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth-guard.service';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { SignUpService } from './services/signupService';
import { PopUpDialogComponent } from './pop-up-dialog/pop-up-dialog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './app.interceptor';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AuthenticationService } from './services/authentication.service';
import {CdkTableModule} from '@angular/cdk/table';
import { AccessRequestComponent } from './access-request/access-request.component';
import { DialogComponent } from './dialog/dialog.component';
import { AccessRequestService } from './services/accessRequestService';
import { MatchComponent } from './match/match.component';
import { MatchService } from './services/matchService';
import { EntriesService } from './services/entriesService';
import { EntryComponent } from './entry/entry.component';
import { ViewEntryComponent } from './view-entry/view-entry.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent,
   PopUpDialogComponent, SignUpComponent, HomeComponent, AccessRequestComponent, DialogComponent, MatchComponent, EntryComponent, ViewEntryComponent
  ],
  entryComponents: [PopUpDialogComponent, DialogComponent],
  imports: [
    BrowserModule, routing,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule, HttpClientModule, MatNativeDateModule, ReactiveFormsModule,
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
    MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
    MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor,
    multi : true}, AuthGuard, UserService,
    SignUpService, AuthenticationService, AccessRequestService, MatchService, EntriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
