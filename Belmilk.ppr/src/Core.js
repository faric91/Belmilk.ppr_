import { EventBus } from './EventBus.js'
import FirebaseBelmilk from './firebase_belmilk.js'
import SearchEqpmBelmilk from './search_belmilk.js'
import _ from 'lodash'
//import { Promise, Date } from 'core-js';


export default function CoreBelmilk() {
    this.eqpmCompare = function (item, option) {
        if (item === undefined)
            return false;

        var date = new Date(item.prevdate);
        if (new Date(option.startdate) < date && date < new Date(option.enddate)) {
            return true;
        }
    }

    this.equipmentsFilter = function (option) {
        return new Promise((res, rej) => {
            var filterEqpms;
            var frDb = new FirebaseBelmilk();
            frDb.init();
            console.log('0.res: ');
            frDb.equipments().then((eqpms) => {
                filterEqpms = _.filter(eqpms, (item) => {
                    return this.eqpmCompare(item, option);
                });
                res(filterEqpms);
            });
        });
    }
}

