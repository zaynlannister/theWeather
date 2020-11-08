function checkWeather (weather) {
	var Chirchik = 25
	var Tashkent = 60
	var Antarktida = -20

	if (weather == "Chirchik") {
		console.log("Сейчас в Чирчике " + Chirchik + " градусов тепла, возможно будет дождь");
	} else if (weather == "Tashkent") {
		console.log("В Ташкенте сейчас " + Tashkent + " градусов, наденьте чапан и пейте горячий чай!");
	} else if (weather == "Antarktida") {
		console.log("На данный момент в Антарктиде " + Antarktida + " градусов, очень холодно. Оденьтесь потеплее :)");
	} else if (weather == "") {
		console.log("Введите название города");
	}
	  else {
		console.log("Извините , че то  у вас инет лагает походу");
	}
}

checkWeather("");
