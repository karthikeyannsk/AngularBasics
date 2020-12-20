import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {
  productId=''
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
      
    })
   }
  ngOnInit(): void {
  }

}
