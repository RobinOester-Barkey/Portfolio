import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  constructor(private router: Router) {} // Injizieren des Router-Dienstes

  openMenu() {
    this.router.navigate(['/menu']); // Navigieren zur Menü-Seite
  }
}