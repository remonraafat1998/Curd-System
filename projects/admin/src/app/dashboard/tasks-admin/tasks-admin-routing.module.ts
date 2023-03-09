import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path:'',component:AllTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksAdminRoutingModule { }
