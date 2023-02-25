import { Component } from '@angular/core';
import { map, of } from 'rxjs';
import { __values } from 'tslib';

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
numbers$
.pipe(
  map(value => value = 2)
)
.subscribe(value => console.log(value));
numbers$.subscribe(value => console.log(value));

const users = [
  { id: 1, name: 'Neil', age: 21},
  { id: 1, name: 'Abby', age: 22},
  { id: 1, name: 'Mylene', age: 20},
  { id: 1, name: 'Reden', age: 89},
]


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

}
