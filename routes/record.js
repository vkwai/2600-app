const express = require("express");
const router = express.Router();
const db = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

router.route("/executives").get(function (req, res) {
  let db_connect = db.getDb("records");
  db_connect
    .collection("executives")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).json({ msg: `No executives to show` });
        throw err;
      }
      res.json(result);
    });
});

router.route("/executive/:id").get(function (req, res) {
  let db_connect = db.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("executives").findOne(myquery, function (err, result) {
    if (err) {
      res
        .status(400)
        .json({ msg: `No executive with the id of ${req.params.id}` });
      throw err;
    }
    res.json(result);
  });
});

router.route("/events").get(function (req, res) {
  let db_connect = db.getDb("records");
  db_connect
    .collection("events")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).json({ msg: `No events to show` });
        throw err;
      }
      res.json(result);
    });
});

router.route("/events/:id").get(function (req, res) {
  let db_connect = db.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("events").findOne(myquery, function (err, result) {
    if (err) {
      res.status(400).json({ msg: `No event with the id of ${req.params.id}` });
      throw err;
    }
    res.json(result);
  });
});

router.route("/events/add").post(function (req, response) {
  let db_connect = db.getDb();
  let myobj = {
    title: req.body.title,
    date: req.body.date,
    location: req.body.location,
    description: req.body.description,
    image: req.body.image,
  };
  db_connect.collection("events").insertOne(myobj, function (err, res) {
    if (err) {
      res
        .status(400)
        .json({ msg: `Could not add ${req.params.id} to collection` });
      throw err;
    }
    response.json(res);
  });
});

router.route("/update/:id").post(function (req, response) {
  let db_connect = db.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      title: req.body.title,
      date: req.body.date,
      location: req.body.location,
      description: req.body.description,
      image: req.body.image,
    },
  };
  db_connect
    .collection("events")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) {
        res
          .status(400)
          .json({ msg: `Could not update ${req.params.id} from collection` });
        throw err;
      }
      console.log("1 document updated");
      response.json(res);
    });
});

router.route("/:id").delete((req, response) => {
  let db_connect = db.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("events").deleteOne(myquery, function (err, obj) {
    if (err) {
      res
        .status(400)
        .json({ msg: `Could not delete ${req.params.id} from collection` });
      throw err;
    }
    console.log("1 document deleted");
    response.json(obj);
  });
});
module.exports = router;
