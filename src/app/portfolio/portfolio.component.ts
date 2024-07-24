import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { SharkeyComponent } from './sharkey/sharkey.component';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, SharkeyComponent, PokedexComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
