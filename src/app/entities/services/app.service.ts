import {Injectable} from "@angular/core";
import {UserInterface} from "../interfaces/user.interface";
import {TicketInterface} from "../interfaces/ticket.interface";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable()
export class AppService {

  constructor(
    private _http: HttpClient
  ) {

  }

  public users: UserInterface[] = [{
    id: 1,
    name: 'Ivan',
    registrationDate: '2020.13.12',
    ticketsCount: 0
  }, {
    id: 2,
    name: 'Petr',
    registrationDate: '2020-12-08',
    ticketsCount: 0
  }, {
    id: 3,
    name: 'Danila',
    registrationDate: '2021/12/08',
    ticketsCount: 10
  }];

  public tickets: TicketInterface[] = [{
    id: 10,
    name: 'Домашняя работа',
    userId: 3
  }, {
    id: 20,
    name: 'Помыть посуду',
    userId: 3
  }, {
    id: 30,
    name: 'Погулять с собакой',
    userId: 1
  }];


  public getUsers(): UserInterface[] {
    return this.users;
  }

  public getTickets(): TicketInterface[] {
    return this.tickets;
  }

  public getDataFromServer(): Promise<any> {
    return this._http.get('https://dog.ceo/api/breeds/image/random')
      .pipe(
        map((result: any) => {
          return result.message;
        })
      ).toPromise();
  }

}
