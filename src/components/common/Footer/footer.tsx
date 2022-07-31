import { memo } from 'react';

const FooterComponent = () => {
  return (
    <footer className="h-16 w-full bg-lime-400 justify-around items-center flex flex-row">
      <h1 className="text-white font-bold mx-10 drop-shadow-md">
        {'NNG LLC Project'}
      </h1>
      <span className="text-white font-bold drop-shadow-md">
        {'Version: 0.0.1'}
      </span>
    </footer>
  );
};

export const Footer = memo(FooterComponent);
