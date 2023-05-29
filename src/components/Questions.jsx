import Answers from './Answers';

const Questions = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div key={index} style={{ margin: '25px 0px' }}>
      <h4 style={{ color: '#ccc' }}>{answer.title}</h4>
      <Answers input={false} options={answer.options} />
    </div>
  ));
};

export default Questions;
