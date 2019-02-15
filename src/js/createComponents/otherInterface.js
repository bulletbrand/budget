import { element } from '../config/UIelements';

 export class OtherInterface {
     /**
      * @desc Function that add current time to tablo 
      */
     timer() {
         element.month.innerHTML = new Date().toLocaleString(); //что б сразу появлялось без задержки
         setInterval(function () {
             element.month.innerHTML = new Date().toLocaleString();
         }, 1000);
     }
     /**
      * @desc Function that form border after select change
      */
     staticBorder() {
         for (var i = 0; i < element.selectedOptions.length; i++) {
             if (element.selectedOptions[i].value == "income") {
                 element.addValue.style.border = '';
                 element.description.style.border = '';
                 element.select.style.border = '';
                 element.btn.style.color = '';
                 element.btn.style.transform = 'rotate(-360deg)';
                 element.btn.style.transitionDuration = '1s';
             } else {
                 element.addValue.style.border = '1px solid red';
                 element.description.style.border = '1px solid red';
                 element.select.style.border = '1px solid red';
                 element.btn.style.color = 'red';
                 element.btn.style.transform = 'rotate(360deg)';
                 element.btn.style.transitionDuration = '1s';

             }
         }
     }
     /**
      * @desc Function that add message if the user has not entered data
      */
     alerts() {
         element.contain.insertAdjacentHTML('afterbegin', "<div class='alert alert-danger text-center'>Заполните формы!</div>");
         this.deleteAlert()
         return element.container;
     }

     /**
      * @desc Function that delete alert after 2 sec
      */
     deleteAlert() {
         setTimeout(function () {
             let alert = document.querySelector(".alert");
             if (alert) 
                 element.contain.removeChild(alert);
         }, 2000);
     }
 }

 export const other = new OtherInterface(); 
