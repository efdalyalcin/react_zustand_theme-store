function NonRelatedComponent() {
  console.log('PureComponent rendered');

  return (
    <div
      style={{
        marginTop: '20px',
        padding: '10px 20px',
        border: '1px dotted black',
      }}
    >
      <p>Pure component</p>
      <p>This component only renders these two strings</p>
    </div>
  );
}

export default NonRelatedComponent;
