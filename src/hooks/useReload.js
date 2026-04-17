export function useReload() {
  const reload = () => {
    window.location.reload();
  };

  return reload;
}
