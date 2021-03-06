import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm = () => {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  };

  onSubmit = () => {
    const { value, valid } = this.loginForm;
    if (valid) {
      this.authService.login(value).subscribe((data) => {
        localStorage.setItem('login', data.token);
        localStorage.setItem('user', value.username);
        this.router.navigate(['/']);
      });
    }
  };
}
