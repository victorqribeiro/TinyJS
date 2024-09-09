(() => {
  const assignDeep = (elm, props) => Object.entries(props).forEach(([key, value]) =>
    typeof value === 'object' ? assignDeep(elm[key], value) : Object.assign(elm, {[key]: value}))

  const tagNames = [
    'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base',
    'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 
    'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 
    'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset',
    'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 
    'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins',
    'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 
    'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 
    'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 
    'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 
    'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 
    'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 
    'ul', 'var', 'video', 'wbr'
  ].forEach(tag => window[tag] = function(...args) {
    const props = typeof args[0] == 'object' ? args.shift() : null
    const elm = document.createElement(tag)
    props && assignDeep(elm, props)
    elm.append(...args.map(a => typeof a == 'string' ? document.createTextNode(a) : a))
    return elm
  })
  window['$'] = elm => document.querySelector(elm)
  window['$$'] = elm => Array.from(document.querySelectorAll(elm))
  window['$all'] = elm => Array.from(document.querySelectorAll(elm))
})()
