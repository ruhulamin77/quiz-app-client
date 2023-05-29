/* eslint-disable react/prop-types */
import Questions from './Questions';

const Analysis = ({ answers }) => {
  return (
    <div>
      <h2 style={{ marginTop: '25px' }}>Answers Analysis</h2>
      <Questions answers={answers} />
    </div>
  );
};

export default Analysis;
