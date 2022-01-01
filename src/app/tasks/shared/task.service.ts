import { Injectable } from '@angular/core';
import {Task} from './task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [ ];
  constructor() { }

  getAll() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '{}');
    return this.tasks;
  }

  getById(id: number){
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }
  save(task: Task){
    if(task.id){
      const taskArr = this.getById(task.id);
      taskArr!.description = task.description;
      taskArr!.completed = task.completed;
    }else{
     let lastId = 0;
      if(this.tasks.length > 0 ){
        lastId = this.tasks[this.tasks.length - 1].id;
      }
      task.id = lastId +1;
      task.completed = false;
      this.tasks.push(task);
    }
    const data = JSON.stringify(this.tasks);
    localStorage.setItem('tasks',data)
  }




  delete(id: number){
    const taskIndex = this.tasks.findIndex((value) => value.id == id)
    this.tasks.splice(taskIndex,1)
    const data = JSON.stringify(this.tasks);
    localStorage.setItem('tasks',data)
  }
}
