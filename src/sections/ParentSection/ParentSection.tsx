import { useRef, useState } from 'react';
import FirstChildSection from '../FirstChildSection';
import { ChildSectionRef } from '../FirstChildSection/FirstChildSection';
import Section from '../../components/Section';
import SecondChildSection from '../SecondChildSection';

function ParentSection() {
  const title: string = 'Parent Section';

  const currentRef = useRef<HTMLInputElement | null>(null);

  // Single Page Ref
  function onChangeCurrentRef() {
    if (currentRef.current) {
      console.log(currentRef.current.value);
    }
  }

  // Forward Ref
  const childRef = useRef<ChildSectionRef>(null);
  const handleFocus = () => {
    if (childRef.current) {
      childRef.current.focusNow();
    }
  };

  // Lifting States
  const [dataFromChild, setDataFromChild] = useState('');

  // Function to handle data passed from child
  const handleChildData = (data: string) => {
    setDataFromChild(data);
  };

  return (
    <Section title={title}>
      {/* Single Page Ref */}
      <h4>Single Page Ref</h4>
      <input type='text' ref={currentRef} onChange={onChangeCurrentRef}></input>

      {/*Forward Ref */}
      <h4>Forward Ref</h4>
      <FirstChildSection
        ref={childRef}
        description='ref description'
        sendDataToParent={handleChildData}
        data={dataFromChild}
      />
      <button onClick={handleFocus}>Focus on Input</button>

      <SecondChildSection dataFromFirstChild={dataFromChild} />
    </Section>
  );
}

export default ParentSection;
