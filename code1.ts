import React, { FC } from 'react';

//type props
interface GreetingProps {
  name: string;
}

const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name}!</div>;
};

export default Greeting;
