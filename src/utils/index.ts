import * as _ from 'lodash';

export const toggleAttribute = (node: Element, attrName: string) => {
  if (node) {
    const attrValue = node.getAttribute(attrName);

    node.setAttribute(attrName, (attrValue === 'false' || !attrValue) ? 'true' : 'false');
  }
};

/**
 * Dynamically load all action creators
 * @param req - require function
 * @return {Object} all action creators
 */
export const importAll = (): object => {
  const context = require.context('./', true, /\.(ts|tsx)$/);

  return context.keys().reduce((res: object, key: string) => _.merge(res, context(key)), {});
};
