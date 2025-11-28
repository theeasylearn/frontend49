var events = require('events');
//create function 
var count = 0;
let SendCoupon = function (receiver) {
    count++;
    console.log("we have send coupon to " + receiver + " count count =" + count);
}
let em = new events.EventEmitter();
em.addListener("coupon", SendCoupon);
let CheckCounponCount = function (receiver) {
    console.log('check coupon count.....');
    if (count >= 3) {
        em.removeListener("coupon", SendCoupon);
    }
}
em.addListener("coupon", CheckCounponCount);
em.emit("coupon",'ankit.patel@gmail.com');
em.emit("coupon",'diya.patel@gmail.com');
em.emit("coupon",'jiya.patel@gmail.com');
em.emit("coupon",'ram.patel@gmail.com');
em.emit("coupon",'sita.patel@gmail.com');