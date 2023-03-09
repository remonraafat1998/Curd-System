import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faBars, faClose} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
faBars = faBars
faColse = faClose
constructor(private router:Router){}
logout()
{
localStorage.clear()
this.router.navigate(['/login'])
}

}
