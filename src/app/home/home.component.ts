import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @Input() myInput: any;

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }
  ngOnInit(): void {
    console.log('onInit');
  }
}
