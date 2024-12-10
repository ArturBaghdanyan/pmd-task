import * as d3 from "d3";

export function createPolarAreaDiagram(chart_svg, data, width, height) {
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    // const chartWidth = width - margin.left - margin.right;
    // const chartHeight = height - margin.top - margin.bottom;
    
    const outerRadius = Math.min(width, height) / 2 - 20;
    const innerRadius = outerRadius * 0.1; // 20% of outer radius

    const color_palette_scale = d3.scaleOrdinal()
        .range(d3.schemeCategory10);

    const pie = d3.pie()
        .value(d => d.medal)
        .sort(null);

    const max_medal = d3.max(data, d => d.medal);

    const radius_scale = d3.scaleLog()
        .domain([1, max_medal])
        .range([innerRadius, outerRadius]);

    const arc = d3.arc()
        .outerRadius(d => radius_scale(d.data.medal))
        .innerRadius(innerRadius);

    const arcs = chart_svg.selectAll("path")
        .data(pie(data))
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => color_palette_scale(i))
        .attr("stroke", "white")
        .style("stroke-width", "8px")
        .attr("transform", d => {
            if (d.data.Key === "Category 1") {
                return "rotate(40)"; // Rotate 180 degrees
            }
            if (d.data.Key === "Category 2") {
                return "rotate(110)"; // Rotate 180 degrees
            }
            if (d.data.Key === "Category 3") {
                return "rotate(-60)"; // Rotate 180 degrees
            }
            if (d.data.Key === "Category 4") {
                return "rotate(55)"; // Rotate 180 degrees
            }
            return ""; // No transformation for other categories
        });

    const medalTextArc = d3.arc()
        .outerRadius(d => radius_scale(d.data.medal) + 5)
        .innerRadius(d => radius_scale(d.data.medal) + 5);

    chart_svg.selectAll("text")
        .data(pie(data))
        .enter()
        .append("text")
        .attr("transform", d => {
            const pos = medalTextArc.centroid(d);
            let translation = `translate(${pos[0]}, ${pos[1]})`;

            if (d.data.Key === "Category 1") {
                translation = `translate(${pos[0]}, ${pos[1]}) rotate(40)`; // Rotate the text
            }
            if (d.data.Key === "Category 2") {
                translation = `translate(${pos[0]}, ${pos[1]}) rotate(110)`; // Rotate the text
            }
            if (d.data.Key === "Category 3") {
                translation = `translate(${pos[0]}, ${pos[1]}) rotate(-60)`; // Rotate the text
            }
            if (d.data.Key === "Category 4") {
                translation = `translate(${pos[0]}, ${pos[1]}) rotate(55)`; // Rotate the text
            }

            return translation;
        })
        .attr("text-anchor", "middle")
        .text(d => d.data.name || `${d.data.medal} medals`) 
        .style("font-size", d => `${Math.max(d.data.medal / 2, 12)}px`)

    arcs.append("title")
        .text(d => `${d.data.Key}: ${d.data.medal}`);

    return chart_svg;
}
