const width = 1024;
const height = 768;
const margin = 50;

const dataset = await d3.json(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
);

const barGap = 1;
const barWidth = (width - 2 * margin) / dataset.data.length - barGap;

const svg = d3
  .select('body')
  .append('svg')
  .attr('width', width + margin)
  .attr('height', height + 2 * margin);

const x = d3
  .scaleUtc()
  .domain([new Date(dataset.from_date), new Date(dataset.to_date)])
  .range([margin, width]);
const y = d3
  .scaleLinear()
  .domain([0, d3.max(dataset.data, (d) => d[1])])
  .range([0 + height, margin]);

svg
  .append('g')
  .attr('id', 'x-axis')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(x));
svg
  .append('g')
  .attr('id', 'y-axis')
  .attr('transform', `translate(${margin}, 0)`)
  .call(d3.axisLeft(y));

const tooltip = d3
  .select('body')
  .append('div')
  .attr('id', 'tooltip')
  .attr('class', 'tooltip')
  .style('opacity', 0);

const onMouseOver = (event, d) => {
  tooltip.style('opacity', 1);
  const dataDate = new Date(d[0]);
  tooltip
    .html(
      `<p>${dataDate.getFullYear()} Q${Math.floor(
        (dataDate.getMonth() + 3) / 3
      )}</p><p>$${d[1].toLocaleString()} Billion</p>`
    ) // Display date and GDP value
    .style('left', event.pageX + 5 + 'px') // Position tooltip near cursor
    .style('top', event.pageY - 28 + 'px')
    .attr('data-date', d[0])
    .attr('data-gdp', d[1]);
};

const onMouseOut = () => {
  tooltip.style('opacity', 0); // Hide tooltip
};

const dataGroup = svg
  .append('g')
  .selectAll()
  .data(dataset.data)
  .join('rect')
  .attr('class', 'bar')
  .attr('data-date', (d) => d[0])
  .attr('data-gdp', (d) => d[1])
  .attr('x', (d) => x(new Date(d[0])) + 1)
  .attr('y', (d) => y(d[1]))
  .attr('height', (d) => height - y(d[1]))
  .attr('width', barWidth)
  .on('mouseover', onMouseOver)
  .on('mouseout', onMouseOut);
