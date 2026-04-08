# Visualize Data with a Bar Chart

[![Deploy to GitHub Pages](https://github.com/BenOnSocial/visualize-data-with-a-bar-chart/actions/workflows/deploy.yml/badge.svg)](https://github.com/BenOnSocial/visualize-data-with-a-bar-chart/actions/workflows/deploy.yml)

This project is part of my [Data Visualization V8 certification from freeCodeCamp](https://www.freecodecamp.org/certification/benonsocial/data-visualization).

https://github.com/user-attachments/assets/24af8d24-822f-49a9-ab6a-b6eb10e59792

## Objective

Build an app that is functionally similar to this: https://bar-chart.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://d3js.org/d3-axis. Required DOM elements are queried on the moment of each test. If you use a front-end framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

## User Stories

1. My chart should have a title with a corresponding `id="title"`.

2. My chart should have a `g` element x-axis with a corresponding `id="x-axis"`.

3. My chart should have a `g` element y-axis with a corresponding `id="y-axis"`.

4. Both axes should contain multiple tick labels, each with a corresponding `class="tick"`.

5. My chart should have a `rect` element for each data point with a corresponding `class="bar"` displaying the data.

6. Each `.bar` should have the properties `data-date` and `data-gdp` containing `date` and `GDP` values.

7. The `.bar` elements' `data-date` properties should match the order of the provided data.

8. The `.bar` elements' `data-gdp` properties should match the order of the provided data.

9. Each `.bar` element's height should accurately represent the data's corresponding `GDP`.

10. The `data-date` attribute and its corresponding `.bar` element should align with the corresponding value on the x-axis.

11. The `data-gdp` attribute and its corresponding `.bar` element should align with the corresponding value on the y-axis.

12. I can mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the area.

13. My tooltip should have a `data-date` property that corresponds to the `data-date` of the active area.

## Datasets used in this project

- US GDP:

  https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json
