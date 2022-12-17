export class Commande {constructor(private _QuantiteFourni?: number, private _DateFourni?: Date) { }
get QuantiteFourni(): number | undefined {
return this._QuantiteFourni;
}
set QuantiteFourni(_QuantiteFourni: number | undefined) {
this._QuantiteFourni = _QuantiteFourni;
}
get DateFourni(): Date | undefined {
return this._DateFourni;
}
set DateFourni(_DateFourni: Date | undefined) {
this._DateFourni = _DateFourni;
}
}
