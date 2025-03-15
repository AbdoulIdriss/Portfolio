import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  projectUrl?: string;
  image: string;
}

@Component({
  selector: 'app-realisations',
  imports: [CommonModule, RouterModule],
  templateUrl: './realisations.component.html',
  styleUrl: './realisations.component.scss'
})
export class RealisationsComponent{ 

  projects: Project[] = [
    {
      id: 1,
      title: 'BIC LIBRARY',
      description: 'In my early apprenticeship of Web development, I created a web library with Angular regroupping African books. For those who want to dive deep in African masterpieces ',
      technologies: ['Angular'],
      githubUrl: 'https://github.com/AbdoulIdriss/AbdoulIdriss.github.io',
      projectUrl: 'https://abdoulidriss.github.io',
      image: 'images/Library-pana.svg'
    },
    {
      id: 2,
      title: 'Soul Jewellry',
      description: 'Basic Frontend Jewellry website view',
      technologies: ['Angular'],
      githubUrl: 'https://github.com/AbdoulIdriss/jewelry-website',
      projectUrl: 'https://souljewelry.netlify.app/',
      image:'images/jewellry.png'
    },
    {
      id: 3,
      title: 'Les Paniers De Bintou',
      description: 'A showcase website for Les paniers de Bintou company',
      technologies: ['Angular' , 'Tailwind' , 'Express' , 'MongoDB'],
      githubUrl: 'https://github.com/AbdoulIdriss/Les-paniers-de-bintou-frontend-',
      projectUrl: '',
      image:'images/lpd.jpg'
    },
    {
      id: 4,
      title: 'Employee Mangement System',
      description: 'A Backend API build to manage Employees of a company ',
      technologies: ['Typescript' , 'Express' , 'MongoDB'],
      githubUrl: 'https://github.com/AbdoulIdriss/employeeMS-backend',
      image:'https://storyset.com/illustration/company/cuate#2E1C33FF&hide=&hide=complete'
    }
  ];

}
