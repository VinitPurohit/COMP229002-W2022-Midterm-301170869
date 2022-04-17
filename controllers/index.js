/*
StudentID-301170869
*/

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
