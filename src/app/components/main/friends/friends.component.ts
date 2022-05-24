import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  friendList: any[] = [];
  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    this.friendsService.get_all_friends_by_team().subscribe((res) => {
      this.friendList = res;
    });
  }
}
