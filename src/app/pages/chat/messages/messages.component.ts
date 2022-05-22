import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  msgUserSent: any[] = [];
  msgUserGet: any[] = [];

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.getAllMsgFromUser();
    this.getAllMsgToMe();
  }

  getAllMsgFromUser() {
    this.friendsService
      .get_all_private_messages_user_sent()
      .subscribe((res) => {
        this.msgUserSent = res;
      });
  }

  getAllMsgToMe() {
    this.friendsService.get_all_private_messages_user_get().subscribe((res) => {
      this.msgUserGet = res;
    });
  }
  changeViewed(msgId: number) {
    this.friendsService.change_viewed(msgId).subscribe((res) => {
      console.log('viewed');
    });
  }
}
