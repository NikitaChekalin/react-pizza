const SET_SORT_BY = 'SET_SORT_BY'
const SET_CATEGORY = 'SET_CATEGORY'

const initialState = {
  result: [],
}
export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload }
    case SET_CATEGORY:
      return { ...state, category: action.payload }
    default:
      return state
  }
}

export const filterActionCreator = (name) => ({ type: 'SET_SORT_BY', payload: name })
export const setCategoryActionCreator = (category) => ({ type: 'SET_CATEGORY', payload: category })
