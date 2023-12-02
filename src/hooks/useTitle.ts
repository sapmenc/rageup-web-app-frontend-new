const useTitle = () => {
  const setTitle = (title: string) => {
    document.title = title;
  };
  return {
    setTitle,
  };
};
export default useTitle;
