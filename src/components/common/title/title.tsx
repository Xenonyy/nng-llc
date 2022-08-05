import type { FC } from 'react';
import { memo } from 'react';

interface PageTitleTypes {
  title: string;
}
const PageTitleComponent: FC<PageTitleTypes> = ({ title }) => {
  return (
    <h1 className="text-3xl border-2 border-black border-solid py-5 capitalize px-40">
      {title}
    </h1>
  );
};

export const PageTitle = memo(PageTitleComponent);
