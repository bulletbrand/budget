import {storage} from '../createComponents/markup'; 

class Budgetdelete {
    constructor() {
    }
    /**
     * @desc Function that delete from storage by id
     * @param {string} - cuttent id from storage
     * @callback -  deleteTodoFromView(id) 
     */
    deleteTodoFromStorage(id) {
        let removedTask;
        for (let i = 0; i < storage.todos.length; i++) {
            if (storage.todos[i].id === id) {
                removedTask = storage.todos.splice(i, 1);
                break;
            }
        }
        this.deleteTodoFromView(id) //this указываем мол контекст теряется
        return removedTask;
    }

    /**
     * @desc Function that delete from template 
     * @param {string} - cuttent id from storage
     */
    deleteTodoFromView(id) {
        let target = document.querySelector(`[data-id="${id}"]`);
        target.parentElement.removeChild(target);
    }

    /**
     * @desc Function that delete from income Array by id
     * @param {string} - cuttent id from storage
     * @returns {Array} - current task
     */
    deleteTodoFromIncome(id) {
        let incomeTask = 0;

        for (let i = 0; i < storage.income.length; i++) {
            if (storage.income[i].id === id) {
                incomeTask = storage.income.splice(i, 1);
                break;
            }
        }
        return incomeTask;
    }

    /**
     * @desc Function that delete from expense Array by id
     * @param {string} - cuttent id from storage
     * @returns {Array} - current task
     */
    deleteTodoFromExpense(id) {
        let expenseTask = 0;

        for (let i = 0; i < storage.expense.length; i++) {
            if (storage.expense[i].id === id) {
                expenseTask = storage.expense.splice(i, 1);
                break;
            }
        }
        return expenseTask;
    }
}

export const del = new Budgetdelete(); 
