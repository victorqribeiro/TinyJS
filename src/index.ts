(() => {
  const assignDeep = (elm: HTMLElement, props: Record<string, any>): void => {
    Object.entries(props).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        assignDeep(elm[key as keyof HTMLElement] as HTMLElement, value);
      } else {
        Object.assign(elm, { [key]: value });
      }
    });
  };

  const tags = [
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
  ];

  tags.forEach(tag => {
    (window as any)[tag] = (...args: any[]) => {
      const props = typeof args[0] === 'object' && !(args[0] instanceof Node) ? args.shift() : {};
      const elm = document.createElement(tag);
      assignDeep(elm, props);
      elm.append(...args.map(a => typeof a === 'string' ? document.createTextNode(a) : a));
      return elm;
    };
  });

  const $ = (selector: string) => document.querySelector(selector);
  const $$ = (selector: string) => Array.from(document.querySelectorAll(selector));
  const createState = (state: Record<string, any>) => {
    const appState = { 
      ...state, 
      _updates: Object.fromEntries(Object.keys(state).map(s => [s, [] as Function[]])),
      _update: (s: string) => appState._updates[s].forEach((u: Function) => u()),
      addUpdate: (s: string, u: Function) => appState._updates[s].push(u)
    };
    return new Proxy(appState, {
      set(o, p, v) {
        o[p as keyof typeof o] = v;
        o._update(p as string);
        return true;
      }
    });
  };

  Object.assign(window, { $, $$, createState });
})();
