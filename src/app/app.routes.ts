import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OurSkillsComponent } from './our-skills/our-skills.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ServiceComponent } from './service/service.component';


export const routes: Routes = [

    { path:'', redirectTo:'app', pathMatch:'full', title:'Home'},
    { path: '' , component : HomeComponent },
    { path: '' , component : ContactComponent },
    { path: '' , component : OurSkillsComponent },
    { path: '' , component : ServiceComponent },
    { path: '' , component : RealisationsComponent },

];
