export const state = () => ({
  items: [
    {id: 1, name: 'Yo', age: 36, isOpen: false },
    {id: 2, name: 'Yea', age: 31, isOpen: false}
  ]
})

export const mutations = {
  setIsOpen(state, itemId) {
    const id = state.items.findIndex(i => i.id === itemId)
    state.items[id].isOpen = !state.items[id].isOpen
  }
}

export const actions = {
  setIsOpen({commit}, itemId) {
    commit('setIsOpen', itemId)
  }
}