import "./progress-bar.css";

function ProgressBar({ percentage }) {
  return <progress value={percentage} max="100" />;
}

export default ProgressBar;
