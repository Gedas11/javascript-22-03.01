// alert('labas pasauli')
window.addEventListener('scroll', ()=>{
    const offset = 260
    if(window.scrollY >= ofsset){
        document.getElementById('navbar').classList.add('scrolled')
    }
    else{document.getElementById('navbar').classList.remove('scrolled')}
    // if(window.scrollY < offset) {
    // document.getElementById('navbar').classList.remove('scrolled')
    

    // jeigu turime ife turi buti daugiau kodo eiluciu nei viena, 
    // tuomer reikia riestiniu skliaustu
    // create
    // read
    // update

    // console.log(window.scrollY)

})