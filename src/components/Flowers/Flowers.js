import { Fragment } from 'react';

import FlowersSummary from './FlowersSummary';
import AvailableFlowers from './AvailableFlowers';

const Flowers = () => {
  return (
    <Fragment>
      <FlowersSummary />
      <AvailableFlowers />
    </Fragment>
  );
};

export default Flowers;
