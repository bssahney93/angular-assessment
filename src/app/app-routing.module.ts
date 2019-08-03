import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroInformationComponent } from './hero-information/hero-information.component';

const routes: Routes = [
  { path: '', component: HeroListComponent },
  { path: 'add-hero', component: HeroFormComponent },
  { path: 'hero-information/:id', component: HeroInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
