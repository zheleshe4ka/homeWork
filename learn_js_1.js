/**
 * А еще я хочу что бы вы попрактиковались с разными функциями для работы с массивами: forEach, join, map, reduce.
 * Поэтому попробуйте релизовать функцию createJSPath тремя способами:
 * 0. Пройтись по каждому элементу в цикле for и преобразовать нужные элементы к нужному виду и потом объединить все элементы через точку с помощью join
 * 1. Пройтись по каждому элементу используя forEach и преобразовать нужные элементы к нужному виду и потом объеинить все элементы через точку с помощью join
 * 2. Сделать как в пункте 1, только не использовать forEach, а заюзать map для этих целей (ведь это удобнее)
 * 3. Использовать исключительно reduce
 */

const inboxSelectors = ["#mainApp", 'shadowRoot', "#mailApp", 'shadowRoot', "#menuList", 'shadowRoot', "#list", "nct-paper-menu-item[name='Входящие'"];
const settingsSelectors = ['#mainApp', 'shadowRoot', '#appSwitcher', 'shadowRoot', '#settings'];
const contextMenuSelectors = ["#mainApp", 'shadowRoot', "#mailApp", 'shadowRoot', "#menuList", 'shadowRoot', "#contextMenuBlock"];

const shadowRoot = 'shadowRoot';

/**
 * @param selectors - компактный селектор элемента
 * @returns {string} - полный селектор элемента
 */
let createJSPathCycle = (selectors) => {
    let arr = ['document'];
    for(let i = 0; i < selectors.length; i++){
        arr.push(selectors[i] !== shadowRoot ? `querySelector("${selectors[i]}")` : shadowRoot);
    }
    return arr.join('.');
}

/**
 * @param selectors - компактный селектор элемента
 * @returns {string} - полный селектор элемента
 */
let createJSPathForEach = (selectors) => {
    let arr = ['document'];
    selectors.forEach(element => {
        arr.push(element !== shadowRoot ? (`querySelector("${element}")`) : shadowRoot);
    });
    return arr.join('.');
}

/**
 * @param selectors - компактный селектор элемента
 * @returns {string} - полный селектор элемента
 */
let createJSPathMap = (selectors) => {
    const arr = selectors.map(element =>
      element !== shadowRoot ? `querySelector("${element}")` : shadowRoot);
    arr.unshift('document');
    return arr.join('.');
}

/**
 * @param selectors - компактный селектор элемента
 * @returns {string} - полный селектор элемента
 */
let createJSPathReduce = (selectors) => {
    return selectors.reduce((res, element) =>
        res.concat(element !== shadowRoot ? `querySelector("${element}")` : shadowRoot),
      ['document']).join('.');
}


/**
 * Теперь небольшое задание:
 * 1. Реализовать функцию, которая будет принимать на входе html-element и логировать его поле class.
 * 2. Разместить эту функцию в своем снипете.
 * 3. Вызвать в этом же снипете полученную функцию для каждого из трех элементов названных выше.
 */

searchField  = document.querySelector('#home-q');
submitButton = document.querySelector('#newsletter-submit');
loginField   = document.querySelector('#toolbox').querySelector('ul').querySelector('li').querySelector('div').querySelector('a');

/**
 * Функция логиурет поле class у html-элемента
 * @param element - селектор html-элемента
 */
function logElementClass(element){
    console.log(element.getAttribute("class"));
}

logElementClass(searchField);
logElementClass(submitButton);
logElementClass(loginField);


/**
 * 1. функция get​Attributes - будет возвращать Object, свойства которого будут повторять атрибуты, указанного элемента.
 */
