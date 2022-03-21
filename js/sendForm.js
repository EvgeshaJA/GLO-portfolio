// Tсли 1 форма на сайте

/*

const form = document.querySelector('.form-test-drive'); 

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form); // специальный метод для форм
    const body = {};  // создали тело формы, т.е. сюда будут попадать все вводимые пользователем данные

    formData.append('form', form.classList.value); // данная запись позволяет отслеживать с какой именно формы пришли данные (наименование класса в HTML). Метод принимает 2 аргумента: название и значение

    formData.forEach((value, field) => {  // универсальный вариант для всех полей ввода на всех модальных окнах
        body[field] = value;
    });

    // Тест формы ссылка https://jsonplaceholder.typicode.com/guide/. Данные проверяются в консоле во вкладке Network (Сеть)

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(body),  // заменяем данные из примера на данные тела формы
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  
  .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
  })
  .then(data => {
      //console.log(data); // или
    alert('Данные отправлены успешно!');
  })

  .catch(error => {
    //console.log(error.message);
    alert('Данные не отправлены!' + error.message);

  })

  .finally(() => {
    form.reset();
  });
});

*/

// Если несколько форм на сайте

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const formData = new FormData(form); // специальный метод для форм
        const body = {};  // создали тело формы, т.е. сюда будут попадать все вводимые пользователем данные
    
        formData.append('form', form.classList.value); // данная запись позволяет отслеживать с какой именно формы пришли данные (наименование класса в HTML). Метод принимает 2 аргумента: название и значение
    
        formData.forEach((value, field) => {  // универсальный вариант для всех полей ввода на всех модальных окнах
            body[field] = value;
        });
    
        // Тест формы ссылка https://jsonplaceholder.typicode.com/guide/. Данные проверяются в консоле во вкладке Network (Сеть)
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(body),  // заменяем данные из примера на данные тела формы
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      
      .then(response => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error(response.status);
          }
      })
      .then(data => {
          //console.log(data); // или
        alert('Данные отправлены успешно!');
      })
    
      .catch(error => {
        //console.log(error.message);
        alert('Данные не отправлены!' + error.message);
    
      })
    
      .finally(() => {
        form.reset();  // после отправления формы очищает ее
      });
    });
});
