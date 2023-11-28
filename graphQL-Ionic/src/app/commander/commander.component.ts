import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss'],
})
export class CommanderComponent  implements OnInit {
  constructor(private _router: Router, private modalController: ModalController) {}

  ngOnInit() {
    const fromModal = this._router.getCurrentNavigation()?.extras.state?.['fromModal'];
  
    if (fromModal) {
      this.closeModal();
    }
  }
  
  async closeModal() {
    const modal = await this.modalController.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

}
