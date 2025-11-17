function printCurrentDate()
{
    //create Date class object
    let today = new Date();
    //17-11-2025
    let currentDate = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
    console.log(currentDate); 
}
//task
// create function that will display currentTime (hint use Date Class)
//call function
printCurrentDate();