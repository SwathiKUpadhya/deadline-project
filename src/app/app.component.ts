import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeadlineService } from './deadline.service';
import { interval, repeat, Subscription, takeWhile, tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{


  deadlineService = inject(DeadlineService);
  deadline: any;
  subscription?: Subscription;

    ngOnInit(): void {
      interval(1000).pipe(
        takeWhile(() => this.deadline !== 0)
      ).
      subscribe((data) => {
        this.getDeadline();
    })
    
  }

  getDeadline(){
    this.subscription = this.deadlineService.getDeadline().
      subscribe((data) => {
        this.deadline = data.secondsLeft;
    })
  }

    ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
