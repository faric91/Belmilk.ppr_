import FirebaseBelmilk from './firebase_belmilk';
import _ from 'lodash';
import uuidv1 from 'uuid/v1';

export default function CoreBelmilk() {

    function getDate (date, period) {
        var systemdate = new Date(date);
        return systemdate.setMonth(systemdate.getMonth() + period);
    }

    function dateCompare (date, period, option) {
        var _date = getDate(date, period);
        if (new Date(option.startdate) < _date && _date < new Date(option.enddate))
            return true;
        return false;
    }

    this.eqpmCompare = function (item, option) {
        if (dateCompare(item.prevdate, item.period, option))
            return true;
        else {
            var counter = 0;
            if (item.components === undefined)
                return false;
            item.components.forEach((component) => {
                if (dateCompare(component.prevdate, component.period, option))
                    counter++;
            });
            if (counter > 0)
                return true;
            return false;
        }
    };

    this.equipmentsFilter = function (option) {
        return new Promise((res, rej) => {
            var filterEqpms;
            var frDb = new FirebaseBelmilk();
            frDb.equipments().then((eqpms) => {
                filterEqpms = _.filter(eqpms, (item) => {
                    if (item === undefined)
                        return false;

                    return this.eqpmCompare(item, option);
                });
                res(filterEqpms);
            });
        });
    };

    this.equipment = function (index) {
        return new Promise((res, rej) => {
            if (index === undefined)
                rej(0);

            var list;
            var frDb = new FirebaseBelmilk();
            frDb.equipments().then((eqpms) => {
                list = eqpms;

                var result = _.find(list, (item) => {
                    if (item === undefined)
                        return false;
                    return item.id === index;
                });
                res(result);
            });
        });
    };

    this.addNewEquipment = function (item) {
        var frDb = new FirebaseBelmilk();
        frDb.set(item, uuidv1());
    };
}

