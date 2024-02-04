export default function getInputClass(name: 'title' | 'text' | 'date', errors: any) {
  if (errors?.value[name] === undefined) return 'modal-input';

  return errors?.value?.[name]?.length > 0 ? 'modal-input danger-border' : 'modal-input';
};
