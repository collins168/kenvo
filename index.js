const benefit="Trees purify our air and combat climate change."
const benefit1="Trees provide housing to millions of species that protect us from disease."
const benefit2="Trees cool our strees and cities."
const benefit3="Trees protect against floods and water pollution."
const benefit4="Trees ease the mind during stressful times."
const benefit5="Trees provide shade on hot days."
const benefit6="Trees are important for maintaining cool weather in the city."
const benefit7="Trees in the forest give food and shelter for different animals."
const benefit8="Trees also provide protection for some animals eg birds."
const benefit9="Trees create economical opportunity."
const benefit10="Trees Help with Drought Mediation."
const benefit11="Trees are teachers and playmates."

let nature=[benefit,benefit1,benefit2,benefit3,benefit4,benefit5,benefit6,benefit7,benefit8,benefit9,benefit10,benefit11]

render()

function crops() {
    const text=document.getElementById('one')
    const item= text.value;
    nature.push(item)
    render()
}


function render(){
    document.getElementById('two').innerHTML='';
    nature.forEach(function plant(def) {
        let tree=document.createElement('div')
        tree.innerText=def
        list=document.getElementById('two')
        list.appendChild(tree)
    });
}