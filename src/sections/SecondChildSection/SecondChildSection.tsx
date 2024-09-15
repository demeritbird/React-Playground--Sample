interface ChildSectionProps {
  dataFromFirstChild: string;
}

function SecondChildSection(props: ChildSectionProps) {
  const { dataFromFirstChild } = props;

  return <div>secondchild {dataFromFirstChild}</div>;
}

export default SecondChildSection;
