import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HistoryService {
  constructor(private http: HttpClient) {}

  public getHistory() {
    return this.http.get('http://localhost:3000/operations');
  }
}
