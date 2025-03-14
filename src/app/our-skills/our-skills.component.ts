import { Component } from '@angular/core';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  icon: string;
  iconType: 'text' | 'svg';
  color: string;
  textColor: string;
  svgContent?: string;
}

@Component({
  selector: 'app-our-skills',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './our-skills.component.html',
  styleUrl: './our-skills.component.scss'
})
export class OurSkillsComponent {

  technologies: Technology[] = [
    { 
      name: 'HTML', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', 
      iconType: 'svg',
      color: 'bg-orange-500', 
      textColor: 'text-white' 
    },
    { 
      name: 'CSS3', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', 
      iconType: 'svg',
      color: 'bg-blue-500', 
      textColor: 'text-white' 
    },
    { 
      name: 'Scss', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg', 
      iconType: 'svg',
      color: 'bg-pink-400', 
      textColor: 'text-white' 
    },
    { 
      name: 'Tailwind', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', 
      iconType: 'svg',
      color: 'bg-cyan-400', 
      textColor: 'text-white' 
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', 
      iconType: 'svg',
      color: 'bg-yellow-300', 
      textColor: 'text-black' 
    },
    { 
      name: 'TypeScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      iconType: 'svg',
      color: 'bg-blue-500', 
      textColor: 'text-white' 
    },
    { 
      name: 'Angular', 
      iconType: 'svg',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', 
      color: 'bg-gray-800', 
      textColor: 'text-pink-500'
    },
    { 
      name: 'Node JS', 
      iconType: 'svg',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', 
      color: 'bg-gray-800', 
      textColor: 'text-green-500'
    },
    { 
      name: 'MongoDB', 
      iconType: 'svg',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', 
      color: 'bg-gray-800', 
      textColor: 'text-green-500'
    },
    { 
      name: 'MySQL', 
      iconType: 'svg',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      color: 'bg-gray-800', 
      textColor: 'text-blue-500'
    }
  ];
}
