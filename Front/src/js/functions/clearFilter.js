
async function clearFilter(){

    const event = new Event('keyup', {
        bubbles: true,
        cancelable: true,
    });

    const searchFabric = await document.getElementsByClassName('lieux')[0].getElementsByTagName('input')[0];
    const searchTechno = await document.getElementsByClassName('tech')[0].getElementsByTagName('input')[0];

    searchFabric.value="";
    searchTechno.value="";

    searchTechno.dispatchEvent(event);
    searchTechno.dispatchEvent(event);
}

export default clearFilter;