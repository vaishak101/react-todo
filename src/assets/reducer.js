const todoReducer = (state = [], action) => {
  const newId = Date.now();
  if (action.type === 'add_todo') {
    return [{ id: newId, title: action.val }, ...state]
  }
  else if (action.type === 'delete_todo') {
    return state.filter(item => item.id !== action.remvId)
  }
  else if (action.type === 'update_todo') {
    const transformed = state.map((item) => {
      if (item.id === action.searchId) {
        return { id: action.searchId, title: action.newVal }
      }
      else {
        return item
      }
    })
    return transformed;
  }
  return state
}
export { todoReducer }