import { createContext, useState } from 'react';

interface SampleContextOptions {
  sampleValue: boolean;
  setSampleValue: (prevValue: boolean | ((prevValue: boolean) => boolean)) => void;
}
const SampleContext = createContext<SampleContextOptions>({
  sampleValue: false,
  setSampleValue: () => {},
});

interface SampleContextProviderProps {
  children?: React.ReactNode;
}
export function ContextProvider(props: SampleContextProviderProps) {
  const [value, setValue] = useState<boolean>(false);

  const sampleContextValue: SampleContextOptions = {
    sampleValue: value,
    setSampleValue: setValue,
  };

  return (
    <SampleContext.Provider value={sampleContextValue}>
      {props.children}
    </SampleContext.Provider>
  );
}

export default SampleContext;
