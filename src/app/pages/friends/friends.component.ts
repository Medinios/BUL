import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendsService } from 'src/app/services/friends.service';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
  friendsRequest: any[];
  constructor(
    private friendsService: FriendsService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.getFriends();
    this.getFriendRequests();
  }

  getFriendRequests() {
    this.friendsService.get_all_friend_requests().subscribe((res) => {
      this.friendsRequest = res;
    });
  }
  getFriends() {
    this.friendsService.get_all_friends_by_team().subscribe((res) => {
      this.friendList = res;
    });
  }

  removeFriend(teamId: number) {
    this.friendsService.remove_friend_by_team_id(teamId).subscribe((res) => {
      Swal.fire(
        'Remove Friend',
        'You removed your friend succesfully!',
        'success'
      );
      this.friendList = res;
    });
  }

  openChatWithFriend(teamId: number, teamName: string) {
    this.displayOpenChat = true;
    this.teamChatId = teamId;
    this.teamName = teamName;
  }

  closeDialog() {
    this.displayOpenChat = false;
  }

  acceptFriendRequest(team_id: string) {
    this.friendsService.accept_friend_request(team_id).subscribe((res) => {
      this.getFriends();
      this.getFriendRequests();
    });
  }

  inviteGame(userId: string): void {
    console.log('fff');
    this.gameService.invite_for_game(userId).subscribe((res) => {
      Swal.fire(
        'Game Request',
        'You sent a game request succesfully!',
        'success'
      );
    });
  }
}
