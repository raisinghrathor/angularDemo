import {
  Component,
  AfterContentInit,
  ElementRef,
  ContentChild,
} from '@angular/core';
@Component({
  selector: 'app-friend',
  templateUrl: 'friend.component.html',
})
export class FriendComponent implements AfterContentInit {
  @ContentChild('name') nameRef: ElementRef;
  ngAfterContentInit() {
    
  }
}
