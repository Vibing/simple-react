export function createElement({ elementName, attributes, children }) {
  return {
    tag: elementName,
    attrs: attributes,
    children
  };
}
