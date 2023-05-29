/* eslint-disable react/prop-types */

const ProgressBar = ({ progress }) => {
  return (
    <div
      className="progress-bar"
      title={`${progress.toPrecision(3)} % completed`}
    >
      <div
        className="progress-bar-fill"
        data-progress={progress}
        // data-tooltip={`${progress} % completed`}
        style={{ width: `${progress.toFixed(2)}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
