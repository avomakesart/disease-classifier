export const sortByDate = (arr: any) => {
  return arr.sort((a: any, b: any) => {
    return new Date(b.atDate).getTime() - new Date(a.atDate).getTime();
  });
};
