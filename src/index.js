
module.exports = {
  reportToJson,
  reportToArray,
}



function reportToJson(reports) {
  reports.forEach((report, i) => {
    let columnHeader = report.columnHeader;
    let dimensionHeaders = columnHeader.dimensions;
    let metricHeaders = columnHeader.metricHeader.metricHeaderEntries;

    let rows = report.data.rows;
    reports[i] = [];

    rows.forEach((row, j) => {
      let rowObj = {};

      row.dimensions.forEach((dimension, k) => {
        rowObj[dimensionHeaders[k]] = dimension;
      });
      row.metrics[0].values.forEach((value, k) => {
        rowObj[metricHeaders[k].name] = value;
      })
      reports[i].push(rowObj);
    });
  });
  return reports;
}



function reportToArray(reports) {
  reports.forEach((report, i) => {
    let columnHeader = report.columnHeader;
    let dimensionHeaders = columnHeader.dimensions;
    let metricHeaders = columnHeader.metricHeader.metricHeaderEntries;

    let rows = report.data.rows;
    reports[i] = [];
    let names = [];
    dimensionHeaders.forEach(name => {
        names.push(name);
    })
    metricHeaders.forEach(obj => {
      names.push(obj.name);
    })
    reports[i].push(names);
    rows.forEach((row, j) => {
      let rowArr = [];

      row.dimensions.forEach((dimension, k) => {
        rowArr.push(dimension);
      });
      row.metrics[0].values.forEach((value, k) => {
        rowArr.push(value);
      })
      reports[i].push(rowArr);
    });
  });
  return reports;
}
