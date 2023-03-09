import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [{
      path: 'tasks', loadChildren: () => import('./tasks-admin/tasks-admin.module').then(tasks => tasks.TasksAdminModule)
    }]
  },
  { path: 'users', loadChildren: () => import('./manage-users/manage-users.module').then(user => user.ManageusersModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
