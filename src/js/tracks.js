const tracks = [
  {
    taskId: '12345',
    // userId: ,
    trackId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    taskName: 'First',
    trackNode: 'newNote',
    trackDate: new Date(1574150000000),
  },
  {
    taskId: '12346',
    // userId: ,
    trackId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    taskName: 'Second',
    trackNode: 'newNote newNote',
    trackDate: new Date(),
  },
  {
    taskId: '12346',
    // userId: ,
    trackId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    taskName: 'Second ',
    trackNode: 'newNote Second Second Second Second',
    trackDate: new Date(1574060000000),
  },
  {
    taskId: '12345',
    // userId: ,
    trackId: String(
      Math.round(Math.random() * (100000000 + 10000000) - 10000000),
    ),
    taskName: 'First',
    trackNode: 'newNote',
    trackDate: new Date(1574110000000),
  },
];

export default tracks;
