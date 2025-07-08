import { AfterViewInit, Component, ElementRef, ViewChild  } from '@angular/core';

declare var bootstrap: any; // Let TypeScript know bootstrap JS exists
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements AfterViewInit {
 @ViewChild('offcanvas') offcanvasElement!: ElementRef;

  offcanvasInstance: any;

  ngAfterViewInit(): void {

      // Load script manually if needed
  const script = document.createElement('script');
  script.src = '../../assets/js/main.js';
  document.body.appendChild(script);

    // Create the offcanvas instance
    this.offcanvasInstance = new bootstrap.Offcanvas(this.offcanvasElement.nativeElement);

    // Query all menu links inside the offcanvas
    const links: NodeListOf<HTMLAnchorElement> = this.offcanvasElement.nativeElement.querySelectorAll('.offcanvas-menu-link');

    // Attach click event to each link
    links.forEach(link => {
      link.addEventListener('click', () => {
        this.offcanvasInstance.hide();
      });
    });
  }

  constructor() { }

  ngOnInit(): void {
  }


}
