const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.redirect('/projects')
})

router.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'All Projects',
        css: 'project.css'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        css: 'about.css'
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        css: 'contact.css'
    })
})

router.get('/calligraphy', (req, res) => {
    res.render('calligraphy', {
        title: 'Calligraphy',
        css: 'calligraphy.css'
    })
})

router.get('/creativeStudio', (req, res) => {
    res.render('creativeStudio', {
        title: 'Creative Studio',
        css: 'creativeStudio.css'
    })
})

router.get('/stensilFont', (req, res) => {
    res.render('stensilFont', {
        title: 'Stensil Font',
        css: 'stensilFont.css'
    })
})

router.get('/lightFestival', (req, res) => {
    res.render('lightFestival', {
        title: 'Light Festival',
        css: 'lightFestival.css'
    })
})

router.get('/tearsForDogs', (req, res) => {
    res.render('tearsForDogs', {
        title: 'Tears For Dogs',
        css: 'tearsForDogs.css'
    })
})

router.get('/meetInSpace', (req, res) => {
    res.render('meetInSpace', {
        title: 'Meet In Space',
        css: 'meetInSpace.css'
    })
})

router.get('/modularFont', (req, res) => {
    res.render('modularFont', {
        title: 'Modular Font',
        css: 'modularFont.css'
    })
})

module.exports = router;