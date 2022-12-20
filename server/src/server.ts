import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// app.get의 url로 접속을 하면 해당 블록의 코드를 실행
app.get('/', (_, res) => res.send('running'));

const port = 4000;
app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});
