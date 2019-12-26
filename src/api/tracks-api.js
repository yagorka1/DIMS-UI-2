export const tracksAPI = {
  getAllTracks() {
    let promise = new Promise(function(resolve, reject) {
      const tracks = [];

      for (let i = 0; i < localStorage.length; i++) {
        const storageId = localStorage.key(i);
        if (storageId.includes('trac')) {
          const task = JSON.parse(localStorage.getItem(storageId));
          task.startDate = new Date(task.startDate);
          task.deadlineDate = new Date(task.deadlineDate);

          tracks.push(task);
        }
      }
      // setTimeout(() => resolve(tracks), 3000);
      resolve(tracks);
    });
    return promise;
  },
};
