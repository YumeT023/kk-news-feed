const CreditShape = ({ children, cls }) => <div className={`shape credits-shape ${cls}`}>{children}</div>;

const Line = ({ children, action }) => {
  const content = `${children} [${action}]`;
  return <div className='line-credit'>{content}</div>;
};

export const Credit = () => (
  <div className='content-credits'>
    <div className='credits'>
      <CreditShape>
        <CreditShape klass='shape-shadow'>
          <h3 className='credits-title'>Credits</h3>
          <Line action='axios'>Tokimahery Ramarozaka</Line>
          <Line action='B. practice'>Yume Saiko</Line>
        </CreditShape>
      </CreditShape>
    </div>
  </div>
);
