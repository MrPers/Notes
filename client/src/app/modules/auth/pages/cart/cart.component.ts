import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConstantsService } from '../../../../services/constants.service';
import { CurrencyService } from '../../../../services/currency.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private constantsService: ConstantsService, private currencyService:CurrencyService, private route: ActivatedRoute){}
  products = [];
  sum:number=0;

  ngOnInit() {
    // let userID = "14f98611-bb70-43ae-4646-08d9f71dabfd";
    let userID = "34b31a0c-8c65-4864-4647-08d9f71dabfd";

    this.currencyService.getUserChoiceByUserId(userID)
      .subscribe((data: any) =>
      {
        this.products = data['userChoicesResult'];
        this.products.forEach(element => {
          this.sum = this.sum + (element.netPrice * element.numberProductinUserChoice);
          // debugger;
        });
      });

  }

}
