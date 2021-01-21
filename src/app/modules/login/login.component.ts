import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';
  state: number = 0;
  constructor(private db: LoginService, private router: Router) {
    let isLoged: Boolean = Boolean(JSON.parse(localStorage.getItem('loged')));
    if(isLoged) this.router.navigate(['/Stats', 'bar-chart']);
  }

  ngOnInit(): void {
  }

  login(){
    this.db.login(this.user, this.password).subscribe(data => {
      if(data.length == 0){
        this.state = 2;
        setTimeout(() => this.state = 0, 2000);
      } else {
        this.state = 1;
        this.user = '';
        this.password = '';
        setTimeout(() => {
          this.state = 0
          window.location.reload();
        }, 1000);
        localStorage.setItem('loged', 'true');
      }
    })
  }
}
