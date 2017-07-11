import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` 
    <h3>Counter demo:</h3>
    <div id = "counter">
    <button (click)="decrement()">-</button>
         {{counterValue}}
    <button (click)="increment()">+</button>
    </div>
     `,
  styles: [` #counter { 
    font-weight:bold; 
    border: 1px solid gray;
    display: inline;
    padding:5px }`],
})
export class CounterComponent{
  private counterValue;
  constructor() { 
    this.counterValue =0 ;
  }

  decrement(){
    this.counterValue = this.counterValue-1;
  }

  increment(){
    this.counterValue = this.counterValue+1;
  }

}
