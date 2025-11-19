function getCurrentDate() {
    let today = new Date();
    //17-11-2025
    let currentDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    return currentDate;
}
function getCurrentTime() {
    let today = new Date();
    let hours = today.getHours();
    let ampm = ' AM';
    if (hours > 12) {
        hours = hours - 12;
        ampm = ' PM';
    }
    let currentTime = hours + ":" + today.getMinutes() + ampm;
    return currentTime;
}

//export is required
module.exports.getDate = getCurrentDate;
module.exports.getTime = getCurrentTime;