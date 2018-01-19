export const INITIAL_STATE = {
  ids: [],
  content: {},
};

export function update(state = INITIAL_STATE, payload = {}) {
  const {
    data,
    id,
  } = payload;

  // handling the case where data is "false" (for isTyping flag)
  if (id && (data || typeof data === 'boolean')) {
    return {
      ids: state.ids.includes(id) ? state.ids : [...state.ids, id],
      content: {
        ...state.content,
        [id]: data,
      },
    };
  }

  return state;
}

export function remove(state = INITIAL_STATE, payload = {}) {
  const id = payload.id;

  if (!id) {
    return state;
  }

  const { ids, content } = state;
  const newIds = ids.filter(itemId => itemId !== id);

  return {
    ids: newIds,
    content: newIds.reduce((prev, key) => ({
      ...prev,
      [key]: content[key],
    }), {}),
  };
}
