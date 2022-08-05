import { SeatInput } from './components/common/seats/seatInput';
import { AllSections } from './components/common/sections/generateSections';
import { DefaultLayout } from './components/layouts/defaultLayout';

const App = () => {
  return (
    <DefaultLayout>
      <h1 className="text-7xl border-2 border-black border-solid py-10 px-80">
        {'Theater'}
      </h1>
      <SeatInput />
      <AllSections />
    </DefaultLayout>
  );
};

export default App;
