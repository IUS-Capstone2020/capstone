import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Mask {
  id: string;
  name: string;
  price: string;
  description: string;
  fit: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) {
  }

  private url = '/v1/masks/';

  public getMask(name: string): Observable<Mask> {
    return this.http.get<Mask>(`${this.url}/${name}`);
  }

  public getMaskName(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
