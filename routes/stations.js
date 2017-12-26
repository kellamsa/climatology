import express from 'express';
import * as Station from '../models/station'

var router = express.Router();

router.get('/', (req, res, next) => {
  res.send(Station.all());
});

router.get('/:stationId/', (req, res, next) => {
  const stationId = parseInt(req.params.stationId)
  const station = Station.find(stationId);

  res.send(station);
});

export default router;
