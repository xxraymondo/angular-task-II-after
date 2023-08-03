import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQoutesComponent } from './qoutes/all-qoutes/all-qoutes.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'qoutes', loadChildren:()=>import('./modules/qoutes/qoutes.module').then(m=>m.QoutesModule)},
  {path: 'all', component:AllQoutesComponent},
  {path: '', component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
