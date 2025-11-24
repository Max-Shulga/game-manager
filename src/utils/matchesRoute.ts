const matchesRoute = (pathname: string, routes: string[]) =>
  routes.some((route) => (route === '/' ? pathname === '/' : pathname.startsWith(route)));
export { matchesRoute };
