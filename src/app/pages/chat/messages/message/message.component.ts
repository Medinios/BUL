import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: any;
  @Input() to?: boolean = false;
  @Input() from: boolean = false;
  displayOpenChat: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  closeDialog() {
    this.displayOpenChat = false;
  }
  openChat() {
    this.displayOpenChat = true;
  }
}
