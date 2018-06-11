const _ = require('lodash');
const {
  readFileSync
} = require('fs');
const logFilePath = __dirname + '/data-usage.log';

//const raw = readFileSync(logFilePath, 'utf8');

const fetchUserData = () => {
  try {
    const raw = readFileSync(logFilePath, 'utf8');
    // return JSON.parse(raw);
    return raw;
  } catch (e) {
    return [];
  }
};

const buildJsonData = (userData) => {
  let userDataJson = [];
  let nonSplitedData = userData.split("\r\n");
  for (let i = 0; i < nonSplitedData.length; i++) {
    let filteredData = nonSplitedData[i].split(",");
    userDataJson.push({
      date: filteredData[0],
      user: filteredData[1].substr(5),
      data: parseInt(filteredData[2].substr(5))
    });
  }
  return userDataJson;
}

const dataUsage = () => {
  // put your code here !!

  // Read File
  let userData = fetchUserData();

  // Build data to json format
  let userDataJson = buildJsonData(userData);

  // Group By key=user and find total average each user with data (use lodash library)
  let results = _(userDataJson)
    .groupBy(x => x.user)
    .map((value, key) =>
      ({
        user: key,
        total: _.sumBy(value, 'data'),
        average: _.meanBy(value, 'data'),
      })).value();


  // Display results
  results.forEach(userUsage => {
    console.log(userUsage)
  })

};

module.exports = {
  dataUsage
};