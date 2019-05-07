const inboxSelectors = ["#mainApp", 'shadowRoot', "#mailApp", 'shadowRoot', "#menuList", 'shadowRoot', "#list", "nct-paper-menu-item[name='Входящие'"];
const settingsSelectors = ['#mainApp', 'shadowRoot', '#appSwitcher', 'shadowRoot', '#settings'];
const contextMenuSelectors = ["#mainApp", 'shadowRoot', "#mailApp", 'shadowRoot', "#menuList", 'shadowRoot', "#contextMenuBlock"];

const shadowRoot = 'shadowRoot';

let createJSPathCycle = (selectors) => {
    let arr = ['document'];
    for(let i = 0; i < selectors.length; i++){
        arr.push(selectors[i] !== shadowRoot ? `querySelector("${selectors[i]}")` : shadowRoot);
    }
    return arr.join('.');
}

let createJSPathForEach = (selectors) => {
    let arr = ['document'];
    selectors.forEach(element => {
        arr.push(element !== shadowRoot ? (`querySelector("${element}")`) : shadowRoot);
    });
    return arr.join('.');
}

let createJSPathMap = (selectors) => {
    const arr = selectors.map(element =>
      element !== shadowRoot ? `querySelector("${element}")` : shadowRoot);
    arr.unshift('document');
    return arr.join('.');
}


let createJSPathReduce = (selectors) => {
    return selectors.reduce((res, element) =>
        res.concat(element !== shadowRoot ? `querySelector("${element}")` : shadowRoot),
      ['document']).join('.');
}
