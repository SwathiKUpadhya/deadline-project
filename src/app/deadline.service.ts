import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  deadlineInSec = 1000;
  constructor(private httpClient: HttpClient) { }

  getDeadline(): Observable<any>{
    /* The actual code should be something like below
    return this.httpClient.get<any>(`/api/deadline`);*/

    // for the purpose of working model hardcoding the values
    return of({secondsLeft: this.deadlineInSec --});
}
}
