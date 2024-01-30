const password1 = prompt("Введіть пароль");
let message = "Операцію скасовано";
const ADMIN_PASSWORD = "jqueryismyjam";

 
    if(password1 == null) {
        let message = "Операцію скасовано";
        console.log(message);
    }
    else if(password1 == ADMIN_PASSWORD) {
        let message = "Ласкаво просимо";
        console.log(message);
    }
    else {
        let message = "Доступ заборонено, невірний пароль";
        console.log(message);
    }