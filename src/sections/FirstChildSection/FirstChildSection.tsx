import { forwardRef, Fragment, useImperativeHandle, useRef } from 'react';
import useSampleContext from '../../contexts/SampleContext';
interface ChildSectionProps {
  description: string;
  sendDataToParent: (data: string) => void;
  data: string;
}
export interface ChildSectionRef {
  focusNow: () => void;
}

const FirstChildSection = forwardRef<ChildSectionRef, ChildSectionProps>((props, ref) => {
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

  const { sendDataToParent, data: childData } = props;
  // const [childData, setChildData] = useState('');

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

      {/* lifting state up */}
      <h4>lifting state up</h4>
      <input
        type='text'
        value={childData} // Controlled by the parent
        onChange={(e) => sendDataToParent(e.target.value)} // Updates parent's state
      />
      {/* <button onClick={() => sendDataToParent(childData)}>Send Data to Parent</button> */}
    </Fragment>
  );
});

export default FirstChildSection;
