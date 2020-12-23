export default class User {
    _id: number;
    Name: string;
    FirstName: string;
    Email: string;
    Password: string;
    Fabric: string;
    Year: number;
    TypeFormation: string;
    Techno: Array<string>;
    Description: string;
    Company: string;
    Status: boolean;
    IsAdmin: boolean;
    Picture: Array<string>;

     
   
    constructor(
     _id: number,
     Name: string = 'name',
     FirstName: string = 'nom',
     Email: string = 'email',
     Password: string = 'pass',
     Fabric: string = 'calais',
     Year: number = 2020,
     TypeFormation: string ='formation',
     Techno: Array<string> = ['Javascript'],
     Description: string = 'votre desciption',
     Company: string = 'entreprise',
     Status: boolean = false,
     IsAdmin: boolean = false,
     Picture: Array<string> = ['http://...'],
     

    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this._id = _id;
    this.Name = Name;
    this.FirstName = FirstName;
    this.Email = Email;
    this.Password = Password;
    this.Fabric = Fabric;
    this.Year = Year;
    this.TypeFormation = TypeFormation;
    this.Techno = Techno;
    this.Description = Description;
    this.Company = Company;
    this.Status = Status;
    this. IsAdmin = IsAdmin;
    this.Picture = Picture;
    }
   }
