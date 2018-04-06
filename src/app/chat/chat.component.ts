import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  messages = [];
  message;
  connection;
  users = [];
  username;
  userNameExist = false;
  constructor(private chatService: ChatService) { }

  sendUser() {
    this.chatService.sendUser(this.username);
    this.getUsers();
  }

  sendMessage() {
    this.chatService.sendMessages(this.message);
    console.log(this.message);
    this.message = '';
    this.getMessages();
  }

  getMessages() {
    this.chatService.getMessages().subscribe(newmessage => {
      this.messages.push(newmessage);
      console.log('In ts get msgs' + newmessage);
      console.log(this.messages);
    });
  }

getUsers() {

      this.chatService.getUsers().subscribe(username => {
      console.log('in component getusers ' + username);
      if (username === '-1') {
        this.userNameExist = true;
        console.log('username exists');
      } else {
        this.userNameExist = false;
        this.users.push(username);
        console.log('username doesnt exist');
      }
    });

  }

  ngOnInit() {


  }
  AfterView() {
  }

  OnDestroy() {
    this.connection.unsubscribe();
  }

}
