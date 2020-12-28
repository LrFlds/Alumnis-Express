
import react from 'react'

const links = () => {
    setTimeout(() => {
        const links = document.getElementsByClassName('links')

        for (const link of links) {
            console.log(link.getAttribute('href'))
            if ((link.getAttribute('href') == "") == null || link.getAttribute('href')!=undefined) {
                link.style.display = 'inline'
            }
        }
    }, 2000)

}

export default links