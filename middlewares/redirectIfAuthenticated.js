function redirectIfAuthenticated(req,res,next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    } else {
        return next();
    }
}

module.exports = redirectIfAuthenticated;
