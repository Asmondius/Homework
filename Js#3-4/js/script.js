//-----Wrapper-----//
var wrapper = document.createElement('div');
    wrapper.className = "wrapper";
//-----Текст вверху-----//
var head = document.createElement('p');
    head.className = "head";
    head.innerHTML = "Тест по програмированию:";
//-----Форма-----//
var questionForm = document.createElement('form');
    questionForm.className = "question__form";
//----Текст вопроса 1----//
var formText1 = document.createElement('p');
    formText1.className = "form__text";
    formText1.innerHTML = "Вопрос№1:";
//----Текст вопроса 2----//
var formText2 = document.createElement('p');
    formText2.className = "form__text";
    formText2.innerHTML = "Вопрос№2:";
//----Текст вопроса 3----//
var formText3 = document.createElement('p');
    formText3.className = "form__text";
    formText3.innerHTML = "Вопрос№3:";


var answerField1 = document.createElement('div');
    answerField1.className = "answer__field";

var answerField2 = document.createElement('div');
    answerField2.className = "answer__field";

var answerField3 = document.createElement('div');
    answerField3.className = "answer__field";

var answerField4 = document.createElement('div');
    answerField4.className = "answer__field";

var answerField5 = document.createElement('div');
    answerField5.className = "answer__field";

var answerField6 = document.createElement('div');
    answerField6.className = "answer__field";

var answerField7 = document.createElement('div');
    answerField7.className = "answer__field";

var answerField8 = document.createElement('div');
    answerField8.className = "answer__field";

var answerField9 = document.createElement('div');
    answerField9.className = "answer__field";


var TextBox1 = document.createElement('p');
    TextBox1.className = "Text__box 1";
    TextBox1.innerHTML = "Вариант Ответа №1";

var TextBox2 = document.createElement('p');
    TextBox2.className = "Text__box 2";
    TextBox2.innerHTML = "Вариант Ответа №2";

var TextBox3 = document.createElement('p');
    TextBox3.className = "Text__box 3";
    TextBox3.innerHTML = "Вариант Ответа №3";

var TextBox4 = document.createElement('p');
    TextBox4.className = "Text__box 4";
    TextBox4.innerHTML = "Вариант Ответа №1";

var TextBox5 = document.createElement('p');
    TextBox5.className = "Text__box 5";
    TextBox5.innerHTML = "Вариант Ответа №2";

var TextBox6 = document.createElement('p');
    TextBox6.className = "Text__box 6";
    TextBox6.innerHTML = "Вариант Ответа №3";

var TextBox7 = document.createElement('p');
    TextBox7.className = "Text__box 7";
    TextBox7.innerHTML = "Вариант Ответа №1";

var TextBox8 = document.createElement('p');
    TextBox8.className = "Text__box 8";
    TextBox8.innerHTML = "Вариант Ответа №2";

var TextBox9 = document.createElement('p');
    TextBox9.className = "Text__box 9";
    TextBox9.innerHTML = "Вариант Ответа №3";

var formAnswer1 = document.createElement('input');
    formAnswer1.className = "form__answer";
    formAnswer1.type = 'radio';
    formAnswer1.name = 'answer';

var formAnswer2 = document.createElement('input');
    formAnswer2.className = "form__answer";
    formAnswer2.type = 'radio';
    formAnswer2.name = 'answer';

var formAnswer3 = document.createElement('input');
    formAnswer3.className = "form__answer";
    formAnswer3.type = 'radio';
    formAnswer3.name = 'answer';

var formAnswer4 = document.createElement('input');
    formAnswer4.className = "form__answer";
    formAnswer4.type = 'radio';
    formAnswer4.name = 'answer';

var formAnswer5 = document.createElement('input');
    formAnswer5.className = "form__answer";
    formAnswer5.type = 'radio';
    formAnswer5.name = 'answer';

var formAnswer6 = document.createElement('input');
    formAnswer6.className = "form__answer";
    formAnswer6.type = 'radio';
    formAnswer6.name = 'answer';

var formAnswer7 = document.createElement('input');
    formAnswer7.className = "form__answer";
    formAnswer7.type = 'radio';
    formAnswer7.name = 'answer';

var formAnswer8 = document.createElement('input');
    formAnswer8.className = "form__answer";
    formAnswer8.type = 'radio';
    formAnswer8.name = 'answer';

var formAnswer9 = document.createElement('input');
    formAnswer9.className = "form__answer";
    formAnswer9.type = 'radio';
    formAnswer9.name = 'answer';

var formButton = document.createElement('input');
    formButton.className = "form__button";
    formButton.type = 'submit';
    formButton.value = "<<   Проверить мои результаты   >>";


document.body.appendChild(wrapper);
wrapper.appendChild(head);
//-----------//
wrapper.appendChild(questionForm);
// вопрос#1
questionForm.appendChild(formText1);
// поле1
questionForm.appendChild(answerField1);
answerField1.appendChild(formAnswer1);
answerField1.appendChild(TextBox1);
// поле2
questionForm.appendChild(answerField2);
answerField2.appendChild(formAnswer2);
answerField2.appendChild(TextBox2);
// поле3
questionForm.appendChild(answerField3);
answerField3.appendChild(formAnswer3);
answerField3.appendChild(TextBox3);

// вопрос#2
questionForm.appendChild(formText2);
// поле4
questionForm.appendChild(answerField4);
answerField4.appendChild(formAnswer4);
answerField4.appendChild(TextBox4);
// поле5
questionForm.appendChild(answerField5);
answerField5.appendChild(formAnswer5);
answerField5.appendChild(TextBox5);
// поле6
questionForm.appendChild(answerField6);
answerField6.appendChild(formAnswer6);
answerField6.appendChild(TextBox6);

// вопрос#3
questionForm.appendChild(formText3);
// поле7
questionForm.appendChild(answerField7);
answerField7.appendChild(formAnswer7);
answerField7.appendChild(TextBox7);
// поле8
questionForm.appendChild(answerField8);
answerField8.appendChild(formAnswer8);
answerField8.appendChild(TextBox8);
// поле9
questionForm.appendChild(answerField9);
answerField9.appendChild(formAnswer9);
answerField9.appendChild(TextBox9);

// Кнопка
questionForm.appendChild(formButton);











