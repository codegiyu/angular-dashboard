import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxSemanticModule } from 'ngx-semantic';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { NavComponent } from '../components/nav/nav.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { InfoBlockComponent } from '../components/info-block/info-block.component';
import { ReportsComponent } from '../pages/reports/reports.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { HeroBtnComponent } from '../components/hero-btn/hero-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LayoutComponent,
    InfoBlockComponent,
    ReportsComponent,
    ProfileComponent,
    PageHeaderComponent,
    HeroBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSemanticModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
