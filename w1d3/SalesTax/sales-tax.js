const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
const totalSalesProvince = (company, prov) => {
  let dataPicker;
  companySalesData.forEach((dataset, index) => {
    if (dataset.name == company && dataset.province == prov) {
      dataPicker = index;
    }
  })
  const output = companySalesData[dataPicker].sales.reduce((total, current) => {
    total += current;
    return total
  })
  return output;
}

const calculateSalesTax = (salesData, taxRates) => {
  let outputObject = {}
  salesData.forEach(dataset => {
    const companyName = dataset.name
    if (Object.keys(outputObject).indexOf(companyName) === -1) {
      outputObject[companyName] = {
          totalSales: totalSalesProvince(companyName, dataset.province),
          totalTaxes: totalSalesProvince(companyName, dataset.province) * taxRates[dataset.province]
      }
    } else {
      outputObject[companyName].totalSales += totalSalesProvince(companyName, dataset.province);
      outputObject[companyName].totalTaxes += totalSalesProvince(companyName, dataset.province) * taxRates[dataset.province];
    }  
  })
  return outputObject; 
}

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/