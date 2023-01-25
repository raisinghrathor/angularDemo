import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck
} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit,DoCheck {
  @Input() myInput: any;

  ngOnChanges(change: SimpleChanges) {
    console.log('hello'+change.val);
  }
  ngOnInit(): void {
    console.log('onInit');
  }
  arr:any=[];
  myFunc(){
    this.arr.push(12);
    console.log(this.arr);
  }
  ngDoCheck(){
    console.log("ng DockCheck Called");
  }
}
