const RenderWeatherDot = (props) => {
  const { cx, cy, payload } = props;

  if (!payload) return null;

  return (
    <g>
      <image
        x={cx - 20}
        y={cy - 45} // Offset so icon sits above the line
        width={40}
        height={40}
        href={payload.iconUrl}
      />
    </g>
  );
};

export default RenderWeatherDot;
