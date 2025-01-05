import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItunesApiService {
  baseUrl = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) {}

  getAlbumsByName(name: string) {
    const url = `${this.baseUrl}?term=${name}&media=music&entity=album&attribute=artistTerm&limit=200`;
    return this.http.get(url);
  }
}
