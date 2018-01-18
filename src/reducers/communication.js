export const INITIAL_STATE = {};

export default function communication(state = INITIAL_STATE, action = {}) {
  if (action.meta) {
    if (action.meta.isLoading) {
      return {
        areProjectsLoading: action.meta.isLoading,
      };
    }
  }

  return state;
}

