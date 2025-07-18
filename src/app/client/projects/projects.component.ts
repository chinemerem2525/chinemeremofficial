import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // 🔄 Force a refresh/re-initialization of your logic
        this.loadProjects(); // replace with your actual logic
      });
  }

    loadProjects() {
    // Your logic to reload content goes here
    console.log('Project page reloaded');
  }
}
