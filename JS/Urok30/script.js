"use strict";
    // использование строго режима для обработки данных

    let number = 1;
                //данные которые указываются без скобок = числа 
    let text = "Ismar";
                //данные которые заключены в скобки называются строки 'string'

    console.log(10*"ismar"); // NaN - означает не правильное использование синтаксиса
    console.log(number + text);
                    // текст + цифра = это будет означать операцию склеивания
                    // + это операция склеивания и сложения

    // true  = Истина
    // false = Ложь

    let number2 = false;
    console.log(number2);



    //console.log(unnown); // ошибка - is not defined = не определено

    // создание объекта начинается с фигурных скобок
    let obj = {
        name: "Alex",
        // name это название первого объекта
        // : это разделение между объектом и его значением
        // "" внутри ковычек указывается значение объекта
        // конец строки заканчивание на ,
        age: 26,
        location: "Kyrgyzstan"

        // в конце строки перед закрывающей фигурной скобки не указывается ,
    };

    //Первый вариант получения данных из объекта
    // console.log - это команда для вывода данных на экран
                        // obj - это переменна
                            // . это операция обращения к объекту
                                // name это название объекта 
    console.log("Name:" + obj.name + " Age:" + obj.age);
    
    //Второй вариант получения данных из объекта
                // obj - это переменна
                    // [] это указание позиции и уточнения объекта
                        // "" нужны для определения объекта
                            // name это название объекта
    console.log(obj["name"]);

    
    // Массивы
    // Массив создается с помощью квадратных скобок []
    // В массивах используются сразу значения
    // для получения значения необходимо использвоать порядковый номер
            //   0           1       2
    let arr = ["яблоко", "iphone", "pen"];

    console.log(arr.яблоко); //undefined не понятно - не определено
    
    
    console.log(arr[1]); // яблоко

    

    // Базовые функции / Взаимодействие с пользователем

    //console.log("Сообщение"); // - Данная команда нужна для того чтобы вывести сообщение в console в браузере
    
    //alert("Привет гость!"); // Модальное окно - системное - дизайн изменить нельзя!

    
    
    // var result = prompt('Сколько будет 2+2?', "");
    
    //prompt - состоит из 2 частей
    // 1 часть - вопрос
    // 2 часть - ответ по умолчанию

    // Prompt - запоминает введенный данные для дальнейшей обработки 
    // var msg;
    // if(result == "4") {
    //     msg = "Верно";
    // } else {
    //     msg = "НеВерно";
    // }
    
    // alert(msg);


    // var result = confirm("Результат сложения 2+2 будет равен 4?");

    // alert(result);



    // Условные операторы

    // Важно знать!
        // Операции сравнения всегда будут возвращать одно из след значений
        // TRUE  - истина
        // FALSE - ложь
    //alert(2 == 4); // == - операция сравнения
    
    // alert(8 > 4); // > - операция сравнения на большенство
    
    //alert(4 < 4); // > - операция сравнения на меньшенства

    // alert(4<=4); // Меньше или равно
    // alert(4>=5); // Больше или равно

    // alert(12 != 5); // Не равно!

    //alert("2" == 2);

    // Когда происходит операция сравнения Значения конвертируются в цифры
    // Все что заключено в ковычки это текст!
    // Все что без ковычек это числа

    //alert("2" === 2);
    // == сравнение значений (она конвертирует текста в цифры)
    // === сравнение типов данных + значения



    // Условные операторы

    // if - если 
    // else  - в противном случае

    // если 2 равно 2 то, выполни след условие, выведи на экран сообщение о том что "Ответ правильный!" в противном случае выведи на экран "Ответ не правильный"

    // если 2 равно 2
        // Решение: if (2==2)   

    // то
        // Решение: {

        // }
    
    //выведи на экран сообщение о том что
        // Решение: alert("Ответ правильный!")

    
    // в противном случае 
        // Решение: else {}

    // выведи на экран "Ответ не правильный"
        // Решение: alert("Ответ не правильный!")


    // Общее решение:

        if(4==2){
            alert("Ответ правильный!");
        } else {
            alert("Ответ неправильный!");
        }