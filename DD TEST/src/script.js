const customHandler =  (e) => {
    e.preventDefault();
    let inputValue = document.querySelector('.input_date').value;
    alert(getDayInfo(inputValue));
}

const formElement = document.forms['date_form'];

formElement.addEventListener('submit', customHandler);

Date.prototype.getWeekOfMonth = function(exact) {
    let month = this.getMonth()
        , year = this.getFullYear()
        , firstWeekday = new Date(year, month, 1).getDay()
        , lastDateOfMonth = new Date(year, month + 1, 0).getDate()
        , offsetDate = this.getDate() + firstWeekday - 1
        , index = 1
        , weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7)
        , week = index + Math.floor(offsetDate / 7)
    ;
    if (exact || week < 2 + index) return week;
    return week === weeksInMonth ? index + 5 : week;
};


const getDayInfo = (date) => {
    const currentDate = new Date(date);
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const month = ['Января', 'Февраля', 'Марта', 'Апреля','Мая', 'Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря' ]

   return `${days[currentDate.getDay()]}, ${currentDate.getWeekOfMonth()} неделя ${month[currentDate.getMonth()]} ${currentDate.getFullYear()} года`
}

