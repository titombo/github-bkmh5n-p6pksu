import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import data from '../assets/input.json'
import { of, Observable } from 'rxjs';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1> <h1> {{this.inputString}} </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  inputString:any;

  constructor(private httpClient: HttpClient){}

  ngOnInit(){
      this.getDatas().subscribe(data=>{
          console.log(data);
          this.inputString = JSON.stringify(data);
      });

  }

  getDatas():Observable<any>{
    return of(data);
  }

}
