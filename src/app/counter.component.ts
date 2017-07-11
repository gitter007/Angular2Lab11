import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <p class = "red">Red Paragraph {{counterValue}}</p>
      <button ng-click="counterValue=counterValue-1"><i class="glyphicon glyphicon-minus">  </i></button>
    {{counterValue}}
    <button  ng-click="counterValue=counterValue+1"> <i class="glyphicon glyphicon-plus">  </i> </button>
    
     `,
  styles: []
})
export class CounterComponent implements OnInit {
  private counterValue;
  constructor() { 
    this.counterValue =0 ;
  }

  ngOnInit() {
  }

}
