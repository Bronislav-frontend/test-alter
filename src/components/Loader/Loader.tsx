import { InfinitySpin } from 'react-loader-spinner';

import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin width="200" color="aqua" />
    </div>
  );
};

export default Loader;
