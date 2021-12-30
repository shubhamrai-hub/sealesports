import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dialog', component: DialogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
