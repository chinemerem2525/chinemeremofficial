import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { RealestateProjectDetailsComponent } from './realestate-project-details/realestate-project-details.component';
import { RemovalCompanyProjectDetailsComponent } from './removal-company-project-details/removal-company-project-details.component';
import { CyberSecurityProjectDetailsComponent } from './cyber-security-project-details/cyber-security-project-details.component';

const routes: Routes = [
     {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'realestate-project-details',
        component: RealestateProjectDetailsComponent
      },
      {
        path: 'removal-company-project-details',
        component: RemovalCompanyProjectDetailsComponent
      },
      {
        path: 'cyber-security-project-details',
        component: CyberSecurityProjectDetailsComponent
      }
    ]
     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
