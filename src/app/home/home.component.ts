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

  id = "tsparticles";

  particlesUrl = "http://foo.bar/particles.json";

  constructor( 
    public navService : NavService
  ){}
  
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faXTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  ngAfterViewInit() {
    this.startTypewriterEffect();
  }

  startTypewriterEffect() {
    const text = "Full Stack web developer";
    const typewriterElement = document.getElementById('typewriter');
    
    if (!typewriterElement) {
      console.error('Typewriter element not found');
      return;
    }
    
    let isDeleting = false;
    let charIndex = 0;
    let typingSpeed = 100; // milliseconds per character
    let pauseBeforeDelete = 1500; // pause before starting to delete
    let pauseBeforeType = 500; // pause before starting to type again
    
    function typeEffect() {
      const currentText = text.substring(0, charIndex);

       // Check if element still exists before updating content
      if (typewriterElement) {
        typewriterElement.textContent = currentText;
      } else {
        console.error('Typewriter element no longer exists');
        return; // Stop the animation if element is gone
      }
      
      if (!isDeleting && charIndex < text.length) {
        // Still typing
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
      } else if (!isDeleting && charIndex >= text.length) {
        // Finished typing, pause before deleting
        isDeleting = true;
        setTimeout(typeEffect, pauseBeforeDelete);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        setTimeout(typeEffect, typingSpeed / 2); // Delete faster than typing
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, pause before typing again
        isDeleting = false;
        setTimeout(typeEffect, pauseBeforeType);
      }
    }
    
    // Start the typing effect
    typeEffect();
  }

}
