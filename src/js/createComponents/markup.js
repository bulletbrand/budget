import {element} from '../config/UIelements';//UI элементы (тут все норм)
import {tablo}from '../createComponents/tablo'; //все что отвечает за табло(тут все норм)
import { other } from '../createComponents/otherInterface'; //доп фции всякие которые засоряют место(таймеры и бордеры)

export { main, storage }



let storage = {
    todos: [],
    income: [],
    expense: []
};
class MainUItemplate {
/**
 * @desc Function that responsible for adding template to page
 * @param {Array} - current task from Array
 */
 addElem(task) {
    for (var i = 0; i < element.selectedOptions.length; i++) {
        if (element.selectedOptions[i].value == "income") { //если  нажат такой то вставляем ипут и тег бр в конец
            if (!element.description.value || !element.addValue.value ) return other.alerts(), other.deleteAlert(); //сразу 2 вызываем сообщение и его удаление
           // if (element.addValue.value.includes("-")) {
            //    
           // }
            const templateIncome = this.markupLeft(task, "+");
            element.income.insertAdjacentHTML('afterbegin', templateIncome);
            storage.income.push(task);
            tablo.incomeTablo();
          
           // || element.addValue.value.includes("-")
        } else if (element.selectedOptions[i].value == "expense") {
            if (!element.description.value || !element.addValue.value) return other.alerts(), other.deleteAlert();
            const templateExpense = this.markupLeft(task, "-");
            element.expenses.insertAdjacentHTML('afterbegin', templateExpense);
            storage.expense.push(task);
            tablo.expenseTablo();
           
        }
    }
}

    
    /**
 * @desc Function that add data that users write to storage and generate id ,after return this data from array(discribe and val) and use that create other functions
 * @callback addElem - add template to page
 */
 addNewTodoToStorage(descrip, val) {
     const newTask = {
         descrip,
         val,
         id: String(Date.now())
     };

     storage.todos.push(newTask);
     this.addElem(newTask);
     return storage.todos;
 }

    markupLeft(task, item) {
        console.log(task);
        return `
    <div class="item clearfix" data-id="${task.id}">
    <div class="item__description">${task.descrip}</div>
    <div class="right clearfix">
        <div class="item__value">${item}${Number(task.val).toFixed(2)}</div>
        <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
    </div>
</div>    `
    }
}

const main = new MainUItemplate(); 

