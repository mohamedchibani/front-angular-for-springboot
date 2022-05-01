/* login.component.ts */
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  })

  constructor(
    private authService: AuthService, 
    private tokenService: TokenService, 
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(res => this.handleResponse(res))
  }

  handleResponse(res: any) {
    this.tokenService.handle(res);
    this.accountService.changeStatus(true);
    this.router.navigateByUrl('/address');
  }
}
