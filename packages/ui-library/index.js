// packages/snabbdom-ui/index.js
import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h';

const patch = init([]);

export function createComponent(template, initialState, mountCallback, updateCallback) {
  let state = initialState;

  function updateState(newState) {
    state = newState;
    updateCallback(state);
    patch(document.getElementById('app'), template(state));
  }

  const vnode = template(state);
  const elm = patch(document.getElementById('app'), vnode);

  mountCallback();

  return { updateState };
}
