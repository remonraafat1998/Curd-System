import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Tasks } from '../interfaces/tasks';
import { environment } from 'projects/admin/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpS:HttpClient) { }

  getAllTasks()
  {
    return this.httpS.get(environment.baseApi+'/tasks/all-tasks')
  }

  createTask(model:any)
  {
   return this.httpS.post(environment.baseApi+'/tasks/add-task',model)
  }
}
