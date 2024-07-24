import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sharkey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sharkey.component.html',
  styleUrl: './sharkey.component.scss'
})
export class SharkeyComponent {
  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
