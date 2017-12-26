var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send(stations());
});

router.get('/:stationId/', (req, res, next) => {
  const station = stations().find(station => station.id === req.params.stationId);

  debugger;

  res.send(station);
});

const stations = () => [
  { id: 1, name: 'station foo', location: 'location' },
  { id: 2, name: 'station bar', location: 'location' }
];

// class Stations {
//   const find = (id) => {
//     all
//   }

//   const all = () => {

//   }
// }

module.exports = router;
