import { useContext } from 'react';
import SampleContext from '../hooks/useSampleContext';

const useSampleContext = () => {
  return useContext(SampleContext);
};

export default useSampleContext;
