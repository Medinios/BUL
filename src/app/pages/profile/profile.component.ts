import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FriendsService } from 'src/app/services/friends.service';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userId: string = '';
  teamProfile$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private friendsService: FriendsService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    if (this.userId == '') {
    } else {
      this.teamProfile$ = this.userService.getTeamDeatils(this.userId);
    }
    console.log(this.userId);
  }

  addFriend(teamId: string): void {
    this.friendsService.add_friend_request(teamId).subscribe((res) => {
      Swal.fire('Add Friend', 'You added a new friend succesfully!', 'success');
    });
  }
  inviteGame(): void {
    this.gameService.invite_for_game(this.userId).subscribe((res) => {
      Swal.fire(
        'Game Request',
        'You sent a game request succesfully!',
        'success'
      );
    });
  }
}
