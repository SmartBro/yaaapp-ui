import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  days = [];
  displayedColumns = [ 'type', 'wallet', 'amount' ];

  constructor() { }

  ngOnInit() {
    this.days = [ { date: new Date(), operations: [{
        type: 'restaurant',
        wallet: 'cash',
        amount: 100,
        currency: 'UAH'
      }] } ];
  }

}
