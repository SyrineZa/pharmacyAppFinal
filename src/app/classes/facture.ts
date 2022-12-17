export class Facture {
    constructor(private _Id_Fact_Achat?: number, private _Date?: Date,
        private _Total_HT?: number,private _Total_TVA?: number, 
        private _Total_TTC?: number) { }
      
        get Id_Fact_Achat(): number | undefined {
        return this._Id_Fact_Achat;
        }
        set Id_Fact_Achat(_Id_Fact_Achat: number | undefined) {
        this._Id_Fact_Achat = _Id_Fact_Achat;
        }
        get Date(): Date | undefined {
        return this._Date;
        }
        set Date(_Date: Date | undefined) {
        this._Date = _Date;
        }
        get Total_HT(): number | undefined {
        return this._Total_HT;
        }
        set Total_HT(_Total_HT: number | undefined) {
        this._Total_HT = _Total_HT;
        }
        get Total_TVA(): number | undefined {
          return this._Total_TVA;
        }
        set Total_TVA(_Total_TVA: number | undefined) {
        this._Total_TVA = _Total_TVA;
        }
        get Total_TTC(): number | undefined {
        return this._Total_TTC;
        }
        set Total_TTC(_Total_TTC: number | undefined) {
        this._Total_TTC = _Total_TTC;
        }
}
