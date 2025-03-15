import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor( 
    public navService : NavService
  ){}
  
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faXTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;


}
