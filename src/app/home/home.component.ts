/**
 * Created by Neha on 16/02/2017.
 */
//import {Component} from '@angular/core'
import { Component , OnInit} from '@angular/core';
import {Task} from './task';
import {TaskService} from "./home.service";

@Component({
  selector : 'home',
  templateUrl: './app/home/home.component.html',
  providers : [TaskService],    //THAT'S NOT A SINGLETON SERVICE, KEEP THIS IN NGMODULE
  styleUrls: ['']
})

export class HomeComponent implements OnInit{
  myTasks : Task[];
  createLink = false;
  showLink = false;
  myArray = [1,5,79,6,3,10,45,20,3,1,4];

  saveTask(date:Date,title : string, desc : string, priority : string){
    this.service.tasks.push(new Task(date,title,desc,priority));
    alert("Task Created");
  }

  constructor(private service: TaskService) {
  }

   ngOnInit(){
     this.myTasks = this.service.tasks;
   }

  setCreateLink(){
    this.createLink = true;
    this.showLink = false;
  }

  setShowLink(){
  this.createLink = false;
  this.showLink = true;
  }

  done(position : number){
    this.service.tasks.splice(position,1);
  }

  edit(){
    this.setCreateLink();
  }
}
