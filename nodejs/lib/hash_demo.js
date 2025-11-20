const argon2 = require('argon2');
async function demo() {
    try {
        const hash = await argon2.hash("apple");
        console.log(hash);
        try {
            if (await argon2.verify(hash, "banana")) {
                console.log('password match')
            } else {
                console.log('invalid password')
                
            }
        } catch (err) {
            // internal failure
        }
    } catch (err) {
        //...
    }
}
demo();
