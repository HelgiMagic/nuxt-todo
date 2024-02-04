const mainUrl = 'https://65be2ef1dcfcce42a6f1fe89.mockapi.io/todos';

const routes = {
  main: () => mainUrl,
  certain: (id: number) => `${mainUrl}/${id}`,
};

export default routes;
