import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import { AddTaskComponent } from '../add-task/add-task.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
};
@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})

export class AllTasksComponent implements OnInit {
displayedColumns: string[] = ['index','user','title','deadline','status','actions'];
dataSource:any[] = [];

constructor(private taskServ: TasksService ,public dialog:MatDialog){}
ngOnInit(): void {
  this.getAllTasks();
}



opendialog()
{
  const dialogRef = this.dialog.open(AddTaskComponent, {
    width: "460px",
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result == true)
    {
      this.getAllTasks()
    }

  });
}

getAllTasks()
{
  this.taskServ.getAllTasks().subscribe((res:any)=> {
   this.dataSource =  this.editArray(res.tasks)
   console.log(this.dataSource)

  },error=> {})
}

editArray(data:any[])
{
  let mapData = data.map((ele)=> {
    return {
        ...ele,
      user:ele.userId.username,

    }
  })
 return mapData
}
}
