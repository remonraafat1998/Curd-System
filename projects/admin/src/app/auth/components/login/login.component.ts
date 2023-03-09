import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthApiService } from '../../services/auth-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  loading:boolean = false
  constructor(private formBuild: FormBuilder,private authServ:AuthApiService,private router:Router) { }
  ngOnInit(): void {
    this.createFormLogin()

  }

  createFormLogin() {
    this.loginForm = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      role: ['admin']
    })
  }


  loginAction() {
    this.loading = true
    this.authServ.getLoginApi(this.loginForm.value).subscribe((res:any)=> {
      localStorage.setItem('token',res.token)
      this.loading = false
      this.router.navigate(['/tasks'])
    },error => {
      this.loading = false
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:error.error.message ,
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }
}
