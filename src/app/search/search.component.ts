import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  state='';
  country=''
  constructor(private activatedRoute: ActivatedRoute) { 
    debugger
    this.activatedRoute.queryParams.subscribe(data=>{
      this.state=data.state;
      this.country = data.country;
    })
  }

  ngOnInit(): void {
  }

}
