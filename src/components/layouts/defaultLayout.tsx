import type { FC, ReactNode } from 'react';

import { Footer } from '../common/Footer/footer';
import { Header } from '../common/Header/header';

interface DefaultLayoutTypes {
  children: ReactNode | ReactNode[];
}

export const DefaultLayout: FC<DefaultLayoutTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center flex-col p-10">
        {children}
      </main>
      <Footer />
    </>
  );
};
