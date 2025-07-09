import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private meta: Meta, private title: Title) {
  this.title.setTitle('Chinemerem Cyril – Full Stack Software Engineer | Angular, Node.js, Express.js, MongoDB');

  this.meta.addTags([
    {
      name: 'description',
      content:
        'Hire Chinemerem Cyril – a highly skilled full stack software engineer with 4+ years of experience building scalable web applications using Angular, Node.js, Express.js, MongoDB. Specialized in performance optimization, responsive design, and API integration for startups and enterprises.'
    },
    {
      name: 'keywords',
      content:
        'Full Stack Software Engineer, Hire Full Stack Developer, Angular Developer, Node.js Developer, Front-End Developer, Web Application Developer, Remote Software Engineer, Software Engineer Nigeria, Expert Web Developer, Backend Developer, Frontend Developer, REST API Developer, JavaScript Developer, TypeScript Developer, MongoDB, VS code, HTML, CSS, Javascript, Hire Developer Worldwide'
    },
    { name: 'author', content: 'Chinemerem Cyril' },
    { property: 'og:title', content: 'Chinemerem Cyril – Full Stack Software Engineer for Hire' },
    {
      property: 'og:description',
      content:
        'Work with Chinemerem Cyril – a result-driven full stack engineer proficient in Angular, Node.js, Express.js, MongoDB. Trusted by businesses to build fast, secure, and modern web applications.'
    },
    {
      property: 'og:image',
      content: 'https://www.yourdomain.com/assets/img/profile/chinemerem-cyril-og.png' // Replace with real image URL
    },
    { property: 'og:url', content: 'https://www.yourdomain.com' } // Replace with your actual domain
  ]);
}

}
