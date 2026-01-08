var connection = require('./connection');
var security = require('./security.js');
var MyEmail = require('./MyEmail.js');
//post route 
function register(request, response) {
    var { email, mobile, password } = request.body;
    if (email === undefined || mobile === undefined || password === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        let sql = "INSERT INTO `users`(`email`, `password`, `mobile`) VALUES (?,?,?)";
        security.getHashPassword(password).then(function (hashedPassword) {
            let values = [email, hashedPassword, mobile];
            connection.con.query(sql, values, function (error, result) {
                if (error) // error!=null means there is some issue/error in executing sql 
                {
                    console.log(error);
                    if (error.errno === 1062) //duplicate entry in unique field
                    {
                        response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'email/mobile is already registered with us' }]);
                    }
                    else {
                        response.json([{ 'error': 'oops, something went wrong, please try after sometimes' }]);
                    }
                    //log error into file
                }
                else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'registration successfull' }]);
                }
            });
        });

    }
}
function login(request, response) {
    let email = request.body.email;
    let password = request.body.password
    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        let sql = "select id,password from users where email=?"
        let values = [email];
        connection.con.query(sql, values, function (error, result) {
            if (error) {
                response.json([{ 'error': 'oops, something went wrong, please try after sometimes' }]);
            }
            else {
                if (result.length == 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid email address' }]);
                }
                else {
                    let hashedPassword = result[0]['password'];
                    security.comparePassword(password, hashedPassword).then((isPasswordMatched) => {
                        if (isPasswordMatched == false) {
                            response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid password' }]);
                        }
                        else {
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login successful' }, { 'id': result[0]['id'] }]);
                        }
                    });

                }
            }
        });
    }

}
function change_password(request, response) {
    let { id, password, new_password } = request.body;
    if (id === undefined || password === undefined || new_password === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        let sql = "select password from users where id=?";
        connection.con.query(sql, [id], function (error, result) {
            if (result.length === 0) {
                response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'password changed process failed' }]);
            }
            else {
                let hashedPassword = result[0]['password'];
                security.comparePassword(password, hashedPassword).then((isPasswordMatched) => {
                    if (isPasswordMatched === false) {
                        response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid password' }]);
                    }
                    else {
                        //hash new passsword
                        security.getHashPassword(new_password).then((newHashedPassword) => {
                            //store new password into users table using id 
                            sql = "update users set password = ? where id = ?";
                            values = [newHashedPassword, id]
                            connection.con.query(sql, values, function (e, res) {
                                if (e !== null) {
                                    response.json([{ 'error': 'oops, something went wrong, please try after sometimes' }]);
                                }
                                else {
                                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password changed successfully' }]);
                                }
                            });
                        });
                    }
                });
            }
        });
    }
}

function forgot_password(request, response) {
    let email = request.body.email;
    if (email === undefined) {
        response.json([{ 'error': 'input missing' }]);
    }
    else {
        //system check email exists in table or not 
        let sql = "select id from users where email = ?"
        connection.con.query(sql, [email], function (error, result) {
            if (error) {
                response.json([{ 'error': 'oops, something went wrong, please try after sometimes' }]);
            }
            else {
                if (result.length === 0) {
                    //email not found
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'email not found' }]);
                }
                else {
                    // if email found, system should send new random password on registered email address
                    let randomePassword = security.generateRandomgPassword(10)
                    //hash new password
                    //update newpassword into table using email
                    security.getHashPassword(randomePassword).then((hashedPassword) => {
                        sql = "update users set password = ? where email = ?";
                        values = [hashedPassword, email];
                        connection.con.query(sql, values, function (e, res) {
                            if (e !== null) {
                                response.json([{ 'error': 'oops, something went wrong, please try after sometimes' }]);
                            }
                            else {
                                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password recovery instruction has been sent to you' }]);
                                //send email 
                                let Gmail = new MyEmail.EMail();
                                subject = `Password Recover Email from the easylearn`;
                                message = `Congratulation ${email} <br/> we just recovered your account detail <br/> your new password is ${randomePassword}`
                                Gmail.send(email, subject, message);
                            }
                        });
                    });


                }
            }
        });
    }
}

module.exports.register = register;
module.exports.login = login;
module.exports.change_password = change_password;
module.exports.forgot_password = forgot_password;
