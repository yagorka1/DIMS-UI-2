const setDataInStorage = (data, nameOfData) => {
  const mas = [];

  for (let i = 0; i < localStorage.length; i++) {
    const storageId = localStorage.key(i);
    let a = storageId.slice(5, storageId.length);
    mas.push(Number(a));
  }

  const max = Math.max.apply(null, mas) + 1;

  const storageId = nameOfData + '_' + max;
  localStorage.setItem(storageId, JSON.stringify(data));
  alert(`${nameOfData} has been added`);
};

const setChangeDataInStorage = (data, id, nameOfData) => {
  const length = localStorage.length;
  for (let i = 0; i < length; i++) {
    const storageId = localStorage.key(i);

    if (JSON.parse(localStorage.getItem(storageId)) !== null) {
      if (data[id] === JSON.parse(localStorage.getItem(storageId))[id]) {
        localStorage.removeItem(storageId);
        localStorage.setItem(storageId, JSON.stringify(data));
        break;
      }
    }
  }
};

const deleteDataFromStorage = (id, nameOfData) => {
  for (let i = 0; i < localStorage.length; i++) {
    const storageId = localStorage.key(i);
    if (JSON.parse(localStorage.getItem(storageId)) !== null) {
      if (id === JSON.parse(localStorage.getItem(storageId)).trackId) {
        localStorage.removeItem(storageId);
      }
    }
  }
};

const deleteDataFromStorage1 = (id, nameOfData) => {
  for (let i = 0; i < localStorage.length; i++) {
    const storageId = localStorage.key(i);
    if (JSON.parse(localStorage.getItem(storageId)) !== null) {
      if (id === JSON.parse(localStorage.getItem(storageId)).email) {
        localStorage.removeItem(storageId);
      }
    }
  }
};

export {
  setDataInStorage,
  setChangeDataInStorage,
  deleteDataFromStorage,
  deleteDataFromStorage1,
};
