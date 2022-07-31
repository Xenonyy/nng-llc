import { memo } from 'react';

const HeaderComponent = () => {
  return (
    <header className="h-16 w-full bg-lime-400 justify-start items-center flex flex-row">
      <h1 className="text-white font-bold mx-10 drop-shadow-md">
        {'NNG LLC Project'}
      </h1>
    </header>
  );
};

export const Header = memo(HeaderComponent);
