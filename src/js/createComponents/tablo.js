import { element} from '../config/UIelements';
import {storage} from '../createComponents/markup';

class Tablo {
    /**
     * @desc Function that add value from storage to tablo if income
     */
    incomeTablo() {
        let test1 = +Number(); //ПЕРЕЕННАЯ КУДА ЗАПИСІВАЕТСЯ СУММА ПРИ ДОБОАВЛЕНИ КАЖДОго нового
        for (let i = 0; i < storage.income.length; i++) {
            test1 += Number(storage.income[i].val);
        }

        element.tabloInc.innerHTML = test1.toFixed(2) + " грн";
        return test1;
    }
    /**
     * @desc  Function that add value from storage to tablo if expense
     */
    expenseTablo() {
        let test2 = -Number(); //ПЕРЕЕННАЯ КУДА ЗАПИСІВАЕТСЯ СУММА ПРИ ДОБОАВЛЕНИ КАЖДО
        for (let i = 0; i < storage.expense.length; i++) {
            test2 += Number(storage.expense[i].val);
        }
        element.tabloExp.innerHTML = (-test2).toFixed(2) + " грн";

        return -test2;
    }
    /**
     * @desc Function that add general value to tablo
     */
    generalTablo() {
        element.tabloGeneral.innerHTML = (this.expenseTablo() + this.incomeTablo()).toFixed(2) + " грн";
    }
    /**
     * @desc Function that call ather function 
     */
    init() {
        this.generalTablo();
        this.expenseTablo();
        this.incomeTablo();
    }
}

export const tablo = new Tablo(); 