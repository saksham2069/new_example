import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(private _fb: FormBuilder, private serv: UsersService,private router:Router) {
    this.loginform = this._fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  state: boolean = true;
  onsubmit() {
    if (this.loginform.valid) {
      this.serv.getusers().subscribe({
        next: (res) => {
          const data = res.find((a: any) => {
            return a.username === this.loginform.value.username
          })
          if (data) {
            alert("LoggedIn Sucessfully");
            this.router.navigate(['/main'])
            localStorage.setItem('user', data.username);
            
            
          } else {
            this.state = false;
          }
        },
        error: () => {
          console.log("Error");
        }
      })
    }
  }

  ngOnInit() {
  }

}
