function RadarChart({ labels, values }) {
  const size = 360;
  const padding = 60;
  const viewSize = size + padding * 2;
  const center = viewSize / 2;
  const radius = 130;
  const rings = 5;
  const total = Math.min(labels.length, values.length);

  const ringPolygons = Array.from({ length: rings }, (_, ringIndex) => {
    const ringRadius = (radius / rings) * (ringIndex + 1);
    const points = Array.from({ length: total }, (_, i) => {
      const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
      const x = center + Math.cos(angle) * ringRadius;
      const y = center + Math.sin(angle) * ringRadius;
      return `${x},${y}`;
    }).join(" ");
    return <polygon key={`ring-${ringIndex}`} points={points} />;
  });

  const axisLines = Array.from({ length: total }, (_, i) => {
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    return <line key={`axis-${i}`} x1={center} y1={center} x2={x} y2={y} />;
  });

  const pointData = Array.from({ length: total }, (_, i) => {
    const value = Math.max(0, Math.min(values[i], 100));
    const pointRadius = (radius * value) / 100;
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
    const x = center + Math.cos(angle) * pointRadius;
    const y = center + Math.sin(angle) * pointRadius;
    return { x, y, value, label: labels[i] };
  });

  const shapePoints = pointData.map((point) => `${point.x},${point.y}`).join(" ");

  const labelRadius = radius + 36;
  const labelsText = Array.from({ length: total }, (_, i) => {
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
    const x = center + Math.cos(angle) * labelRadius;
    const y = center + Math.sin(angle) * labelRadius;
    const anchor = x < center ? "end" : x > center ? "start" : "middle";
    return (
      <text
        key={`label-${labels[i]}`}
        x={x}
        y={y}
        className="radar-label"
        dominantBaseline="middle"
        textAnchor={anchor}
      >
        {labels[i]}
      </text>
    );
  });

  return (
    <svg viewBox={`0 0 ${viewSize} ${viewSize}`} aria-hidden="true">
      <g className="radar-grid">{ringPolygons}</g>
      <g className="radar-axis">{axisLines}</g>
      <polygon points={shapePoints} className="radar-shape" />
      <g className="radar-points">
        {pointData.map((point) => (
          <circle
            key={`point-${point.label}`}
            cx={point.x}
            cy={point.y}
            r="7"
            className="radar-point"
          >
            <title>{`${point.label}: ${point.value}`}</title>
          </circle>
        ))}
      </g>
      <g className="radar-labels">{labelsText}</g>
    </svg>
  );
}

export default RadarChart;
