export const toggleAttribute = (node: Element, attrName: string) => {
  if (node) {
    const attrValue = node.getAttribute(attrName);

    node.setAttribute(attrName, (attrValue === 'false' || !attrValue) ? 'true' : 'false');
  }
};
