const React = {
  createElement: function({ elementName, attributes, children }) {
    return {
      tag: elementName,
      attrs: attributes,
      children
    };
  }
};

const ReactDOM = {
  render: function(vnode, container) {
    container.innerHTML = '';
    render(vnode, container);
  }
};

function render(vnode, container) {
  const dom = createDom(vnode); //将vnode转成真实DOM
  container.appendChild(dom);
}

function createDom(vnode) {
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') {
    vnode = '';
  }

  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(String(vnode));
  }

  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    for (let key in vnode.attrs) {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
    }
  }

  vnode.children.forEach(child => render(child, dom));
  return dom;
}

function setAttribute(dom, key, value) {
  //className
  if (key === 'className') {
    dom.setAttribute('class', value);

    //事件
  } else if (/on\w+/.test(key)) {
    key = key.toLowerCase();
    dom[key] = value || '';
    //style
  } else if (key === 'style') {
    if (typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (typeof value === 'object') {
      // {width:'',height:20}
      for (let name in value) {
        dom.style[name] =
          typeof value[name] === 'number' ? value[name] + 'px' : value[name];
      }
    }

    //其他
  } else {
    dom.setAttribute(key, value);
  }
}

const element = (
  <div
    className="Hello"
    onClick={() => alert(1)}
    style={{ color: 'red', fontSize: 30 }}
  >
    Hello <span style={{ color: 'blue' }}>javascript!</span>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
