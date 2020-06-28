
export const fetchCurrentSongSuccess = (currentSong) => {
    return {
        type: 'FETCH_CURRENT_SONG_SUCCESS',
        currentSong
    }
}

export const fetchCurrentSongError = () => {
    return {
        type: 'FETCH_CURRENT_SONG_ERROR'
    }
}

export const getCurrentSongInfo = (accessToken) => {
    return dispatch => {
        const request = {
            method: 'GET',
            headers: new Headers({
              'Authorization': 'Bearer ' + accessToken
            })
          };
        fetch('/player/currentSong', request).then(res => {
            return res.json()
        }).then(res => {
            dispatch(fetchCurrentSongSuccess(res))
        }).catch(error => {
            dispatch(fetchCurrentSongError())
        });
    }
}