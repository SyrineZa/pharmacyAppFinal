export class Famille {
    constructor(private _Id_Famille?: number, private _Lib_Famille?: string) { }
    get Id_Famille(): number | undefined {
    return this._Id_Famille;
    }
    set Id_Famille(_Id_Famille: number | undefined) {
    this._Id_Famille = _Id_Famille;
    }
    get Lib_Famille(): string | undefined {
    return this._Lib_Famille;
    }
    set Lib_Famille(_Lib_Famille: string | undefined) {
    this._Lib_Famille = _Lib_Famille;
    }
}
