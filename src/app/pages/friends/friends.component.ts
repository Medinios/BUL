import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsListComponent implements OnInit {
  friendList: any[] = [];
  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    this.friendsService.get_all_friends_by_team(2).subscribe((res) => {
      this.friendList = res;
    });
  }

  removeFriend(teamId: number) {
    this.friendsService.remove_friend_by_team_id(teamId).subscribe((res) => {
      this.friendList = res;
    });
  }

  sendMsg(friendId: number) {}
}
