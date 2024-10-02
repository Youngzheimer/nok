import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// 빌드된 React 정적 파일 서빙
app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
