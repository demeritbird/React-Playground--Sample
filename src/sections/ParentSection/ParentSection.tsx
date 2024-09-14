import { useRef } from 'react';
import ChildSection from '../ChildSection';
import { ChildSectionRef } from '../ChildSection/ChildSection';
import Section from '../../components/Section';

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

  return (
    <Section title={title}>
      {/* Single Page Ref */}
      <h4>Single Page Ref</h4>
      <input type='text' ref={currentRef} onChange={onChangeCurrentRef}></input>

      {/*Forward Ref */}
      <h4>Forward Ref</h4>
      <ChildSection ref={childRef} description='ref description' />
      <button onClick={handleFocus}>Focus on Input</button>
    </Section>
  );
}

export default ParentSection;
