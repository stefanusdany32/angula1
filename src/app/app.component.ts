import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Loco';
  item = [{
    nama : 'Kelengkeng',
    harga : 5000
  },{
    nama : 'Jeruk',
    harga : 10000
  }];
}
