import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { delay, repeatWhen } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  logs: any[] = [];
  logsNumber: number = 0;
  timer: any;
  index: number = 0;
  dummyItems: any[] = [];
  @Output() score = new EventEmitter();
  @Output() gameOver = new EventEmitter();
  @Input() date: any;
  awayTeamId: string;
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs() {
    this.gameService.get_logs_for_game(this.logsNumber).subscribe((res) => {
      this.logs = res.logs;
      this.awayTeamId = res.away_team.team_id;
      this.timer = setInterval(() => {
        if (this.index < this.logs.length) {
          this.searchForScore(this.logs[this.index], this.index);

          this.dummyItems.push(this.logs[this.index]);

          this.index++;
        } else {
          this.logsNumber = this.logs.length - 1;
          clearInterval(this.timer);
          this.gameService.done_game().subscribe((res) => {});
          this.gameOver.emit(this.logs[this.index]);
        }
      }, 1000);
      this.gameService
        .update_game_end(res.away_team.team_id, this.date)
        .subscribe((res) => {
          console.log(res);
        });
    });
  }
  searchForScore(line: any, index: number) {
    //score is : [2, 0]
    if (line[index].includes('score is')) {
      this.score.emit(line[index].split('[')[1].split(']')[0]);
    }
  }

  gameOverChecker() {}
}
