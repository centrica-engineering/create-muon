import { MuonElement, html } from '@muonic/library';
import styles from './hello-world-component.css';

export class HelloWorld extends MuonElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.name = 'World';
  }

  render() {
    return html`
      <h1>Hello ${this.name}!</h1>
    `;
  }
}
