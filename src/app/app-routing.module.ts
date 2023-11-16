import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AllUniversiteComponent } from './universite/all-universite/all-universite.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'universite', component: AllUniversiteComponent }, // Add this line for the AllUniversiteComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
