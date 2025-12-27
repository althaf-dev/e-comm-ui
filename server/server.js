import { dir } from 'console';
import express from 'express';
import path from 'path';

const app = express();

const dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(dirname, '../dist')));
console.log(dirname);

app.get("/health",(req,res)=>{
  res.status(200).json({
    message:"server is healty"
  })
})

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(dirname, '../dist/index.html'));
});

app.listen(3000, () => {
  console.log('server is ruungon on port 3000');
});
