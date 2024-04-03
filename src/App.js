import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Todos } from './Todos';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Todos />
      </div>
    </QueryClientProvider>
  );
}

export default App;
