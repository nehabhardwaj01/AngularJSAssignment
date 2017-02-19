import {Injectable} from '@angular/core'
import {Intern} from './intern'

@Injectable()
export class AppService{
  interns : Intern[] = [
    {name:'Neha',id:1},
    {name:'xyx',id:2},
    {name:'akhil',id:3}
  ]
}
