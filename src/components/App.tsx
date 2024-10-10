import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import uzumakiPng from '@/assets/uzumaki.png';
import bg from '@/assets/bg.jpg';
import SvgLight from '@/assets/light.svg';

function TODO(a: number) {
  console.log('TOFOFUNCTION');
}

export default function App() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    // // TODO('1');

    // if (__PLATFORM__ === 'desktop') {
    //   return <div>IS DESKTOP PLATFORM</div>
    // }

    // if (__PLATFORM__ === 'mobile') {
    //   return <div>IS MOBILE PLATFORM</div>
    // }

    // if (__ENV__ === 'development') {
    //   console.log('Is development Environment');
    // }

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
        <div>
            <img src={uzumakiPng} alt="uzumaki" width={50} height={50} style={{objectFit: 'cover'}}/>
            <img src={bg} alt="bg" style={{width: 50, objectFit: 'cover' }}/>
        </div>
        <div className="?">
          <SvgLight width="50" height="50"/>
        </div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link> 
        <br />
        <Link to="/Shop">Shop</Link> 
        <h1 className={classes.title}>{count}</h1>
        <button className={classes.button} onClick={increment}>+</button>
        <Outlet/> 
    </div>
  )
}
