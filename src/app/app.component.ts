import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { initFlowbite } from 'flowbite';
import { HomeComponent } from './home/home.component';
import { OurSkillsComponent } from './our-skills/our-skills.component';
import { CommonModule } from '@angular/common';
import { RealisationsComponent } from "./realisations/realisations.component";

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, HomeComponent, OurSkillsComponent, CommonModule, RealisationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio-frontend';

  isMenuOpen = false;
  isScrolled = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth >= 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
