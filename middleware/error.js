module.exports = (req, res) => {
    res.status(404).render('404', {
        title: 'Error',
        css: 'error.css'
    })
}