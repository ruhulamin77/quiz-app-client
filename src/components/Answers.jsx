/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import Checkbox from './Checkbox';

const Answers = ({ options = [], changeHandler, input }) => {
  return (
    <div>
      {options?.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              className={'answers'}
              onChange={(e) => changeHandler(e, index)}
              text={option?.title}
              checked={option.checked}
              value={index}
            />
          ) : (
            <Checkbox
              className={`answers ${
                option.correct ? 'correct' : option.checked ? 'wrong' : null
              }  `}
              key={index}
              text={option?.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
