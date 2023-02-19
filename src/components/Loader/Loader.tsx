import { Rings } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  return (
    <Rings color="aqua" height={250} width={250} wrapperClass={'loader'} />
  );
};

export default Loader;
