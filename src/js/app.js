import './../css/style.css';// Styles
import { other} from '../js/createComponents/otherInterface'; 
import { element } from '../js/config/UIelements';
import { main } from '../js/createComponents/markup'; 
import { del } from '../js/deleteComponents/deleteFunc';
import { tablo }from '../js/createComponents/tablo';

//Events
element.select.addEventListener("change", other.staticBorder); //статик бордер візівается в другом файле
document.addEventListener("DOMContentLoaded", other.timer); //тайме рсрабатывает на васт документ тоже в другом файле
element.contain.addEventListener('click', deleteControlUI);
element.enter.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addControllUI();
    }
});

element.container.addEventListener("click", addControllUI);
/**
 * @desc Function that call adding data to array and template after click on container and reset input data
 * @callback -generalTablo - output data to general tablo
 * @callback -addNewTodoToStorage - add data from to storage and call function that add template to page
 */
function addControllUI(e) {
  
    main.addNewTodoToStorage(descrip.value, val.value);
    tablo.generalTablo()
    
    element.decription.value = " "; //сброс значений с инпутов при нажатии 
    element.inputNum.value = null;
}

/**
 * @desc Function that responsible for delete  from view and storage
 * @param {string} - cuttent id from storage
 */
function deleteControlUI(e) {
    if (e.target.classList.contains('ion-ios-close-outline')) { //тоесть еще раз делегирование клацая на родитель этого элемента мы его отловили просто проверив содержит ли текущее нажатие такой то класс(в нашем случае клас удаления для кнопки)
        let id = e.target.closest('[data-id]').dataset.id;
        del.deleteTodoFromStorage(id);
        del.deleteTodoFromIncome(id);
        del.deleteTodoFromExpense(id)
        tablo.init(); //все 3 метода вызовет сразу для инком ексенс и дженерал
        return;
    }
}
