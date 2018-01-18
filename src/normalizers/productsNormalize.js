export default function convertToIdsAndContent(data = []) {
  const ids = [];
  let content = {};

  data.forEach(element => {
    ids.push(element.productID);
    content = {
      ...content,
      [element.productID]: element,
    };
  });

  return {
    ids,
    content,
  };
}
