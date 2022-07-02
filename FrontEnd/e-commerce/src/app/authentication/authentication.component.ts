import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  credentials: any = {};
  regData: any = {};

  handelLogin() {}

  handelRegister(form: NgForm) {
    console.log(form);
  }
}
