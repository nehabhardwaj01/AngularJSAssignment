import { Component , OnInit} from '@angular/core';
import {Intern} from './intern';
import {AppService} from "./app.service";

@Component({
  selector: 'my-app',
  providers: [AppService],
  templateUrl : './app/app.component.html'
})

export class AppComponent implements OnInit{
  
constructor(private service: AppService) {}
}
