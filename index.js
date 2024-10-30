function saturdayFun(){
return `This Saturday, I want to roller-skate!`
}
function saturdayFun(someStr= "roller-skate"){
    return `This Saturday, I want to ${someStr}!`
}
function mondayWork(){
   return `This Monday, I will go to the office.` 
}
function mondayWork(someStr= "go to the office"){
    return `This Monday, I will ${someStr}.`
}
function wrapAdjective(wrapper){
return function (someStr){
    return `You are ${wrapper}${someStr}${wrapper}!`
}
}
