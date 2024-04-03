const todos = [
  {
    label: 'first',
    value: 1,
  },
  {
    label: 'second',
    value: 2,
  },
  {
    label: 'third',
    value: 3,
  },
  {
    label: 'fourth',
    value: 4,
  },
  {
    label: 'fifth',
    value: 5,
  },
  {
    label: 'six',
    value: 6,
  },
  {
    label: 'seven',
    value: 7,
  },
  {
    label: 'eigth',
    value: 8,
  },
  {
    label: 'nine',
    value: 9,
  },
  {
    label: 'ten',
    value: 10,
  },
  {
    label: 'eleven',
    value: 11,
  },
];

export const getTodos = async (page) => {
  console.log('START_CALL getTodos');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('END_CALL getTodos');
  return {
    todos: todos.slice(page * 5, (page + 1) * 5),
    totalPages: Math.floor(todos.length / 5),
    currentPage: page,
  };
};
