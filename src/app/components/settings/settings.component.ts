import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentDate: Date = new Date();

  private timer: any;
  public currentTime: Date = new Date();

  constructor() {
    // You can also use the datePipe.transform method to format the date in the component
    // this.currentDate = this.datePipe.transform(new Date(), 'medium');
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.updateCurrentTime();
    }, 1000); // Update every second
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private updateCurrentTime(): void {
    this.currentTime = new Date();
  }
}
