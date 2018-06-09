import render from './render';

export default {
  render: function(container, vnode) {
    container.innerHTML = '';
    render(vnode, container);
  }
};
