const ensureisAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    } else {
        console.log(req.url);
        console.log(req.originalUrl);
        console.log(req.query.redirectTo);
        req.session.redirectTo=req.originalUrl;
        return res.redirect('/login')
    }
}

module.exports = ensureisAuthenticated;