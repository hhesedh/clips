import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visible = false;

  constructor() { }

  // TODO: Substituir por get accessor method
  isModalOpen(): boolean {
    return this.visible;
  }

  toogleModal() {
    this.visible = !this.visible;
  }
}
