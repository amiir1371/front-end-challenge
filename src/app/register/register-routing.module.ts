import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PeopleComponent } from './people/people.component';
import { GeneralComponent } from './general/general.component';
import { SummaryComponent } from './summary/summary.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: UploadImageComponent },
      { path: 'general', component: GeneralComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'summary', component: SummaryComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
