import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../model/project';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private projectUri = 'http://localhost:8080/projects';

  constructor(private http: Http) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get(this.projectUri)
      .map((response: Response) => response.json())
      .catch(this.handleError);;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
