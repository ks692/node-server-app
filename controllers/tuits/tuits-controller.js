import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    console.log(newTuit)
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.dislikes=0;
    newTuit.liked = false;
    console.log(newTuit)
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) => res.json(tuits);
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id == tuitdIdToUpdate)
    console.log(tuitIndex)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    console.log(tuitdIdToDelete)
    tuits = tuits.filter((t) =>
        t._id != tuitdIdToDelete);
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
