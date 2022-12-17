export class Laboratoire {
    constructor(private _Id_labo?: number, private _Lib_labo?: string) { }
    get Id_labo(): number | undefined {
    return this._Id_labo;
    }
    set Id_labo(_Id_labo: number | undefined) {
    this._Id_labo = _Id_labo;
    }
    get Lib_labo(): string | undefined {
    return this._Lib_labo;
    }
    set Lib_labo(_Lib_labo: string | undefined) {
    this._Lib_labo = _Lib_labo;
    }
}
