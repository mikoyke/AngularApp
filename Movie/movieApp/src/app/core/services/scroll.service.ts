import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollPosition: number = 0;
  saveScrollPosition(position: number): void {
    this.scrollPosition = position;
  }

  getScrollPosition(): number {
    return this.scrollPosition;
  }
}
