import PostMessage from '../models/postMessage.js';
export const getPost = async (req, res) => {
    try {
        const postmessage = await PostMessage.find();
        console.log(postmessage);
        res.status(200).json(postmessage)
    }
    catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createPost = (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    console.log('NewPOST' + newPost + post);
    try {
        newPost.save()
            .then(register => { res.status(register) });
        // res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error.message);

    }
}

