

async function searchFilter(callback, temp) {

    const searchFabric = await document.getElementsByClassName('lieux')[0].getElementsByTagName('input')[0];
    const searchTechno = await document.getElementsByClassName('tech')[0].getElementsByTagName('input')[0];

    searchFabric.addEventListener("keyup", () => {
        const fabricValues = searchFabric.value.split(' ').map(element=>element.toLowerCase());
        const technoValues = searchTechno.value.split(' ').map(element=>element.toLowerCase());

        if (searchTechno.value.replace(/\s/g, "").length != 0 && searchFabric.value.replace(/\s/g, "").length != 0) {
            const filteredData = temp.filter(user => {
                for (let techno of user.Techno) {
                    if (technoValues.includes(techno.toLowerCase()) && fabricValues.includes(user.Fabric.toLowerCase())) {
                        return user
                    }
                }
            })
            if (searchFabric.value.length == 0 && searchTechno.value.length == 0) {
                callback(temp)
            } else {
                callback(filteredData)
            }
        } else if (searchTechno.value.replace(/\s/g, "").length != 0 && searchFabric.value.replace(/\s/g, "").length == 0) {
            const filteredData = temp.filter(user => {
                for (let techno of user.Techno) {
                    if (technoValues.includes(techno.toLowerCase())) {
                        return user
                    }
                }
            })
            if (searchTechno.value.length == 0) {
                callback(temp)
            } else {
                callback(filteredData)
            }

        } else {
            const filteredData = temp.filter(user => {
                if (fabricValues.includes(user.Fabric.toLowerCase())) {
                    return user
                }
            })
            if (searchFabric.value.length == 0 && searchTechno.value.length == 0) {
                callback(temp)
            } else {
                callback(filteredData)
            }

        }
    })

    searchTechno.addEventListener("keyup", () => {
        const fabricValues = searchFabric.value.split(' ').map(element=>element.toLowerCase());
        const technoValues = searchTechno.value.split(' ').map(element=>element.toLowerCase());
        if (searchFabric.value.replace(/\s/g, "").length != 0 && searchTechno.value.replace(/\s/g, "").length != 0) {
            const filteredData = temp.filter(user => {
                for (let techno of user.Techno) {
                    if (technoValues.includes(techno.toLowerCase()) && fabricValues.includes(user.Fabric.toLowerCase())) {
                        return user
                    }
                }
            })
            if (searchFabric.value.length == 0 && searchTechno.value.length == 0) {
                callback(temp)
            } else {
                callback(filteredData)
            }
        } else if (searchTechno.value.replace(/\s/g, "").length == 0 && searchFabric.value.replace(/\s/g, "").length != 0) {
            const filteredData = temp.filter(user => {
                if (fabricValues.includes(user.Fabric.toLowerCase())) {
                    return user
                }
            })
            if (searchFabric.value.length == 0 && searchTechno.value.length == 0) {
                callback(temp)
            } else {
                callback(filteredData)
            }
        } else {
            const filteredData = temp.filter(user => {
                for (let techno of user.Techno) {
                    if (technoValues.includes(techno.toLowerCase())) {
                        return user
                    }
                }
            })
            if (searchFabric.value.length == 0 && searchTechno.value.length == 0) {
                callback(temp)
            } else {
                callback(filteredData)
            }

        }
    })
}

export default searchFilter;