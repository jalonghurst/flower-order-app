import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import flowersImage from '../../assets/flowers.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactFlowers</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={flowersImage} alt='A range of beeautiful flowers!' />
      </div>
    </Fragment>
  );
};

export default Header;
