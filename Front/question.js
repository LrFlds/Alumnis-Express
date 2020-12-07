let questions = {
  1: {
    
    Name: "tatouille",
    FirstName: "Laura",
    Email: "salome@juif.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "la cwuizine",
    Description:"j'ai vomi dans ma bouche, j'ai fait un AVC et mon chien a la moule qui coule ",
    Company: "Vichy",
    Status: false,
    IsAdmin: true

  },

  2: {
    
    Name: "pitchu",
    FirstName: "mathieu",
    Email: "chauvman@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "la coiffure",
    Description:"moi j'aime bien, c'est sale mais ça marche, ça passe, je doit y réfléchir je revient",
    Company: "Franck Provost",
    Status: false,
    IsAdmin: true

  },

  3: {
    
    Name: "tamarre",
    FirstName: "keutin",
    Email: "touffman@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "coloriage",
    Description:"tu veux voir mon bras d'enfant ?, j'ai un chat dans le zlip, ",
    Company: "Connection is good",
    Status: false,
    IsAdmin: true

  },

  4: {
    
    Name: "pine",
    FirstName: "justine",
    Email: "jaipasdsous@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "fortran",
    Description:"aie j'ai mal je suis vieille et je suis a la desh wesh",
    Company: "no no square",
    Status: false,
    IsAdmin: true

  },

  5: {
    
    Name: "Dpecan",
    FirstName: "Benoit",
    Email: "blouge@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "brogniart",
    Description:"C'est bien blouge , HA !!, c'est la vie ce sont des choses qui arrivent",
    Company: "koh lanta",
    Status: false,
    IsAdmin: true

  },

  6: {
    
    Name: "Foutre",
    FirstName: "zacka",
    Email: "clodoman@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "j'menfou",
    Description:"c'est d'la merde j'men fou, je suis anarchiste et je veux foutre en l'air toute la société capitaliste",
    Company: "papaouté",
    Status: false,
    IsAdmin: true

  },

  7: {
    
    Name: "Aigre",
    FirstName: "Alvyn",
    Email: "bahçava@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "ça va",
    Description:"moi ça va, voila *rire marrant*" ,
    Company: "Chipmunks",
    Status: false,
    IsAdmin: true

  },
  8: {
    
    Name: "Culé",
    FirstName: "Clement",
    Email: "quignon@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "biscotte",
    Description:"Soupeur de l'extreme à la gare du Nord, tu vois quoi",
    Company: "jacob delafon",
    Status: false,
    IsAdmin: true

  },
  9: {
    
    Name: "Desfemmesetdelabièrenondedieu",
    FirstName: "Jérome",
    Email: "grandecatin@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "ASMR",
    Description:"C'est pas faux, moi ça va, point faible trop fort",
    Company: "Gojira",
    Status: false,
    IsAdmin: true

  },
  10: {
    
    Name: "Cotèque",
    FirstName: "Gladys",
    Email: "Bimoulé@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "chicottage",
    Description:"je vais te fumer, tu es raciste et sans moi tu n'a pas de t-shirt",
    Company: "cottonvalley",
    Status: false,
    IsAdmin: true

  },
  11: {
    
    Name: "Fonfonfon",
    FirstName: "kouassi",
    Email: "alassaneouattara@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "la Goudale",
    Description:"Je suis le dictateur, merci chef, quand je parle tout le monde se tait",
    Company: "directeur à CottonValley",
    Status: false,
    IsAdmin: true

  },

  12: {
    
    Name: "Alouna",
    FirstName: "Cherif",
    Email: "Bijour@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "dinweldik",
    Description:"",
    Company: "no no square",
    Status: false,
    IsAdmin: true

  },

  13: {
    
    Name: "Spoutine",
    FirstName: "Zohra",
    Email: "jefaitregime@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "Dukan",
    Description:"Wallah demain je fait régime, j'ai pas lu j'ai la flemme",
    Company: "Saladland",
    Status: false,
    IsAdmin: true

  },

  14: {
    
    Name: "",
    FirstName: "Angéline",
    Email: "jaipasdsous@gmail.com",
    Password: "lol",
    Fabric: "Liste à définir",
    Year: 2020,
    TypeFormation: "liste à définir",
    Techno: "fortran",
    Description:"aie j'ai mal je suis vieille",
    Company: "no no square",
    Status: false,
    IsAdmin: true

  }




}


document.getElementById('ko').addEventListener('click', async (e) => {
  async function testEnvoi(options) {
    await fetch('http://localhost:3000/question/createQ', options).then(res => {
      if (res.ok) {
        console.log("Question envoyée")
      } else {
        console.log("Ta mère")
      }
    })
  }
  for (const question in questions) {
    console.log(questions[question]);

    const Json = JSON.stringify(questions[question])
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: Json
    }

    await testEnvoi(options);
  }
})


