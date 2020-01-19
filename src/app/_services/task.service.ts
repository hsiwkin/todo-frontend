import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  private API_ENDPOINT = "http://localhost:5000/api/task";

  constructor(private http: HttpClient) {}

  newTask(description: string): Observable<any> {
    return this.http.post(this.API_ENDPOINT, {
      description
    });
  }

  getAll(): Observable<any> {
    return this.http.get(this.API_ENDPOINT);
  }

  markCompleted(id: string): Observable<any> {
    return this.http.put(`${this.API_ENDPOINT}/complete`, {
      _id: id,
      completed: true
    });
  }

  deleteCompleted(): Observable<any> {
    return this.http.delete(`${this.API_ENDPOINT}/completed`);
  }
}
