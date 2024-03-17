import { useState } from 'react';

import './App.css';
import { rectSortingStrategy } from '@dnd-kit/sortable';
import { MultipleContainers } from './components/MultipleContainers';
import { UniqueIdentifier } from '@dnd-kit/core';

function App() {

  type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;

  const [initItems, setInitItems] = useState<Items>(() => {
    return { "Shelter": [ "A1", "A2", "A3" ], "Cooking": [ "B1", "B2", "B3" ], "Food": [ "C1", "C2", "C3" ], "D": [ "D1", "D2", "D3" ] }
  });


  return (
    <>
      {/* <p className="">{JSON.stringify(initItems, null, 2)}</p> */}
      <div className='bg-slate-300 dark:bg-slate-800'>
        <MultipleContainers
          initialItems={initItems}
          strategy={rectSortingStrategy}
          vertical
        />
      </div>
    </>
  );

}

export default App;
