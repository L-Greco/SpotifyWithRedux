import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FAVOURITE_SONG":

            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }


        case "UNFAVOURITE_SONG":

            let updatedFavourites = state.favourites.filter(song => song.id !== action.payload.id)
            return {
                ...state,
                favourites: updatedFavourites
            }

        case "ADD_TO_PLAYER":
            return {
                ...state,
                player: action.payload
            }
        default:
            return state
    }
}

export default mainReducer