// packages/example-app/index.js
import { createComponent } from '../ui-library';

function template(state) {
  return h('div', [
    h('h1', state.count),
    h('button', { on: { click: handleClick } }, 'Add'),
  ]);
}

function mountCallback() {
  console.log('Component is mounted');
}

function updateCallback(state) {
  console.log('State is updated:', state);
}

function handleClick() {
  updateState({ count: state.count + 1 });
}

const initialState = { count: 0 };
const { updateState } = createComponent(template, initialState, mountCallback, updateCallback);
