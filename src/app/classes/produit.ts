export class Produit {
    constructor(private _Id_prd?: number, private _Lib_prd?: string,private _Description_prd?: string, private _Prix_prd?: number,private _DateAjout_prd?: Date,private _Prix_Livr?: number) { }

    get Id_prd(): number | undefined {
    return this._Id_prd;
    }
    set Id_prd(_Id_prd: number | undefined) {
    this._Id_prd = _Id_prd;
    }
    get Lib_prd(): string | undefined {
    return this._Lib_prd;
    }
    set Lib_prd(_Lib_prd: string | undefined) {
    this._Lib_prd = _Lib_prd;
    }
    get Description_prd(): string | undefined {
    return this._Description_prd;
    }
    set Description_prd(_Description_prd: string | undefined) {
    this._Description_prd = _Description_prd;
    }

    get Prix_prd(): number | undefined {
    return this._Prix_prd;
    }
    set Prix_prd(_Prix_prd: number | undefined) {
    this._Prix_prd = _Prix_prd;
    }
    get DateAjout_prd(): Date | undefined {
    return this._DateAjout_prd;
    }
    set DateAjout_prd(_DateAjout_prd: Date | undefined) {
    this._DateAjout_prd = _DateAjout_prd;
    }
    get Prix_Livr(): number | undefined {
    return this._Prix_Livr;
    }
    set Prix_Livr(_Prix_Livr: number | undefined) {
    this._Prix_Livr = _Prix_Livr;
    }
}
