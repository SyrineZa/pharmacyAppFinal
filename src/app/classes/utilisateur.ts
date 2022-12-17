export class Utilisateur {
    constructor(private _Id_util?: number, private _Nom_util?: string,
        private _Prenom_util?: string,private _Adresse_util?: string, 
        private _Email_util?: string,private _CodePostal_util?: number,private _DateNaissance_util?:Date) { }
      
        get Id_util(): number | undefined {
        return this._Id_util;
        }
        set Id_util(_Id_util: number | undefined) {
        this._Id_util = _Id_util;
        }
        get Nom_util(): string | undefined {
        return this._Nom_util;
        }
        set Nom_util(_Nom_util: string | undefined) {
        this._Nom_util = _Nom_util;
        }
        get Prenom_util(): string | undefined {
        return this._Prenom_util;
        }
        set Prenom_util(_Prenom_util: string | undefined) {
        this._Prenom_util = _Prenom_util;
        }
        get Adresse_util(): string | undefined {
          return this._Adresse_util;
        }
        set Adresse_util(_Adresse_util: string | undefined) {
        this._Adresse_util = _Adresse_util;
        }
        get CodePostal_util(): number | undefined {
        return this._CodePostal_util;
        }
        set CodePostal_util(_CodePostal_util: number | undefined) {
        this._CodePostal_util = _CodePostal_util;
        }
        get DateNaissance_util(): Date | undefined {
        return this._DateNaissance_util;
        }
        set DateNaissance_util(_DateNaissance_util: Date | undefined) {
        this._DateNaissance_util = _DateNaissance_util;
        }
        get Email_util(): string | undefined {
        return this._Email_util;
        }
        set Email_util(_Email_util: string | undefined) {
        this._Email_util = _Email_util;
        }
}
