function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  const diasmesli=document.querySelector('#days');
   for (let index = 0; index < dezDaysList.length; index+=1) {
     const cadadia= dezDaysList[index];

     let listaDias=document.createElement('li');
     listaDias.innerHTML=cadadia;
     
     diasmesli.appendChild(listaDias)
     listaDias.classList.add('day');

      
     if (cadadia===24 || cadadia===31){
    
       listaDias.classList.add('holiday')
     }
     if (cadadia===25){
       listaDias.classList.add('friday')
       listaDias.classList.add('holiday')
     }
      if(cadadia===18 || cadadia===11 || cadadia===18){
        listaDias.classList.add('friday')
      }

     }
     
   