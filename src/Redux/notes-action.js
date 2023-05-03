export const notesAction = (name, notes) => {
  return {
    type: name,
    payload: notes,
  };
};
