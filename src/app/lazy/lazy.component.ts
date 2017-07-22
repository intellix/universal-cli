import { Component, OnInit } from '@angular/core';
import { UserService } from '../user';

@Component({
  selector: 'app-lazy',
  template: 'Laaazy',
})
export class LazyComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
