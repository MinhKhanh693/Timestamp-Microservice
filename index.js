import express from 'express';

const app = express();

const handleTime = (req, res) => {
  const { date } = req.params;
  let inputDate;
  if (!date) {
    inputDate = new Date();
  } else {
    const timestamp = parseInt(date);
    if (!isNaN(timestamp)) {
      inputDate = new Date(timestamp);
    } else {
      inputDate = new Date(date);
    }
  }

  if (isNaN(inputDate)) {
    res.json({ error: 'Invalid Date' });
  } else {
    res.json({
      unix: inputDate.getTime(),
      utc: inputDate.toUTCString(),
    });
  }
};

app.get('/:date', (req, res) => {
  return handleTime(req, res);
});

app.listen(3000, () => {
  console.log('Express server initialized');
});
