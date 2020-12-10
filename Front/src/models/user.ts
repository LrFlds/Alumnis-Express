export default class User {
    id: number;
    name: string;
    firstName: string;
    email: string;
    password: string;
    fabric: string;
    year: number;
    typeFormation: string;
    techno: Array<string>;
    description: string;
    company: string;
    status: boolean;
    isAdmin: boolean;
    picture: string;

     
   
    constructor(
     id: number,
     name: string = 'name',
     firstName: string = 'nom',
     email: string = 'email',
     password: string = 'pass',
     fabric: string = 'calais',
     year: number = 2020,
     typeFormation: string ='formation',
     techno: Array<string> = ['Javascript'],
     description: string = 'votre desciption',
     company: string = 'entreprise',
     status: boolean = false,
     isAdmin: boolean = false,
     picture: string = 'http://...',
     

    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.email = email;
    this.password = password;
    this.fabric = fabric;
    this.year = year;
    this.typeFormation = typeFormation;
    this.techno = techno;
    this.description = description;
    this.company = company;
    this.status = status;
    this. isAdmin = isAdmin;
    this.picture = picture;
    }
   }
