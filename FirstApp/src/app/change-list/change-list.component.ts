import { Component } from "@angular/core";

@Component({
  selector: "app-change-list",
  templateUrl: "./change-list.component.html",
  styleUrl: "./change-list.component.css",
})
export class ChangeListComponent {
  cards: Card[] = [
    {
      id: 1,
      name: "James",
      color: "red",
      content:
        "Welcome to Angular!This tutorial introduces you to the essentials of Angular by walking you through building an e-commerce site with a catalog, shopping cart, and check-out form.To help you get started right away, this tutorial uses a ready-made application that you can examine and modify interactively on StackBlitz —without having to set up a local work environment. StackBlitz is a browser-based development environment where you can create, save, and share projects using a variety of technologies.",
    },
    {
      id: 2,
      name: "Will Kenny",
      color: "green",
      content:
        "As a platform, Angular includes:A component-based framework for building scalable web applicationsA collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.A suite of developer tools to help you develop, build, test, and update your code.With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.",
    },
    {
      id: 3,
      name: "Beth Williams",
      color: "blue",
      content:
        "Components are the fundamental building block for creating applications in Angular. By leveraging component architecture, Angular aims to provide structure for organizing your project into manageable, well organized parts with clear responsibilities so that your code is maintainable and scalable.",
    },
    {
      id: 4,
      name: "Rev Shawn",
      color: "black",
      content:
        "Every component has an HTML template that defines what that component renders to the DOM.HTML templates can be defined as an inline template within the TypeScript class, or in separate files with the templateUrl property. To learn more, check out the docs on defining component templates.Within this document, the examples will use inline templates for more concise code snippets.",
    },
  ];
  selectedCard: Card = this.cards[0];
  handleClick(card: Card) {
    this.selectedCard = card;
  }
}
export interface Card {
  id: number;
  name: string;
  color: string;
  content: string;
}
