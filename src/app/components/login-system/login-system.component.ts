import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login-system',
  templateUrl: './login-system.component.html',
  styleUrls: ['./login-system.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginSystemComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  loginPasswordVisible: boolean = false;
  signupPasswordVisible: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onLogin(): void {
    if (this.loginForm.valid) {
      this.userService.loginCall(this.loginForm.value).subscribe(response => {
        console.log('Login successful', response);
      }, error => {
        console.error('Login error', error);
      });
    }
  }

  onSignup(): void {
    if (this.signupForm.valid) {
      this.userService.signupCall(this.signupForm.value).subscribe(response => {
        console.log('Signup successful', response);
      }, error => {
        console.error('Signup error', error);
      });
    }
  }

  toggleLoginPasswordVisibility(): void {
    this.loginPasswordVisible = !this.loginPasswordVisible;
  }

  toggleSignupPasswordVisibility(): void {
    this.signupPasswordVisible = !this.signupPasswordVisible;
  }
}
