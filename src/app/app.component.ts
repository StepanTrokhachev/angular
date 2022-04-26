import { Component } from '@angular/core';
import {AppService} from "./entities/services/app.service";
import {UserInterface} from "./entities/interfaces/user.interface";
import {TicketInterface} from "./entities/interfaces/ticket.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users: UserInterface[] = [];
  public tickets: TicketInterface[] = [];

  public randomDog: any;

  public usersTableColumns = [
    'id',
    'name',
    'registrationDate',
    'ticketsCount'
  ];

  constructor(
    private _appService: AppService
  ) {
    this.users = this._appService.getUsers();
    this.tickets = this._appService.getTickets();

    this._appService.getDataFromServer().then((data) => {
      this.randomDog = data;
    });
  }



}
