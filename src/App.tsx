import { useState } from 'react';

import './App.css';
import { rectSortingStrategy } from '@dnd-kit/sortable';
import { MultipleContainers } from './components/MultipleContainers';
import { createRange } from './utils/createRange';
import { UniqueIdentifier } from '@dnd-kit/core';

function App() {
  type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;

  const [items, setItems] = useState<Items>(() => {
    return {
      A: createRange(3, (index) => `A${index + 1}`),
      B: createRange(3, (index) => `B${index + 1}`),
      C: createRange(3, (index) => `C${index + 1}`),
      D: createRange(3, (index) => `D${index + 1}`),
    };
  });

  return (
    <>
      <p className="">{JSON.stringify(items, null, 2)}</p>
      <div>
        <MultipleContainers
          items={items}
          itemCount={5}
          strategy={rectSortingStrategy}
          vertical
        />
      </div>
    </>
  );
}

export default App;
