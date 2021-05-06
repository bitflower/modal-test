import { modalController } from '@ionic/core';
import { Component, Prop, State, h } from '@stencil/core';

import { sayHello } from '../../helpers/utils';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
})
export class AppProfile {
  @State() state = false;
  @Prop() name: string;

  formattedName(): string {
    if (this.name) {
      return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
    }
    return '';
  }

  private showModal = async () => {
    const modal = await modalController.create({
      component: 'app-confirm',
      cssClass: 'small-modal',
    });
    await modal.present();
  };

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Profile: {this.name}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          {sayHello()}! My name is {this.formattedName()}. My name was passed in through a route param!
        </p>

        <ion-item>
          <ion-label>Setting ({this.state.toString()})</ion-label>
          <ion-toggle checked={this.state} onIonChange={ev => (this.state = ev.detail.checked)} />
        </ion-item>

        <ion-button expand="block" color="danger" onClick={this.showModal}>
          Delete
        </ion-button>
      </ion-content>,
    ];
  }
}
