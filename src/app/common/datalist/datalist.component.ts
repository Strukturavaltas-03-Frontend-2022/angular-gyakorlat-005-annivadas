import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {


  @Input() dataList: User[] = [];
  @Output() selectClick: EventEmitter<User> = new EventEmitter;
  @Output() updateClick: EventEmitter<User> = new EventEmitter;
  @Output() deleteClick: EventEmitter<User> = new EventEmitter;


  constructor() { }

  onselectClick(user: User): void {
    this.selectClick.emit(user)
  }
  onUpdateClick(user: User): void {
    this.updateClick.emit(user)
  }
  onDeleteClick(user: User): void {
    this.deleteClick.emit(user)
  }

  ngOnInit(): void {
  }

}
