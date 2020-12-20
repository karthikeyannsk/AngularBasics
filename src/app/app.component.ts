import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  users = {
    id:1,name:'kartik',salary:1200.34
    
  }
  sports = [
    {no:1,name:'smith',country:'Autralia',state:'sydeny'},
    {no:2,name:'warner',country:'England',state:'melbourne'}
  ]
  colourval='red'
  bgColor='#ddd'

  fontStyle="fontStyles"
  fontFamily="fontFamliy"
  fontColor="fontColor"
  backGroundColor="bgColors"

  FirstName=''
}
