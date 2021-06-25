export const likeSong = (song) => ({
    type: "FAVOURITE_SONG",
    payload: song
})

export const unLikeSong = (song) => ({
    type: "UNFAVOURITE_SONG",
    payload: song
})

export const addToPlayer = (song) => ({
    type: "ADD_TO_PLAYER",
    payload: song
})