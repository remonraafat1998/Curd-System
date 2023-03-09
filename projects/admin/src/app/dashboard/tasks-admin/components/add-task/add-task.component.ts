import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
 newTaskForm!:FormGroup
 fileName:any;

 users:any = [
 {name: 'mo', userId: '6408f4a7adc93b0a41ce6f46'},
 {name: 'ahmed', userId: '6408f64eadc93b0a41ce6f49'},
  {name: 'remon',userId: '640a0b15a3451fbc5e82dda5'}
 ]
  constructor(private formB:FormBuilder, private taskSer:TasksService, public dialog:MatDialogRef<AddTaskComponent>){}

ngOnInit(): void {
  this.createNewForm()
}


createNewForm()
{
  this.newTaskForm = this.formB.group({
    title:['',[Validators.required]],
    userId:['',[Validators.required]],
    image:['',[Validators.required]],
    description:['',[Validators.required]],
    deadline:['',[Validators.required]],
  })
}
selectImage(event:any)
{
  this.fileName = event.target.files[0]
  this.newTaskForm.get('image')?.setValue(this.fileName)
}
// create task
createNewTask()
{
  let model =  this.preperFormData()
  this.taskSer.createTask(model).subscribe((res)=> {
    this.dialog.close()
  })
}
preperFormData()
{
  let newDate = moment(this.newTaskForm.value['deadline']).format('DD-MM-YYYY');
  let FormData2 = new FormData();
  Object.entries(this.newTaskForm.value).forEach(([key, value]:any)=> {
    if(key == 'deadline')
    {
      FormData2.append(key, newDate)
    }else
    {
      FormData2.append(key, value)
    }
  });
  return FormData2
}

}
