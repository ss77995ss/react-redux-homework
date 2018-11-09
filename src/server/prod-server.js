import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import TableData from '../models/tableData';

const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

const dbUrl = 'mongodb://mongo/crud';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbUrl, { useNewUrlParser: true }, (dbErr) => {
  if (dbErr) {
    throw new Error(dbErr);
  } else {
    console.log('db connected');
  }

  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../../build/index.html'));
  });

  app.post('/api/tabledatas', (request, response) => {
    const {
      seq,
      status,
      title,
      category,
      owner,
      priority,
    } = request.body;

    new TableData({
      seq,
      status,
      title,
      category,
      owner,
      priority,
    }).save((err) => {
      if (err) {
        response.status(500);
      } else {
        response.status(200).send('newRow was successfully created');
      }
    });
  });

  app.get('/api/tabledatas', (request, response) => {
    TableData.find({}, (err, tableData) => {
      if (err) {
        response.status(500);
      } else {
        response.status(200).send(tableData);
      }
    }).sort({ seq: 1 });
  });

  app.put('/api/tabledatas', (request, response) => {
    const { id, name, value } = request.body;
    TableData.updateOne({ seq: id },
      { $set: { [name]: value } }, (err) => {
        if (err) {
          response.status(500);
        } else {
          response.status(200).send(id);
        }
      });
  });

  app.delete('/api/tabledatas', (request, response) => {
    const { seq } = request.body;
    const target = seq;
    TableData.deleteOne({ seq: target }, (err) => {
      if (err) {
        response.status(500).send();
      } else {
        response.status(200).send(response.body);
      }
    });
  });
});

module.exports = app;
