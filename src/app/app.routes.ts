import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuComponent } from './menu/menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'aboutme', component: MainPageComponent, data: {fragment: 'aboutme'}},
    {path: 'skills', component: MainPageComponent, data: { fragment: 'skills' } },
    {path: 'portfolio', component: MainPageComponent, data: { fragment: 'portfolio' } },
];