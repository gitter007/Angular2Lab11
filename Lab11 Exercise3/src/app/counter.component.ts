import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

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
export class CounterComponent  implements OnInit {
  @Input() private counterValue;
  @Output() counterChange = new EventEmitter();
  
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



  emitMessage() {
    this.counterChange.emit(this.counterValue);
  }
  ngOnInit() {    
    this.counterChange.emit(this.counterValue);
  }

}
