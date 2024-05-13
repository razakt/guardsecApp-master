import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentPageComponent } from './document-page/document-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
   { path: '', component: HomePageComponent },
   { path: 'article-page', component:DocumentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
