import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './client/projects/projects.component';
import { RealestateProjectDetailsComponent } from './client/realestate-project-details/realestate-project-details.component';
import { RemovalCompanyProjectDetailsComponent } from './client/removal-company-project-details/removal-company-project-details.component';
import { CyberSecurityProjectDetailsComponent } from './client/cyber-security-project-details/cyber-security-project-details.component';

const routes: Routes = [
       {
    path: '',
    loadChildren: ()=> import('./client/client.module').then(m => m.ClientModule),
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
