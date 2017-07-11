import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` 
    <h3>Counter demo:</h3>
    <div id = "counterDiv">
      <button (click)="decrement()">-</button>
          {{counterValue}}
      <button (click)="increment()">+</button>
    </div>

     `,
  styles: [` #counterDiv { 
    font-weight:bold; 
    border: 1px solid gray;
    display: inline;
    padding:5px }`],
})
export class CounterComponent{
  @Input() private counterValue;
  constructor() { 
    this.counterValue =0 ;
  }

  decrement(){
    this.counterValue = parseInt(this.counterValue)-1;
    this.counterChange.emit(this.counterValue);
  }

  increment(){
    this.counterValue = parseInt(this.counterValue)+1;
    this.counterChange.emit(this.counterValue);
  }

  @Output() counterChange = new EventEmitter();

  emitMessage() {
    this.counterChange.emit(this.counterValue);
  }

}
