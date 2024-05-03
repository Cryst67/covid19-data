import DataDisplay from './components/DataDisplay';
import Selector from './components/Selector';

function App() {
  return (
    <div className='px-5 flex justify-center'>
      <div className='w-[70%] flex justify-center flex-col gap-5'>
        <DataDisplay />
        <Selector />
      </div>
    </div>
  );
}

export default App;
