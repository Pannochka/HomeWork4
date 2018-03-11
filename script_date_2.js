var date_now = new Date();

var shift = +prompt ("Введите количество дней", "");

var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", 
				"Четверг", "Пятница", "Суббота"];
var monthes = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
		"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
var date_after = new Date(date_now);

date_after.setDate(date_now.getDate() + shift)

var str = "Через " + shift + " дней будет вот такая дата:" + "\n" + 
		"День недели: " + days[date_after.getDay()] + "\n" +
		"Число: " + date_after.getDate() + "\n" +
		"Месяц: " + monthes[date_after.getMonth()] + "\n" +
		"Год: " + date_after.getFullYear() + "\n";

alert(str);
