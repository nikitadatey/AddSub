function validate(req, res, next) {
    inputArray = req.body.inputArray;
    if(Array.isArray(inputArray)){
        let errorFlag = false;
        for(i of inputArray){
            if(! Number.isInteger(i)){
                errorFlag = true;
            }
        }
        if(errorFlag){
            res.status(403).send({ error:"Invalid Input: number array required!" });
        }
        else{
            next();
        }
    } else {
        res.status(403).send({ error:"Invalid Input: number array required!" });
    }
}

module.exports = validate;