import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm = () => {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      team_name: ['', Validators.required],
      password: ['', Validators.required],
      logo: ['', Validators.required],
    });
  };

  onSubmit = () => {
    const { value, valid } = this.registerForm;
    if (valid) {
      this.authService.createUser(value).subscribe((data) => {
        this.router.navigate(['/login']);
      });
    }
  };
}
