
import react from 'react'

const links = () => {
    setTimeout(() => {
        const links = document.getElementsByClassName('links')

        for (const link of links) {
            if (link.getAttribute('href') != "") {
                link.style.display = 'inline'
            }
        }
    }, 2000)

}

export default links