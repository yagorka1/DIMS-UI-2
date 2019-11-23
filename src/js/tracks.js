const getTracks = (email) => {
  const userTracks = [];
  for (let i = 0; i < localStorage.length; i++) {
    const storageId = 'track_' + i;

    if (localStorage.getItem(storageId) !== null) {
      if (email === JSON.parse(localStorage.getItem(storageId)).userId) {
        const track = JSON.parse(localStorage.getItem(storageId));
        track.trackDate = new Date(track.trackDate);

        userTracks.push(track);
      }
    }
  }
  return userTracks;
};

export { getTracks };
