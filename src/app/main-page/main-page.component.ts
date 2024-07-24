import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { StartPageComponent } from '../start-page/start-page.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillsComponent } from '../skills/skills.component';
import { ReferenceComponent } from '../reference/reference.component';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AboutMeComponent, StartPageComponent,
    ContactComponent, PortfolioComponent, SkillsComponent, ReferenceComponent,],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    });
  }
}