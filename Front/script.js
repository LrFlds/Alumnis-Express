const users = [
{
    Year:[],
TypeFormation:["Spécialisation DevOps - La méthode"],
Techno:["on s'en ballec"],
PostList:[],
IsAdmin:false,
Name:"tatouille",
FirstName:"Laura",
Email:"salome@juif.com",
Password:"Quentinpoilu1234!",
Picture:[],
Fabric:"Calais",
Description:"j'ai vomi dans ma bouche, j'ai fait un AVC et mon chien a la moule qui...",
Company:"Vichy"
},
{
Year:[],
TypeFormation:["Spécialisation DevOps - La méthode"],
Techno:["on s'en ballec"],
PostList:[],
IsAdmin:false,
Name:"Pitchu",
FirstName:"Math",
Email:"mathipitchu@juif.com",
Password:"Quentinpoilu1234!",
Picture:[],
Fabric:"Calais",
Description:"j'ai vomi dans ma bouche, j'ai fait un AVC et mon chien a la moule qui...",
Company:"Vichy"
}

]
document.getElementById('jesuisdegeux').addEventListener('click',() => {
    users.forEach(element => {

            const userJson = JSON.stringify(element);
            fetch("http://api.app.localhost:3001/user/create", {
                method:"POST",
                body: userJson,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }

            }).then(reponse => {
                console.log(reponse)
            })
        }

     );
})

