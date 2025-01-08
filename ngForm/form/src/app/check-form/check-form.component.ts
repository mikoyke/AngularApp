import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrl: './check-form.component.scss',
})
export class CheckFormComponent {
  itemlist = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  selectAll = false;
  selectedMovies: string[] = [];

  toggleSelectAll() {
    this.selectedMovies = this.selectAll ? [...this.itemlist] : [];
  }

  onMovieChange(movie: string, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const checked = inputElement.checked;

    if (checked) {
      this.selectedMovies.push(movie);
    } else {
      this.selectedMovies = this.selectedMovies.filter((m) => m !== movie);
    }
    this.selectAll = this.selectedMovies.length === this.itemlist.length;
  }

  clearAll() {
    this.selectAll = false;
    this.selectedMovies = [];
  }
}
