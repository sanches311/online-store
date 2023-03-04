import Controlller from './controlller';

const getRoute = (): { name?: string; props: { id: number } } => {
  const route = window.location.hash.replace('#', '');
  const hash = route.split('/');
  return { name: hash[0], props: { id: Number(hash[1]) } };
};

const handleHash = (): void => {
  const { name, props } = getRoute();
  const nameRoute = `${name}Route`;
  if (name) {
    if (nameRoute === 'bookRoute') Controlller[nameRoute](props);
    if (nameRoute === 'cartRoute') Controlller[nameRoute]();
    if (nameRoute !== 'cartRoute' && nameRoute !== 'bookRoute') Controlller.notFoundRoute();
  } else Controlller.startRoute();
};

const initRoute = (): void => {
  window.addEventListener('hashchange', handleHash);
  handleHash();
};

export default initRoute;
