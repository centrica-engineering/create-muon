import { HelloWorld } from './hello-world-component.js';
import setup from '@muonic/muon/storybook/stories';

const details = setup('hello-world', HelloWorld);

export default details.defaultValues;

export const Standard = (args) => details.template(args);
Standard.args = { name: 'World' };
