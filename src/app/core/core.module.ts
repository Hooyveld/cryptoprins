import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    NotfoundComponent,
    AppRoutingModule
],
  declarations: [FooterComponent, NavigationComponent, NotfoundComponent]
})
export class CoreModule { }
