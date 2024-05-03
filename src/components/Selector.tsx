import { useState } from 'react';

type radioType = {
  id: string;
  label: string;
};

const radioButtons: radioType[] = [
  {
    id: 'hospitalization',
    label: 'Hospitalization',
  },
  {
    id: 'deaths',
    label: 'Deaths',
  },
  {
    id: 'emergency',
    label: ' Emergency Department Visits',
  },
  {
    id: 'test-pos',
    label: 'Test Positivity',
  },
];

const Selector = () => {
  const [selectedRadio, setSelectedRadio] = useState('hospitalization');

  return (
    <div className='bg-[#ebf5f6] p-5'>
      <div className='font-bold text-lg'>View:</div>
      {radioButtons.map(({ id, label }) => (
        <div
          className='flex gap-1'
          key={id}
          onClick={() => setSelectedRadio(id)}
        >
          <input
            type='radio'
            id={id}
            checked={selectedRadio === id}
            onChange={() => {}}
          />
          <label className='text-lg' htmlFor={id}>
            {label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Selector;
