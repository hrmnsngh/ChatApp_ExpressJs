import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private url = 'http://localhost:5000';
  private socket;
  username;

  sendMessages(msg) {
    this.socket.emit('addmessage', { type: 'text' , message: msg });
    console.log('in service' + msg);
  }

  sendUser(username) {
    console.log('In service senduser ' + username);
    this.socket.emit('setUsername', username);

  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('userSet', (data) => {
        this.username = data;
        console.log('In service get user' + this.username);
        observer.next(data.username);
      });

      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('newmessage', (data) => {
        observer.next(data.message);
        console.log('In service get msgs' + data.message);
        // this.username = data.user;
      });

      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
  constructor() {
    this.socket = new io(this.url, { transports: ['websocket'] });
  }

}
