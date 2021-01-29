function addService(req,res,){
    let inputArray = req.body.inputArray;
    let sum = 0;
    for( i of inputArray){
        sum += i;
    }
    res.status(200).send({ output:sum });
}
module.exports = addService;