//export {inputNum,decription, income,expenses, select,selectedOptions,container,tabloInc,tabloExp,tabloGeneral,contain,addValue,description, btn,month}

class UIelements {  
  constructor() {
    this.month = document.querySelector(".budget__title--month");
    this.inputNum = document.getElementById("val");
    this.decription = document.querySelector(".add__description");
    this.income = document.querySelector(".income__list");
    this.expenses = document.querySelector(".expenses__list");
    this.select = document.querySelector(".add__type");
    this.selectedOptions =this.select.selectedOptions;
    this.container = document.querySelector(".add__container #getBtn");
    this.tabloInc = document.querySelector(".budget__income--value");
    this.tabloExp = document.querySelector(".budget__expenses--value");
    this.tabloGeneral = document.querySelector(".budget__value");
    this.contain = document.querySelector(".container");
    this.addValue = document.querySelector('.add__value');
    this.description = document.querySelector('.add__description');
    this.btn = document.querySelector('#getBtn');
    this.enter= document.querySelector('.add__container');

  }
}
export let element = new UIelements(); 