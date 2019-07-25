import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../home/User'
import { ChangeDetectionStrategy } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewsletterComponent  {

  @Input()
  user: User;

  @Input()
  userList: Array<User>;

  @Output()
  subscribe = new EventEmitter();

  subscribeToNewsletter(email:string) {
      this.subscribe.emit(email);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngDoCheck() {
    console.log('ngDoCheck() in newsletter ' + this.user.firstName);
  }
}