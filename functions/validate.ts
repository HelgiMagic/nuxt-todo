function required(value: string) {
  return value ? true : 'Это поле обязательно';
}

function textValidation(value: string) {
  if (required(value) !== true) return 'Это поле обязательно';

  return value.length > 2 ? true : 'Минимум 3 символа';
}

function dateValidation(value: string = '') {
  const dateArray = value.split('.');
  if (dateArray.length < 3) return 'Введите дату в формате DD.MM.YYYY';

  const [day, month, year] = dateArray;

  const numberDay = Number(day);
  const numberMonth = Number(month);
  const numberYear = Number(year);

  const errorMessage = 'Проверьте правильность указанных значений';

  if (isNaN(numberDay) || isNaN(numberMonth) || isNaN(numberYear)) return errorMessage;
  if (numberDay < 1 || numberMonth < 1 || numberYear < 1) return errorMessage;
  if (numberDay > 31 || numberMonth > 12 || numberYear < 2024) return errorMessage;

  return true;
}

export { required, textValidation, dateValidation };
