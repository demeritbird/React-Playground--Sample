import { forwardRef, Fragment, useImperativeHandle, useRef } from 'react';
import useSampleContext from '../../contexts/SampleContext';
interface ChildSectionProps {
  description: string;
}
export interface ChildSectionRef {
  focusNow: () => void;
}

const ChildSection = forwardRef<ChildSectionRef, ChildSectionProps>((props, ref) => {
  // useContext
  const { sampleValue, setSampleValue } = useSampleContext();

  // Forward Ref
  const inputRef = useRef<HTMLInputElement | null>(null);
  function activate() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  useImperativeHandle(ref, () => ({
    focusNow: activate, // Focus method is exposed to parent via ref
  }));

  return (
    <Fragment>
      <div>
        <p>{props.description || 'none'}</p>

        {/* Parent Child Ref */}
        <input type='text' ref={inputRef} />
      </div>

      {/* useContext */}
      <button
        onClick={() => {
          setSampleValue(!sampleValue);
        }}
      >
        change context
      </button>
    </Fragment>
  );
});

export default ChildSection;
