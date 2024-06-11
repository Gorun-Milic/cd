import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './components/website/website.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WelcomePartComponent } from './components/welcome-part/welcome-part.component';
import { AboutUsPartComponent } from './components/about-us-part/about-us-part.component';
import { WorkProcessPartComponent } from './components/work-process-part/work-process-part.component';
import { EmployeesPartComponent } from './components/employees-part/employees-part.component';
import { ServicesPartComponent } from './components/services-part/services-part.component';
import { ReferencesPartComponent } from './components/references-part/references-part.component';
import { FooterPartComponent } from './components/footer-part/footer-part.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SolarPanelsPartComponent } from './components/solar-panels-part/solar-panels-part.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    NavigationComponent,
    WelcomePartComponent,
    AboutUsPartComponent,
    WorkProcessPartComponent,
    EmployeesPartComponent,
    ServicesPartComponent,
    ReferencesPartComponent,
    FooterPartComponent,
    SolarPanelsPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
