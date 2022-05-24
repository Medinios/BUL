import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<any>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('shhhes');
    this.user$ = this.userService.getUserFromDb();
  }
}
