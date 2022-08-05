import type { FC } from 'react';
import { memo } from 'react';

import { AllSeatInputs } from '../components/allSeatInputs';
import { PageTitle } from '../components/common/title/title';
import { AllSections } from '../components/generateSections';

const TheaterPageComponent: FC = () => {
  return (
    <>
      <PageTitle title="theater" />
      <AllSeatInputs />
      <AllSections />
    </>
  );
};

export const TheaterPage = memo(TheaterPageComponent);
