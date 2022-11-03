import { Component } from '@angular/core';

// import { Forms } from './forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formapp';

  onSubmit(){
    console.log("Submitted");
    
  }
  
}
