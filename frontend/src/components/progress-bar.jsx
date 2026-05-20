function ProgressBar({ percentage }) {
  return (
    <label>
      Progression
      <progress value={percentage} max="100" />
    </label>
  );
}

export default ProgressBar;
