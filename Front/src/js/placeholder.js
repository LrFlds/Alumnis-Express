
const placeholder = ()=>{
    const image = document.getElementById('profilPicture')
    let imageSrc = image.getAttribute('src')

if(imageSrc == "undefined"){
  image.setAttribute("src","http://via.placeholder.com/150")
}
}


export default placeholder