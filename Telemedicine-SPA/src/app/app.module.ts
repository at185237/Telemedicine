import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { TimeAgoPipe } from 'time-ago-pipe';

import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor, ErrorInterceptorProvider } from './_services/error.interceptor';
import { PatientChartComponent } from './patient-chart/patient-chart.component';
import { PatientMessagesComponent } from './patient-messages/patient-messages.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { PatientDoctorsComponent } from './members/patient-doctors/patient-doctors.component';
import { appRoutes } from './routes';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { PatientDoctorsResolver } from './_resolvers/patient-doctors.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { DocumentEditorComponent} from './members/document-editor/document-editor.component';
import { PatientSelectorsResolver } from './_resolvers/PatientSelectors.resolver';
import { PatientSelecteesResolver } from './_resolvers/PatientSelectees.resolver';
import { PatientSelectorsComponent } from './members/patient-selectors/patient-selectors.component';
import { PatientSelecteesComponent } from './members/patient-selectees/patient-selectees.component';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { DoctorPatientsComponent } from './members/doctor-patients/doctor-patients.component';
import { DoctorSelecteesComponent } from './members/doctor-selectees/doctor-selectees.component';
import { DoctorSelectorsComponent } from './members/doctor-selectors/doctor-selectors.component';
import { DoctorDetailComponent } from './members/doctor-detail/doctor-detail.component';
import { CalendarHeaderComponent } from './patient-appointments/patient-appointments-util/patient-appointments-util.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PatientAppointmentsResolver } from './_resolvers/patient-appointments.resolver';
import { GetMemberPatientsResolver } from './_resolvers/get-member-patients.resolver';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorEditComponent } from './members/doctor-edit/doctor-edit.component';


export function tokenGetter() {
   return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig  {
   overrides = {
       pinch: { enable: false },
       rotate: { enable: false }
   };
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      CalendarHeaderComponent,
      PatientChartComponent,
      PatientMessagesComponent,
      PatientAppointmentsComponent,
      PatientDoctorsComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      AdminPanelComponent,
      HasRoleDirective,
      TimeAgoPipe,
      DocumentEditorComponent,
      PatientSelectorsComponent,
      PatientSelecteesComponent,
      MemberMessagesComponent,
      DoctorPatientsComponent,
      DoctorSelecteesComponent,
      DoctorSelectorsComponent,
      DoctorDetailComponent,
      DoctorAppointmentsComponent,
      DoctorEditComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
      ButtonsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FileUploadModule,
      [FormsModule, FlatpickrModule.forRoot()],
      JwtModule.forRoot({
         config: {
            // tokenGetter: tokenGetter,
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),

      CalendarModule.forRoot({
         provide: DateAdapter,
         useFactory: adapterFactory
       })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      MemberDetailResolver,
      PatientAppointmentsResolver,
      PatientDoctorsResolver,
      { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig},
      MemberEditResolver,
      PreventUnsavedChanges,
      PatientSelectorsResolver,
      PatientSelecteesResolver,
      MessagesResolver,
      GetMemberPatientsResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
