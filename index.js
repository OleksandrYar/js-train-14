// Завдання 1
/**
 * Функція `getDateDetails` отримує об'єкт дати та повертає об'єкт з деякими деталями про дату.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт, який містить такі властивості:
 *  year - рік,
 *  month - місяць,
 *  day - день місяця.
 */
function getDateDetails(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Повертаємо об'єкт, що містить деякі деталі про вхідний об'єкт Date.
  return { year, month, day };
}

console.log("Завдання: 1 ==============================");
const now = new Date("2023-12-25T00:00:00Z");
console.log(getDateDetails(new Date("2023-12-25T00:00:00Z")));
//Виведе { year: 2023, month: 11, day: 25 }

// Завдання 2
/**
 * Функція `setDateDetails` приймає об'єкт Date і рядок ISO дати, і встановлює дату з ISO рядка в об'єкт Date.
 *
 * date - Об'єкт Date, в який потрібно встановити дату.
 * isoString - Рядок дати в форматі ISO.
 *
 * Повертає об'єкт Date з встановленою датою, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setDateDetails(date, isoString) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Перевірка, чи є вхідний ISO рядок валідним, отримавши дату з рядка та перевірити чи є результат числом,
  const newDate = Date.parse(isoString);
  if (!newDate === "number") {
    return "Помилка: недійсний ISO рядок";
  }
  //  якщо ні виводимо повідомлення "Помилка: недійсний ISO рядок"
  // Встановлюємо дату з ISO рядка в об'єкт Date.
  date.setTime(newDate);
  // Повертаємо об'єкт Date з встановленою датою.
  return date;
}

console.log("Завдання: 2 ==============================");
const date = new Date();
console.log(setDateDetails(date, "2023-12-25T00:00:00Z"));
//Виведе 2023-12-25T00:00:00.000Z

// Завдання 3
/**
 * Функція `dateToUTC` приймає об'єкт Date та повертає рядок, що представляє дату в UTC форматі.
 *
 * date - Об'єкт Date.
 *
 * Повертає рядок з датою в UTC форматі, якщо вхідне значення є дійсним об'єктом Date. Якщо ні, виводить повідомлення про помилку.
 */
function dateToUTC(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Повертаємо рядок з датою в UTC форматі.
  return date.toUTCString();
}

console.log("Завдання: 3 ==============================");
console.log(dateToUTC(new Date()));
//Виведе Tue, 27 Jun 2023 07:15:47 GMT

// Завдання 4
/**
 * Функція `setSpecificTime` приймає об'єкт Date та встановлює конкретний час.
 *
 * date - Об'єкт Date.
 * hours - Кількість годин.
 * minutes - Кількість хвилин.
 * seconds - Кількість секунд.
 * milliseconds - Кількість мілісекунд.
 *
 * Повертає об'єкт Date з встановленим часом, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setSpecificTime(date, hours, minutes, seconds, milliseconds) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Встановлюємо конкретний час в об'єкті Date за допомогою setHours.
  date.setHours(hours, minutes, seconds, milliseconds);
  // Повертаємо об'єкт Date з встановленим часом.
  return date;
}

console.log("Завдання: 4 ==============================");
console.log(
  setSpecificTime(new Date("2023-12-25T00:00:00.000Z"), 12, 30, 0, 0)
);
//Виведе 2023-12-25T09:30:00.000Z

// Завдання 5

/**
 * Функція `nextNewYear` приймає об'єкт Date і повертає час до наступного Нового року.
 *
 *
 * Повертає об'єкт з інформацією про час до наступного Нового року:
 * {
 *   days: // Кількість днів до Нового року.
 *   hours: // Кількість годин до Нового року, не включаючи повні дні.
 *   minutes: // Кількість хвилин до Нового року, не включаючи повні години.
 *   seconds: // Кількість секунд до Нового року, не включаючи повні хвилини.
 *   milliseconds: // Кількість мілісекунд до Нового року, не включаючи повні секунди.
 * }
 */
function nextNewYear() {
  // Створюєму змінну в яку записуємо поточну дату
  let currentDate = new Date();
  // Визначення поточного року.
  let currentYear = currentDate.getFullYear();
  // Визначення дати наступного Нового року. Для цього створюємо новий об`єкт Date в якому збільшуємо поточний рік на 1, встановлюємо місяць на 0 а дату на 1
  let nextYear = new Date(currentYear + 1, 0, 1);
  // Визначаємо кількість мілісекунд до наступного Нового року в змінну diff.
  let diff = nextYear - currentYear;
  // Розраховуємо кількість повних днів, годин, хвилин і секунд.
  let days = diff / (1000 * 60 * 60 * 24);
  // Дні:diff / (1000 * 60 * 60 * 24)
  let hours = (diff / (1000 * 60 * 60)) % 24;
  // Години:(diff / (1000 * 60 * 60)) % 24
  let minutes = (diff / (1000 * 60)) % 60;
  // Хвилини: (diff / (1000 * 60)) % 60;
  let seconds = (diff / 1000) % 60;
  // Секунди:(diff / 1000) % 60;
  let milliseconds = diff % 1000;
  // Мілісекунди:  diff % 1000;
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

console.log("Завдання:5  ==============================");

console.log(nextNewYear());
//Виведе

// Завдання 6
/**
 * Функція `isLeapYear` перевіряє, чи є рік високосним.
 *
 * year - Рік, який треба перевірити.
 *
 * Повертає об'єкт:
 * {
 *   year: // Рік, який був перевірений.
 *   isLeap: // Чи є рік високосним.
 * }
 */
function isLeapYear(year) {
  // Перевірка, чи є вхідне значення числом якщо ні повертаємо рядок .
  if (typeof year !== "number") {
    return "";
  }
  // Перевірка, чи є рік високосним.
  // Високосним вважається рік, який ділиться націло на 4
  let isLeap = false;
  if (year / 4) {
    isLeap = true;
  }
  // Повертаємо об'єкт з роком та інформацією про те, чи є він високосним.
  return { year, isLeap };
}
console.log("Завдання: 6 ==============================");

console.log(isLeapYear(2020));
//Виведе { year: 2020, isLeap: true }

// Завдання 7
/**
 * Функція `addDays` додає задану кількість днів до вказаної дати.
 *
 * date - Об'єкт Date.
 * days - Кількість днів, які треба додати.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   addedDays: // Кількість доданих днів.
 *   resultDate: // Результуюча дата в форматі 'гггг-мм-дд'.
 * }
 */
function addDays(date, days) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Перевірка, чи є кількість днів числом.
  if (typeof days !== "number") {
    return "Помилка: кількість днів має бути числом";
  }
  // Якщо days не є числом, функція поверне рядок
  // "Помилка: кількість днів має бути числом" та повертає undefined.
  // Збереження початкової дати для виведення в форматі ISO.
  let newDate = new Date(date);
  // Додавання заданої кількості днів до дати.
  newDate.setDate(newDate.getDate() + days);
  // Збереження результуючої дати для виведення в форматі ISO.
  let inputDate = date.toISOString();
  let resultDate = newDate.toISOString();
  // Повертаємо об'єкт з початковою датою, кількістю доданих днів та результуючою датою.
  return { inputDate, days, resultDate };
}

console.log("Завдання: 7 ==============================");

console.log(addDays(new Date("2023-01-01"), 7));
//Виведе
// {
//   inputDate: '2023-01-01T00:00:00.000Z',
//   addedDays: 7,
//   resultDate: '2023-01-08T00:00:00.000Z'
// }

// Завдання 8
/**
 * Функція `getDayOfWeek` повертає день тижня вказаної дати українською мовою.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   dayOfWeek: // День тижня українською мовою.
 * }
 */
let daysOfWeek = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п’ятниця",
  "субота",
];

function getDayOfWeek(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const inputDate = date.toISOString();

  const dayOfWeekIndex = date.getDay();

  const daysOfWeek = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
  ];

  const dayOfWeekName = daysOfWeek[dayOfWeekIndex];

  // Повертаємо об'єкт з початковою датою та днем тижня
  return { inputDate, dayOfWeek: dayOfWeekName };
}

console.log("Завдання: 8 ==============================");

console.log(getDayOfWeek(new Date("2023-01-01")));
//Виведе { inputDate: '2023-01-01T00:00:00.000Z', dayOfWeek: 'неділя' }

// Завдання 9
/**
 * Функція `getDaysInMonth` повертає кількість днів у місяці вказаної дати.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   daysInMonth: // Кількість днів у місяці.
 * }
 */
function getDaysInMonth(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Збереження початкової дати для виведення  в форматі ISO.
  let inputDate = date.toISOString();
  // Отримання поточного місяця.
  let month = date.getMonth();
  // Отримання поточного року.
  let year = date.getFullYear();
  // Створення об'єкта Date для першого дня наступного місяця.
  let newDay = new Date(year, month + 1, 1);
  // Віднімання одного дня від наступного місяця, щоб отримати останній день поточного місяця.
  let lastDay = new Date(newDay - 1);
  // Отримання числа останнього дня поточного місяця - це кількість днів у місяці.
  let daysInMonth = lastDay.getDate();
  // Повертаємо об'єкт з початковою датою та кількістю днів у місяці.
  return { inputDate, daysInMonth };
}
console.log("Завдання: 9 ==============================");

console.log(getDaysInMonth(new Date("2023-02-01")));
//Виведе { inputDate: '2023-02-01T00:00:00.000Z', daysInMonth: 28 }

// Завдання 10
/**
 * Функція `getFormattedTime` повертає час в форматі 'гг:хх:сс'.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   formattedTime: // Час в форматі 'гг:хх:сс'.
 * }
 */
function getFormattedTime(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Збереження початкової дати для виведення  в форматі ISO.
  let inputDate = date.toISOString();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  // Отримання годин.
  // Отримання хвилин.
  // Отримання секунд.
  // Форматування часу у вигляді 'гг:хх:сс', ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.
  let formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  // Повертаємо об'єкт з початковою датою та отформатованим часом.
  return { inputDate, formattedTime };
}
console.log("Завдання: 10 ==============================");

console.log(getFormattedTime(new Date("2023-12-25T09:30:00.000Z")));
//Виведе { inputDate: '2023-12-25T09:30:00.000Z', formattedTime: '12:30:00' }

// Завдання 11
/**
 * Функція `getAge` обчислює вік на підставі вказаної дати народження.
 *
 * birthDate - Об'єкт Date, представляє дату народження.
 *
 * Повертає об'єкт:
 * {
 *   birthDate: // Дата народження в форматі 'гггг-мм-дд'.
 *   age: // Обчислений вік.
 * }
 */
function getAge(birthDate) {
  // Перевірка, чи є вхідне значення об'єктом Date
  if (typeof birthDate.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  // Отримання поточної дати
  let currentDate = new Date();

  // Обчислення різниці в роках між поточною датою та датою народження
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Перевірка, чи поточна дата ще не пройшла день народження
  let monthDifference = currentDate.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Збереження дати народження для виведення в форматі ISO
  let dateOfBirth = birthDate.toISOString().split("T")[0]; // відділення дати від часу

  // Повертаємо об'єкт з датою народження та обчисленим віком
  return { birthDate: dateOfBirth, age: age };
}
console.log("Завдання: 11 ==============================");

console.log(getAge(new Date("1990-05-15")));
//Виведе { birthDate: '1990-05-15T00:00:00.000Z', age: 33 }

// Завдання 12
/**
 * Функція `compareDates` порівнює дві дати і повертає результат порівняння.
 *
 * date1 - Об'єкт Date.
 * date2 - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   date1: // Перша дата в форматі 'гггг-мм-дд'.
 *   date2: // Друга дата в форматі 'гггг-мм-дд'.
 *   comparison: // Результат порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
 * }
 */
function compareDates(date1, date2) {
  // Перевірка, чи є вхідні значення об'єктами Date.
  if (
    typeof date1.getTime !== "function" ||
    typeof date2.getTime !== "function"
  ) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
  // Якщо date1 або date2 не є об'єктами Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Порівняння дат і отримання результату порівняння
  let comparisonResult = date1.getTime() - date2.getTime();
  if (comparisonResult < 0) {
    comparisonResult = -1;
  } else if (comparisonResult > 0) {
    comparisonResult = 1;
  }

  // Форматування дат для виведення в форматі 'yyyy-mm-dd'
  let isoDate1 = date1.toISOString().split("T")[0]; // отримаємо лише дату
  let isoDate2 = date2.toISOString().split("T")[0]; // отримаємо лише дату

  // Повертаємо об'єкт з порівнюваними датами та результатом порівняння
  return { date1: isoDate1, date2: isoDate2, comparison: comparisonResult };
  // Порівняння дат і отримання результату порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
  // Збереження дат для виведення  в форматі ISO.
  // Повертаємо об'єкт з порівнюваними датами та результатом порівняння.
}
console.log("Завдання: 12 ==============================");

console.log(compareDates(new Date("2023-01-01"), new Date("2022-12-31")));
//Виведе
// {
//   date1: '2023-01-01T00:00:00.000Z',
//   date2: '2022-12-31T00:00:00.000Z',
//   comparison: 1
// }

// Завдання 13
/**
 * Функція `getDaysDifference` обчислює різницю в днях між двома датами.
 *
 * startDate - Початкова дата.
 * endDate - Кінцева дата.
 *
 * Повертає об'єкт:
 * {
 *   startDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   endDate: // Кінцева дата в форматі 'гггг-мм-дд'.
 *   daysDifference: // Різниця в днях між двома датами.
 * }
 */
function getDaysDifference(startDate, endDate) {
  // Перевірка, чи є вхідні значення об'єктами Date.
  if (
    typeof startDate.getTime !== "function" ||
    typeof endDate.getTime !== "function"
  ) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
  // Якщо startDate або endDate не є об'єктами Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Отримання часу в мілісекундах для початкової та кінцевої дати.
  let startMillis = startDate.getTime();
  let endMillis = endDate.getTime();
  // Різниця в мілісекундах між двома датами.
  let differenceMillis = endMillis - startMillis;
  // Перетворення різниці в мілісекундах у дні поділивши мілісекунди на (1000 * 60 * 60 * 24).
  let differenceDays = differenceMillis / (1000 * 60 * 60 * 24);
  // Збереження дат для виведення в форматі ISO.
  let isoStartDate = startDate.toISOString();
  let isoEndDate = endDate.toISOString();
  // Повертаємо об'єкт з початковою та кінцевою датами та різницею в днях.
  return { isoStartDate, isoEndDate, differenceDays };
}
console.log("Завдання: 13 ==============================");

console.log(getDaysDifference(new Date("2023-01-01"), new Date("2023-01-10")));
//Виведе
// {
//   startDate: '2023-01-01T00:00:00.000Z',
//   endDate: '2023-01-10T00:00:00.000Z',
//   daysDifference: 9
// }
