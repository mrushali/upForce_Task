import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
const CONNECTION_URL = 'mongodb+srv://rishu:rishu2211@cluster0.y7coyku.mongodb.net/test?retryWrites=true&w=majority'
const PORT = 5000;

// app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use(postRoutes);
// app.use('/posts', postRoutes);
// mongodb+srv://<username>:<password>@cluster0.y7coyku.mongodb.net/?retryWrites=true&w=majority


// app.listen(PORT, () => {
//     console.log(`Server Start ${PORT}`);
// })

mongoose.connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () => console.log(`Server runing PORT :${PORT}`)))
    .catch((error) => { console.log(error); })
