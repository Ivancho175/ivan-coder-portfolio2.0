import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private data = {
    hero: {
      career: 'software dev',
      img_src: './assets/images/profile_port_2023.png',
      img_alt: "Ivan Velez's profile picture",
    },
    services: [
      {
        name: 'UI / UX Design',
        description:
          'Amazing designs for your website. Impressions that hook your clients and a professional SEO work so that your business increases its presence on the web.',
      },
      {
        name: 'E-Commerce',
        description:
          'Keep transactions with your clients completely confidential, implementing the most powerful electronic commerce tools on your website.',
      },
      {
        name: 'Fullstack Development',
        description:
          'Increase the functionalities of your website and discover a lot of customization options in the huge Nodejs universe.',
      },
    ],
    projects: [{}],
  };

  private projects = [
    {
      id: 'PR01',
      image_url: '/assets/images/nx_todolist_picture.png',
      image_alt: 'NXTodoList representative image',
      name: 'NX TodoList',
      description:
        'A simple fullstack application, using SCSS and MongoDB as NoSQL database',
      techs: ['TC01', 'TC02', 'TC03'],
      repo_url: 'https://github.com/Ivancho175/nx-todolist',
      site_url: 'https://spectacular-nougat-59feb3.netlify.app/dashboard',
    },
    {
      id: 'PR02',
      image_url: '/assets/images/ngx-responsive-datatable_picture.png',
      image_alt: 'ngx-responsive-datatable library representative image',
      name: 'Angular Responsive Datatable',
      description:
        'Responsive datatable. Easy implementation, beautiful and clean style, powerful search engine and pagination that can handle large data. It was created with Angular16, but it surely works on Angular 8+.',
      techs: ['TC01', 'TC04'],
      repo_url: 'https://github.com/Ivancho175/ngx-responsive-datatable-app',
      pack_url: 'https://www.npmjs.com/package/ngx-responsive-datatable',
    },
  ];

  private technologies = [
    {
      id: 'TC01',
      name: 'Angular',
      icon_class: 'fab fa-angular',
      color: '#dd0031',
    },
    {
      id: 'TC02',
      name: 'NestJS',
      icon_class: 'fab fa-node-js',
      color: '#ea2845',
    },
    {
      id: 'TC03',
      name: 'NX',
      icon_class: 'fab fa-node-js',
      color: '#053247',
    },
    {
      id: 'TC04',
      name: 'SASS',
      icon_class: 'fab fa-sass',
      color: '#bf4080',
    },
  ];

  public getData() {
    this.data.projects = this.getProjects();
    return this.data;
  }

  private getProjects() {
    this.projects.forEach((proj) => {
      const obj: any[] = [];
      proj.techs.forEach((tech) => {
        obj.push(this.getTechById(tech));
      });
      proj.techs = obj;
    });
    return this.projects;
  }

  private getTechById(id: string) {
    return this.technologies.find((tech) => tech.id === id);
  }
}
