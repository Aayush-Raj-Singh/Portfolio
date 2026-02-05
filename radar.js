const radarContainers = document.querySelectorAll("[data-radar]");

radarContainers.forEach((container) => {
  const labels = (container.dataset.labels || "").split("|").filter(Boolean);
  const values = (container.dataset.values || "").split("|").map((value) => Number(value.trim()));

  if (labels.length === 0 || values.length === 0) {
    return;
  }

  const size = 360;
  const padding = 60;
  const viewSize = size + padding * 2;
  const center = viewSize / 2;
  const radius = 130;
  const rings = 5;
  const total = Math.min(labels.length, values.length);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${viewSize} ${viewSize}`);
  svg.setAttribute("aria-hidden", "true");

  const gridGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  gridGroup.setAttribute("class", "radar-grid");

  for (let ring = 1; ring <= rings; ring += 1) {
    const ringRadius = (radius / rings) * ring;
    const points = [];
    for (let i = 0; i < total; i += 1) {
      const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
      const x = center + Math.cos(angle) * ringRadius;
      const y = center + Math.sin(angle) * ringRadius;
      points.push(`${x},${y}`);
    }
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", points.join(" "));
    gridGroup.appendChild(polygon);
  }

  const axisGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  axisGroup.setAttribute("class", "radar-axis");

  for (let i = 0; i < total; i += 1) {
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", center);
    line.setAttribute("y1", center);
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    axisGroup.appendChild(line);
  }

  const dataPoints = [];
  const pointData = [];
  for (let i = 0; i < total; i += 1) {
    const value = Math.max(0, Math.min(values[i], 100));
    const pointRadius = (radius * value) / 100;
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
    const x = center + Math.cos(angle) * pointRadius;
    const y = center + Math.sin(angle) * pointRadius;
    dataPoints.push(`${x},${y}`);
    pointData.push({ x, y, value, label: labels[i] });
  }

  const dataPolygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  dataPolygon.setAttribute("points", dataPoints.join(" "));
  dataPolygon.setAttribute("class", "radar-shape");

  const pointGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  pointGroup.setAttribute("class", "radar-points");
  pointData.forEach((point) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", point.x);
    circle.setAttribute("cy", point.y);
    circle.setAttribute("r", "7");
    circle.setAttribute("class", "radar-point");
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = `${point.label}: ${point.value}`;
    circle.appendChild(title);
    pointGroup.appendChild(circle);
  });

  const labelGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  labelGroup.setAttribute("class", "radar-labels");

  const labelRadius = radius + 36;
  for (let i = 0; i < total; i += 1) {
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
    const x = center + Math.cos(angle) * labelRadius;
    const y = center + Math.sin(angle) * labelRadius;
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("class", "radar-label");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("text-anchor", x < center ? "end" : x > center ? "start" : "middle");
    text.textContent = labels[i];
    labelGroup.appendChild(text);
  }

  svg.appendChild(gridGroup);
  svg.appendChild(axisGroup);
  svg.appendChild(dataPolygon);
  svg.appendChild(pointGroup);
  svg.appendChild(labelGroup);

  container.appendChild(svg);
});
