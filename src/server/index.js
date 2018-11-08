import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from '../../webpack.dev';
import TableData from '../models/tableData';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

const dbUrl = 'mongodb://localhost/crud';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbUrl, { useNewUrlParser: true }, (dbErr) => {
  if (dbErr) {
    throw new Error(dbErr);
  } else {
    console.log('db connected');
  }

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
    const { id } = request.body;
    TableData.deleteOne({ _id: id }, (err) => {
      if (err) {
        response.status(500).send();
      } else {
        response.status(200).send(id);
      }
    });
  });
});

module.exports = app;
