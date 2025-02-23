
const flagsElement = document.getElementById("flags");

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

const textsChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language =>{
    
    const requestJson = await fetch(`/languages/${language}.json`);
    
    const texts = await requestJson.json();
    
    for(const textChange of textsChange){
        const section = textChange.dataset.section;
        const value = textChange.dataset.value;
        textChange.innerHTML = texts[section][value];
    }
}


setTimeout(() => {
    window.location.reload(true);
    alert(
        `Für Personen ab 30 Jahren ist die Hosteller Card Pflicht.\nPreis: 2,50 €\n\nEl carnet de alberguista es obligatorio para mayores de 30 años.\nPrecio: 2,50 €\n\nThe youth hostel card is mandatory for those over 30 years of age.\nPrice: 2.50 €`
    )
}, 30000);

if (!localStorage.getItem('pageLoaded')) {
// Marca que la página ha sido cargada
    localStorage.setItem('pageLoaded', 'true');
    
// Recarga la página desde el servidor
     window.location.reload(true);
 }