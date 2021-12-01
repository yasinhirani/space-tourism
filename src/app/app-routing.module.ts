import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "destination",
    component: DestinationComponent,
    children: [
      {
        path: 'moon',
        component: DestinationComponent
      },
      {
        path: 'mars',
        component: DestinationComponent
      },
      {
        path: 'europa',
        component: DestinationComponent
      },
      {
        path: 'titan',
        component: DestinationComponent
      },
    ]
  },
  {
    path: "crew",
    component: CrewComponent,
    children: [
      {
        path: 'douglas',
        component: CrewComponent
      },
      {
        path: 'mark',
        component: CrewComponent
      },
      {
        path: 'victor',
        component: CrewComponent
      },
      {
        path: 'anousheh',
        component: CrewComponent
      },
    ]
  },
  {
    path: "technology",
    component: TechnologyComponent,
    children: [
      {
        path: 'launch',
        component: TechnologyComponent
      },
      {
        path: 'space-port',
        component: TechnologyComponent
      },
      {
        path: 'space-capsule',
        component: TechnologyComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
