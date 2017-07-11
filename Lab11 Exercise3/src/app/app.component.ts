import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter = 5;
  title = 'Lab11';

  public ComponentCounterValue;

  showOutputData(data){
    this.ComponentCounterValue = data;
  }  
}
