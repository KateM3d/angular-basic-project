import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName = 'test server';
  serverCreated = false;
  servers = ['test-server-1', 'test-server-2', 'test-server-3'];

  //task#1
  allowClick = false;
  username = '';

  //task#2
  showContent = false;
  log: number[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUsernameUpdate(event: Event) {
    this.allowClick = true;
  }
  onRefresh() {
    this.username = '';
    this.allowClick = false;
  }

  onShowSecretContent() {
    this.showContent = !this.showContent;
    this.log.push(this.log.length + 1);
  }
}
