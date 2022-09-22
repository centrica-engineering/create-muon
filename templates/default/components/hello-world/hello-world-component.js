import { MuonElement, html } from '@muonic/muon';
import styles from './hello-world-styles.css';

/**
 * @element hello-world
 * @description A simple web component that says hello.
 */
export class HelloWorld extends MuonElement {
  static get properties() {
    return {
      name: { type: String }
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
