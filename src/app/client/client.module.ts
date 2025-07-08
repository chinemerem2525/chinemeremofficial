import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { RealestateProjectDetailsComponent } from './realestate-project-details/realestate-project-details.component';
import { RemovalCompanyProjectDetailsComponent } from './removal-company-project-details/removal-company-project-details.component';
import { CyberSecurityProjectDetailsComponent } from './cyber-security-project-details/cyber-security-project-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    RealestateProjectDetailsComponent,
    RemovalCompanyProjectDetailsComponent,
    CyberSecurityProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
        ReactiveFormsModule,
  ]
})
export class ClientModule { }
