import {Injectable} from '@angular/core';
import {User} from "../common/user";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';


  constructor(private httpClient: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/api/all`);
  }

  public addUsers(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/api/add`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/api/update`, user);
  }

  //// ORIGINAL SERVICE FILE //// todo:delete from here up

  postUserForm(data: any) {
    return this.httpClient.post<any>(this.baseUrl, data);
  }


  getUserForm(): Observable<User[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.users)
    );
  }

  /*
      getUpdateUser(data: any, id: number) {
          return this.httpClient.put<any>(this.baseUrl + id, data);
      } DON'T THINK THIS WORKS
  */
}


interface GetResponse {
  _embedded: {
    users: User[];
  }
}
