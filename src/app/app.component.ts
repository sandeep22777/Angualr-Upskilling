import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ViewChild,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ChildrenComponent } from './components/children/children.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    CommonModule,
    HeaderComponent,
    BodyComponent,
    ChildrenComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements DoCheck {
  // Life Cycle Hooks

  // 1 ngOnChanges()
  // 2 ngOnInit()
  // 3 ngDoCheck()
  // 4 ngAfterContentInit()
  // 5 ngAfterContentChecked()
  // 6 ngAfterViewInit()
  // 7 ngAfterViewChecked()
  // 8 ngOnDestroy()

  title: string = 'BestBuy';
  check: string = 'checkbox';

  data: string = 'Iphone 16 pro';
  temp: string = '';

  @ViewChild('pp') para: any;
  ngDoCheck(): void {
    console.log('ngDocheck Called Parent');
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  constructor(private http: HttpClient) {}
}
