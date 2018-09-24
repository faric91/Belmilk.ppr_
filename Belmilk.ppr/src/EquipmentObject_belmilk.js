var eqpmWhere = function () {
    this.level1 = '';
    this.level2 = '';
    this.level3 = '';
};

var eqpmPprBelmilk = function () {
    this.id = '';
    this.worktype = '';
    this.period = 0;
    this.lastdate = '';
};

var eqpmBelmilk = function () {
    this.id = '';
    this.descr = '';
    this.number = '';
    this.where = new eqpmWhere();
    this.ppr = [];
};

export { eqpmWhere, eqpmPprBelmilk, eqpmBelmilk };