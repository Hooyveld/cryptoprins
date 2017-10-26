import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './howitworks/howitworks.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PlansAndPricingComponent } from './plansandpricing/plansandpricing.component';
import { BlogComponent } from './blog/blog.component';

import { BlogService } from './blog/blog.service';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItWorksComponent,
    FaqComponent,
    ContactComponent,
    AboutComponent,
    PlansAndPricingComponent,
    BlogComponent,
    BlogDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpModule,
    FormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
