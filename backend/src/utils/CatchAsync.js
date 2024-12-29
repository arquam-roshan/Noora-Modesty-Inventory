const CatchAsync = (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch((e) => {
        console.log("Promise cannot be broken");
        next(e);
    });
}

module.exports = CatchAsync;