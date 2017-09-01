import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
