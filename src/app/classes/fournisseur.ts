export class Fournisseur {
    constructor(private _Id_fournisseur?: number, private _Nom_fournisseur?: string,
        private _Adresse_fournisseur?: string,private _Email_fournisseur?: string, 
        private _Tel_fournisseur?: number) { }
      
        get Id_fournisseur(): number | undefined {
        return this._Id_fournisseur;
        }
        set Id_fournisseur(_Id_fournisseur: number | undefined) {
        this._Id_fournisseur = _Id_fournisseur;
        }
        get Nom_fournisseur(): string | undefined {
        return this._Nom_fournisseur;
        }
        set Nom_fournisseur(_Nom_fournisseur: string | undefined) {
        this._Nom_fournisseur = _Nom_fournisseur;
        }
        get Adresse_fournisseur(): string | undefined {
        return this._Adresse_fournisseur;
        }
        set Adresse_fournisseur(_Adresse_fournisseur: string | undefined) {
        this._Adresse_fournisseur = _Adresse_fournisseur;
        }
        get Email_fournisseur(): string | undefined {
          return this._Email_fournisseur;
        }
        set Email_fournisseur(_Adresse_fournisseur: string | undefined) {
        this._Email_fournisseur = _Adresse_fournisseur;
        }
        get Tel_fournisseur(): number | undefined {
        return this._Tel_fournisseur;
        }
        set Tel_fournisseur(_Tel_fournisseur: number | undefined) {
        this._Tel_fournisseur = _Tel_fournisseur;
        }
}
