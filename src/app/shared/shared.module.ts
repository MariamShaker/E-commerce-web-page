import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpSectionComponent } from './sign-up-section/sign-up-section.component';
import { NgxPaginationModule } from 'ngx-pagination';


const importExportModules = [RouterModule, NgbModule, ReactiveFormsModule,FormsModule,NgxPaginationModule];
@NgModule({
  declarations: [
    SignUpSectionComponent,

  ],
  imports: [
    CommonModule,
    ...importExportModules,
    
  ],
  exports:[
    ...importExportModules,
    SignUpSectionComponent,

  ]
})
export class SharedModule { }
