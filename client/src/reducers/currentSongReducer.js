export const currentSongReducer = (state = {}, action) => {
    switch(action.type) {
        case "FETCH_CURRENT_SONG_SUCCESS":
            return {
                ...state,
                currentSong: action.currentSong,
                fetchUserError: false
            }
        case "FETCH_CURRENT_SONG_EROR":
            return {
                ...state,
                fetchUserError: true
            }
        default:
            return state
    }
}

export default currentSongReducer;