function render(vnode, container) {
  const element = _createDomFromVnode(vnode);
}

function _createDomFromVnode(vnode) {
  if (vnode == null || typeof vnode === 'boolean') vnode = '';

  if (typeof vnode === 'string' || typeof vnode === 'number') {
  }
}
