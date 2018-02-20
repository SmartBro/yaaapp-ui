import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [HistoryService]
})
export class HistoryComponent implements OnInit {
  days: any = [];
  displayedColumns = [ 'type', 'wallet', 'amount' ];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getHistory()
      .subscribe(data => this.days = data);
  }

}
