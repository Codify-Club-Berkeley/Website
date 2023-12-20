import React, { useEffect, useRef, useMemo, useState } from "react";
import * as d3 from "d3";

const ThreeColumnBarChart = () => {
  const chartRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Use useMemo to memoize the data array
  const data = useMemo(
    () => [
      { label: "Projects", value: 5 },
      { label: "Members", value: 3 },
      { label: "Semesters", value: 2 },
    ],
    []
  );

  useEffect(() => {
    const svg = d3.select(chartRef.current).select("svg");
    const chartWidth = 300;
    const chartHeight = 100;

    // Initialize scales once
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, chartWidth])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([0, chartHeight]);

    // Append the chart elements if not already present
    if (svg.empty()) {
      const newSvg = d3
        .select(chartRef.current)
        .append("svg")
        // .attr("width", "100%");

      newSvg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(d.label))
        .attr("y", chartHeight)
        .attr("width", xScale.bandwidth())
        .attr("height", 0)
        .attr("fill", "indigo");

      newSvg
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => `${d.value} ${d.label}`)
        .attr("x", (d) => xScale(d.label) + xScale.bandwidth() / 2)
        .attr("y", chartHeight - 5)
        .attr("text-anchor", "middle")
        .attr("fill", "black");
    }

    const handleScroll = () => {
      const chartRect = chartRef.current.getBoundingClientRect();
      const middleOfChart = chartRect.top + chartRect.height / 2;

      // Check if the middle of the chart is in view
      if (
        middleOfChart < window.innerHeight &&
        middleOfChart > 0 &&
        !isInView
      ) {
        setIsInView(true);
        // Trigger the animation
        svg
          .selectAll("rect")
          .transition()
          .duration(1000)
          .attr("y", (d) => chartHeight - yScale(d.value) + 5)
          .attr("height", (d) => yScale(d.value) + 5);

        svg
          .selectAll("text")
          .transition()
          .duration(1000)
          .attr("y", (d) => chartHeight - yScale(d.value) - 5);
      } else if (middleOfChart >= window.innerHeight || middleOfChart <= 0) {
        setIsInView(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data, isInView]);

  return (
    <div ref={chartRef} id="bar-chart-container">
      {/* The chart will be rendered here */}
    </div>
  );
};

export default ThreeColumnBarChart;
