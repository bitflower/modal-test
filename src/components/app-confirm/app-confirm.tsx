import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-confirm',
  styleUrl: 'app-confirm.css',
  shadow: true,
})
export class AppConfirm {
  render() {
    return (
      <Host>
        <p>
          I should have a <code>box-shadow</code>.
        </p>
        <p>And my parent modal should have been covered with my backdrop.</p>
      </Host>
    );
  }
}
