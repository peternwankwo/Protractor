import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BandComponent} from './band/band.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'rosesnguns', component: BandComponent},
	{path: 'home', component: HomeComponent},
	{path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
