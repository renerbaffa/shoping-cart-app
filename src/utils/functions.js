export const INITIAL_STATE = {
  ids: [],
  content: {},
};

export function filterByText(data = INITIAL_STATE, text = '') {
  const ids = [];
  let content = {};

  data.ids.forEach(id => {
    const element = data.content[id];
    if (element.name.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
      ids.push(id);
      content = {
        ...content,
        [id]: element,
      };
    }
  });

  return {
    ids,
    content,
  };
}
