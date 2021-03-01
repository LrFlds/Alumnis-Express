const users = [
    {
        Year: [2020, 2021],
        TypeFormation: ["Concepteur développeur d'applications","Développeur web et web mobile"],
        Techno: ["C#", "Java", "NodeJS/Express", "Javascript(ES6)","Angular"],
        PostList: [],
        IsAdmin: false,
        Name: "Fialdès",
        FirstName: "Laura",
        Email: "laura.fialdes@gmail.com",
        Password: "LauraFialdes080690!",
        Picture: [],
        Fabric: "Calais",
        Description: "De nature exigeante, j’aime l’organisation, et le travail bien fait.Le travail d’équipe me galvanise, et me permet de me surpasser, mais le plus important reste le partage des connaissances, l’entraide et la solidarité. Réactive, je déborde d’idées, et de motivation !",
        Company: "Cap Gemini"
    },
    {
        Year: [2020, 2021],
        TypeFormation: ["Concepteur développeur d'applications","Développeur web et web mobile"],
        Techno: ["Angular", "React", "Javascript(ES6)", "Ant-Design", "Materialize"],
        PostList: [],
        IsAdmin: false,
        Name: "Fournival",
        FirstName: "Quentin",
        Email: "quentinfournival2@gmail.com",
        Password: "Louvia0159!",
        Picture: [],
        Fabric: "Calais",
        Description: "J’aime résoudre des problématiques et mettre mon savoir-faire au service des clients , les projets les plus stimulants sont souvent ceux qui sont les plus difficiles en matière de problématiques c’est pour cela que j’effectue beaucoup de veille sur les nouvelles techonologies et le monde du digital en général.",
        Company: "En recherche"
    },
    {
        Year: [2020, 2021],
        TypeFormation: ["Concepteur développeur d'applications","Développeur web et web mobile"],
        Techno: ["C#", "Java", "NodeJS/Express", "Javascript(ES6)", "Angular"],
        PostList: [],
        IsAdmin: false,
        Name: "Gilliot",
        FirstName: "Mathieu",
        Email: "mathieu.gilliot.pro@gmail.com",
        Password: "Mathieu040890!",
        Picture: [],
        Fabric: "Calais",
        Description: "Curieux,tenace",
        Company: "Cap Gemini"
    }


]
document.getElementById('jesuisdegeux').addEventListener('click', () => {
    users.forEach(element => {

        const userJson = JSON.stringify(element);
        fetch("http://api.app.localhost:3001/user/create", {
            method: "POST",
            body: userJson,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }

        }).then(reponse => {
            
        })
    }

    );
})

