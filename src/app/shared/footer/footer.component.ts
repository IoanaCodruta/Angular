import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 year: number = new Date().getFullYear ();
 day: number = new Date().getDate ();
 month: number = new Date().getMonth ();
}
