import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';
import { AccountService } from '../shared/services/account.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isUserAuthenticated: boolean;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private accountService: AccountService
  ) 
  { 
    this.isUserAuthenticated = false;
  }
  onSelectionChange(event: any) {
    if(event.value === 'logout')
      {
        this.accountService.logout();
      }
      else
      {
        this.router.navigate(['/' + event.value]);
      }
  }
  getUserIsAuthenticated()
  {
    return this.authService.isUserAuthenticated();
  }
  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }
}
