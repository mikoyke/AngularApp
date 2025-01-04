import { Component } from '@angular/core';

@Component({
  selector: 'app-change-title',
  templateUrl: './change-title.component.html',
  styleUrl: './change-title.component.css',
})
export class ChangeTitleComponent {
  cards: Card[] = [
    {
      id: 1,
      btncolor: 'blue',
      title: 'title example 1',
      context:
        "For example, when you watch a movie from the very start, you learn about the names of the characters, where the movie is set, and what the plot line is. You can follow the movie's storyline because you've learned about the context.But when someone walks into the movie half-way through, they don't really know what's going on. They don't know the characters' names, the storyline, where it's set, or what the relationships between the characters are. They're confused because they don't understand the context of the movie.",
    },
    {
      id: 2,
      btncolor: 'black',
      title: 'title example 2',
      context:
        "For example, when you watch a movie from the very start, you learn about the names of the characters, where the movie is set, and what the plot line is. You can follow the movie's storyline because you've learned about the context.But when someone walks into the movie half-way through, they don't really know what's going on. They don't know the characters' names, the storyline, where it's set, or what the relationships between the characters are. They're confused because they don't understand the context of the movie.",
    },
    {
      id: 3,
      btncolor: 'red',
      title: 'title example 3',
      context:
        "For example, when you watch a movie from the very start, you learn about the names of the characters, where the movie is set, and what the plot line is. You can follow the movie's storyline because you've learned about the context.But when someone walks into the movie half-way through, they don't really know what's going on. They don't know the characters' names, the storyline, where it's set, or what the relationships between the characters are. They're confused because they don't understand the context of the movie.",
    },
    {
      id: 4,
      btncolor: 'green',
      title: 'title example 4',
      context:
        "For example, when you watch a movie from the very start, you learn about the names of the characters, where the movie is set, and what the plot line is. You can follow the movie's storyline because you've learned about the context.But when someone walks into the movie half-way through, they don't really know what's going on. They don't know the characters' names, the storyline, where it's set, or what the relationships between the characters are. They're confused because they don't understand the context of the movie.",
    },
  ];
  titlecolor = '';
  handleClick(color: string) {
    this.titlecolor = color;
  }
}

export interface Card {
  id: number;
  btncolor: string;
  title: string;
  context: string;
}
