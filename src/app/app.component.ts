import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-hw';
  isExpanded = false;
  sectionStates: boolean[] = [false,false,false,false];

  toggleExpand(index: number) {
    this.sectionStates.fill(false);
    this.sectionStates[index] = !this.sectionStates[index];
  }
}
