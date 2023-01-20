import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-oninit',
  templateUrl: './oninit.component.html',
})
export class OninitComponent implements OnInit {
  @Input() data: string;
  lifecycleTicks: number = 0;
  ngOnInit() {
    this.lifecycleTicks++;
  }
}
