//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно       
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    answers.push(event);
	return true;
    
}

function isAnswer2(x) {
    if (isNaN(x) || !isFinite(x)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (x < 1 || x > 3) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}



//console.log(answers); //раскомментировать для самопроверки


do {
    var x = +prompt('Введите номер вопроса, Ваш ответ на котрый хотите вывести \n -1 - Выход');
    var answer = 0;
    ok = false;
    if (x == -1) {
        break;
    }
    else {
        ok = isAnswer2(x);
    }

    switch(x){
        case 1:
            if(answers[0] == 1){          
                answer = works.a1;
                alert('Вопрос был следующий:\n' + works.a00 + '\n Ваш ответ был: \n' + answer);
                break;
            } else {
                answer = works.a2;
                alert('Вопрос был следующий:\n' + works.a00 + '\n Ваш ответ был: \n' + answer);
                break;
            }
            
        case 2: 
            if (answers[0] == 1) {
                if(answers[1] == 1){          
                    answer = works.b1;
                    alert('Вопрос был следующий:\n' + works.b00 + '\n Ваш ответ был: \n' + answer);
                    break;
            
                }   answer = works.b2;
                    alert('Вопрос был следующий:\n' + works.b00 + '\n Ваш ответ был: \n' + answer);
                    break;
            } else {
                if(answers[1] == 1){          
                    answer = works.c1;
                    alert('Вопрос был следующий:\n' + works.c00 + '\n Ваш ответ был: \n' + answer);
                    break;
            
                }   answer = works.c2;
                    alert('Вопрос был следующий:\n' + works.c00 + '\n Ваш ответ был: \n' + answer);
                    break;
            }
            
        case 3:
            if(answers[2] == 1){          
                answer = works.d1;
                alert('Вопрос был следующий:\n' + works.d00 + '\n Ваш ответ был: \n' + answer);
                break;
        
            }   answer = works.d2;
                alert('Вопрос был следующий:\n' + works.d00 + '\n Ваш ответ был: \n' + answer);
            break; 
     
    }
} while(!ok);



