import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsListComponent implements OnInit {
  friendList: any[] = [];
  displayOpenChat: boolean = false;
  teamChatId: number;
  teamName: string;
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

  openChatWithFriend(teamId: number, teamName: string) {
    this.displayOpenChat = true;
    debugger;
    this.teamChatId = teamId;
    this.teamName = teamName;
  }

  closeDialog() {
    this.displayOpenChat = false;
  }
}
