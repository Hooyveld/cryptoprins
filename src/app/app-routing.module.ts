import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NotfoundComponent } from './core/notfound/notfound.component'

import { HomeComponent } from './home/home.component'
import { HowItWorksComponent } from './howitworks/howitworks.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PlansAndPricingComponent } from './plansandpricing/plansandpricing.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'plans-and-pricing', component: PlansAndPricingComponent },
  { path: 'blog', component: BlogComponent, children: [] },
  { path: 'blog/:slug', component: BlogDetailsComponent},
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
