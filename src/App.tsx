import { DefaultLayout } from './components/layouts/defaultLayout';
import { SeatInput } from './components/seats/seatInput';
import { Auditorium } from './components/sections/auditorium';

const App = () => {
  return (
    <DefaultLayout>
      <h1 className="text-7xl border-2 border-black border-solid py-10 px-40">
        {'Theater'}
      </h1>
      <SeatInput />
      <Auditorium />
    </DefaultLayout>
  );
};

export default App;
