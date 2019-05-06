const inboxSelectors = ["#mainApp", 'shadowRoot', "#mailApp", 'shadowRoot', "#menuList", 'shadowRoot', "#list", "nct-paper-menu-item[name='Входящие'"];
const settingsSelectors = ['#mainApp', 'shadowRoot', '#appSwitcher', 'shadowRoot', '#settings'];
const contextMenuSelectors = ["#mainApp", 'shadowRoot', "#mailApp", 'shadowRoot', "#menuList", 'shadowRoot', "#contextMenuBlock"];

const shadowRoot = 'shadowRoot';

let createJSPathCycle = (selectors) => {
    let arr = [];
    for(let i = 0; i < selectors.length; i++){
        arr[i] = selectors[i] != shadowRoot ? `querySelector("${selectors[i]}")` : shadowRoot;
    }
    arr.unshift('document');    
    return arr.join('.');
}

let createJSPathForEach = (selectors) => {
    let arr = ['document'];
    selectors.forEach(element => {
        element != shadowRoot ? arr.push(`querySelector("${element}")`) : arr.push(shadowRoot);
    });
    return arr.join('.');
}

let createJSPathMap = (selectors) => {
    const arr = selectors.map(element =>
        element != shadowRoot ? `querySelector("${element}")` : shadowRoot);
    arr.unshift('document');
    return arr.join('.');
}


let createJSPathReduce = (selectors) => {
    return selectors.reduce((res, element) =>
        element != shadowRoot ? res.concat(`querySelector("${element}")`) : res.concat(shadowRoot),
        ['document']).join('.');
}