import { Component } from '@angular/core';
import { Observable } from 'rxjs';
todayO$:Observable<Date>;


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
/*export class AppComponent implements OnInit{
price : number = 2000; ngOnInit(){

}
} */
export class AppComponent {
title = 'pipes-reactive';
presentDate = new Date();
Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
decimalNum1: number = 8.7589623;
decimalNum2: number = 5.43;
ngOnInit(){}


todayO$ = new Observable<Date>((observer) => {
setInterval(() => {
observer.next(new Date());
}, 1000);
});
}
