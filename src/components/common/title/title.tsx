import type { FC } from 'react';
import { memo } from 'react';

interface PageTitleTypes {
  title: string;
}
const PageTitleComponent: FC<PageTitleTypes> = ({ title }) => {
  return (
    <h1 className="text-7xl border-2 border-black border-solid py-10 capitalize px-80">
      {title}
    </h1>
  );
};

export const PageTitle = memo(PageTitleComponent);
