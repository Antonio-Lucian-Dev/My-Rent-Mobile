import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private httpUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public findAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.httpUrl}/posts`);
  }
}
