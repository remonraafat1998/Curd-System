import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksAdminRoutingModule } from './tasks-admin-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';


import {MatDialogModule} from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TasksComponent,
    AllTasksComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TasksAdminRoutingModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports:[
    AllTasksComponent,
    AddTaskComponent,
    MatDatepickerModule,
  ]
})
export class TasksAdminModule { }
