import { Component, OnInit } from '@angular/core';
import {TaskService} from './../shared/task.service';
import {Task} from './../shared/task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    this.tasks = this.taskService.getAll();
  }

}
