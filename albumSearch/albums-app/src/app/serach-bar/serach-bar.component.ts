import { Component } from '@angular/core';
import { ItunesApiService } from '../service/itunes-api.service';
import { Album, SearchRes } from '../service/interfaces';

@Component({
  selector: 'app-serach-bar',
  templateUrl: './serach-bar.component.html',
  styleUrl: './serach-bar.component.css',
})
export class SerachBarComponent {
  artistName!: string;
  albums!: Album[];
  searchRes!: any;

  constructor(private itApi: ItunesApiService) {}

  SearchOn(name: string) {
    this.artistName = name.trim();
    console.log(this.artistName);
    this.itApi.getAlbumsByName(this.artistName).subscribe((res) => {
      this.searchRes = res;
      this.albums = this.searchRes.results;
    });
  }
}
