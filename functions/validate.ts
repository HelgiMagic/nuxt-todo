function required(value: string) {
  return value ? true : 'Это поле обязательно';
}

function textValidation(value: string) {
  if (required(value) !== true) return 'Это поле обязательно';

  return value.length > 2 ? true : 'Минимум 3 символа';
}

function dateValidation(value: string = '') {
  const dateArray = value.split('.');
  if (dateArray.length < 3) return 'Введите дату в формате DD.MM.YYY';

  const [day, month, year] = dateArray;
  if (
    day.length > 2 || day.length < 1 ||
    month.length > 2 || month.length < 1 ||
    year.length !== 4
  )
    return 'Введите дату в формате DD.MM.YYY';

  return true;
}

export { required, textValidation, dateValidation };
