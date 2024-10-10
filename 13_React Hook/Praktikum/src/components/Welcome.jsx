import { useEffect } from 'react';

const Welcome = () => {
  useEffect(() => {
    alert('Welcome!');

    return () => {
      console.log('Komponen di-unmount');
    };
  }, []);

  return (
    <></>
  )
}

export default Welcome;
