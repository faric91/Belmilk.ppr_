import { EventBus } from './EventBus.js'
import FirebaseBelmilk from './firebase_belmilk.js'
import SearchEqpmBelmilk from './search_belmilk.js'
import _ from 'lodash'


export default function CoreBelmilk() {

    function getDate (date, period) {
        var date = new Date(date);
        return date.setMonth(date.getMonth() + period);
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
            item.components.forEach((component) => {
                if (dateCompare(component.prevdate, component.period, option))
                    counter++;
            });
            if (counter > 0)
                return true;
            return false;
        }
    }

    this.equipmentsFilter = function (option) {
        return new Promise((res, rej) => {
            var filterEqpms;
            var frDb = new FirebaseBelmilk();
            frDb.init();
            frDb.equipments().then((eqpms) => {
                filterEqpms = _.filter(eqpms, (item) => {
                    if (item === undefined)
                        return false;

                    return this.eqpmCompare(item, option);
                });
                res(filterEqpms);
            });
        });
    }

}

