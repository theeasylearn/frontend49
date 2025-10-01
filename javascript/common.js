//reusable function
let $ = (tagID) => document.getElementById(tagID);

//multi-line arrow function
let val = (tagID, text = null) => {
    if (text === null)
        return $(tagID).value;
    else
        $(tagID).value = text;
}
let html = (tagID, text = null) => {
    if (text === null)
        return $(tagID).innerHTML;
    else
        $(tagID).innerHTML = text;
}