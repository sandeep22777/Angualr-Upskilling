import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-children',
  imports: [CommonModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css',
  standalone: true,
})
export class ChildrenComponent {
  @Input() cdata: string = '';
  @ContentChild('content') projectedContent!: ElementRef;
  sum: number = 0;
  greetings: string = '';

  counter: number = 0;

  counterAdd() {
    this.counter++;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['cdata']) {
  //     this.sum += 1;
  //   }
  // }

  // ngOnInit(): void {
  //   this.greetings = 'Welcome all';
  // }

  // ngDoCheck(): void {
  //   console.log('ngDocheck Called Children');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('After View Checked Children');
  // }

  // ngAfterContentInit(): void {
  //   console.log('After Content Init Children');
  //   console.log(this.projectedContent.nativeElement, 'aci');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('After Content Checked Children');
  // }
}
