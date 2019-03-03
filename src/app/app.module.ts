// Required Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './includes/shared.module';

// External Modules
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// Services
//import { ContactService } from './contact/contact.service';
import { HttpClient } from './includes/http-client.service'
import { WindowService } from './includes/window.service'

// Main Application Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';

// Router Components
//import { ContactComponent } from './contact/contact.component';

// Initialize routes array with index / HomeComponent
const appRoutes: Routes = [{
    path: '',
    component: HomeComponent,
}];

// Take invalid routes and redirect users to index
appRoutes.push({
  path: '**',
  redirectTo: '/'
});

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    //ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    Ng2PageScrollModule.forRoot(),
    SharedModule
  ],
  providers: [
    //ContactService,
    HttpClient,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }