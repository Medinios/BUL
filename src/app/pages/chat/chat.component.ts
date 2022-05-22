import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/services/friends.service';
import { AuthService } from '../authentication/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() teamChatId: number;
  @Input() display: boolean = false;
  @Input() teamName: string;
  @Output() closedDialog = new EventEmitter<boolean>();
  chatForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private friendsService: FriendsService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm = () => {
    this.chatForm = this.fb.group({
      subject: ['', Validators.required],
      message: ['', Validators.required],
      user_id: this.teamChatId,
    });
  };

  onSubmit() {
    this.chatForm.patchValue({ user_id: this.teamChatId });
    const { valid, value } = this.chatForm;
    if (valid) {
      this.friendsService.send_chat_message(value).subscribe((res) => {});
    }
  }

  closeDialog() {
    this.closedDialog.emit(false);
  }
}
