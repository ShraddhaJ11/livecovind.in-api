var express = require("express");
var router = express.Router();
const { getStatesTimeSeriesData, getRaceChartData } = require('../services/timeseries.service');
const covid19OrgdataJsonService = require("../services/covid19OrgService/data-json-service");
const covid19OrgStateDistrictWiseJsonService = require('../services/covid19OrgService/state-district-wise-json.service');
const covid19OrgRawDataJsonService = require('../services/covid19OrgService/raw-data-json.service');
const covid19OrgStateWiseTestingService = require('../services/covid19OrgService/statewise-testing.service');
const { saveNotificationEndpointToFireBase, removeNotificationEndpointToFireBase} = require('../services/notifications.service'); 
const { getStateDistrictZonesDataGlobal } = require('../services/covid19OrgService/state-district-zones.service');
// const fetchLiveBlogDataFromSource = index => {
//   console.log("Fetching data from backend");
//   index = index + 1;
//   axios
//     .get(
//       `https://economictimes.indiatimes.com/etstatic/liveblogs/msid-74765889,callback-liveBlogTypeALL-${index}.htm`
//     )
//     .then(result => {
//       if (result.status === 200) {
//         console.log(result.data);
//         fetchLiveBlogDataFromSource(index + 1);
//       } else {
//         console.log("There was an error from backend");
//       }
//     })
//     .catch(err => {
//       console.log("There was an error in the API");
//     });
// };
router.get("/states/zones", function (req, res) {
  res.json(getStateDistrictZonesDataGlobal());
})

router.get("/states/timeseries", function (req, res) {
  res.json(getStatesTimeSeriesData());
})

router.get("/states/racechart", function (req, res) {
  res.json(getRaceChartData());
})

router.get("/states/testing", function (req, res) {
  res.json(covid19OrgStateWiseTestingService.getStateWiseTesting());
});

router.get("/state", function (req, res) {
  res.json(covid19OrgdataJsonService.getCurrentData());
});

router.get("/district", function (req, res) {
  res.json(covid19OrgStateDistrictWiseJsonService.getStateDistrictDataGlobal());
});

router.get("/india/timeseries", function (req, res) {
  res.json(covid19OrgdataJsonService.getIndiaTimeSeries());
});

router.get("/tested", function (req, res) {
  res.json(covid19OrgdataJsonService.getTested());
});

router.get("/stats", function (req, res) {
  res.json(covid19OrgRawDataJsonService.getRawDataStats());
});

router.post("/notifications/subscribe", function (req, res) {
  const subscription = req.body
  saveNotificationEndpointToFireBase(subscription);
  res.status(200).json({ 'success': true })
})

router.post("/notifications/unsubscribe", function (req, res) {
  const subscription = req.body
  removeNotificationEndpointToFireBase(subscription);
  res.status(200).json({ 'success': true })
})

module.exports = router;
