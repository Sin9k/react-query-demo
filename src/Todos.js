import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getTodos } from './getTodos';

export const Todos = () => {
  const [page, setPage] = useState(0);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData', page],
    queryFn: () => getTodos(page),
  });

  console.log('data = ', data);
  console.log('isPending = ', isPending);
  console.log('isFetching = ', isFetching, '\n');

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <ul>
        {data.todos.map((item) => {
          return <li key={item.value}>{item.label}</li>;
        })}
      </ul>
      {page > 0 && (
        <button onClick={() => setPage((old) => Math.max(old - 1, 0))}>
          prev
        </button>
      )}
      <span>&nbsp;{data.currentPage}&nbsp;</span>
      {page < data.totalPages && (
        <button onClick={() => setPage((old) => old + 1)}>next</button>
      )}
    </>
  );
};
