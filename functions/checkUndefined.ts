type Values = {
  title: string | undefined,
  text: string | undefined,
  date: string | undefined,
}

export default function checkUndefined(values: Values) {
  if (values.title === null || values.title === undefined) throw new Error('value is undefined');
  
  if (values.text === null || values.text === undefined) throw new Error('text is undefined');

  if (values.date === null || values.date === undefined) throw new Error('date is undefined');
} 