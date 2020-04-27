export type SortType = "asc" | "desc";
export function compare<T>(
  sortType: SortType,
  a: T,
  b: T,
  orderBy: keyof T
): number {
  if (a[orderBy] === b[orderBy]) {
    return 0;
  }
  if (sortType === "desc") {
    return a[orderBy] > b[orderBy] ? -1 : 1;
  } else {
    return a[orderBy] < b[orderBy] ? -1 : 1;
  }
}

type CompareFunction<T> = (a: T, b: T) => number;

export function stableSort<T>(array: T[], compare: CompareFunction<T>) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = compare(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function getSorting<K>(
  order: SortType,
  orderBy: keyof K
): CompareFunction<K> {
  return (a, b) => compare(order, a, b, orderBy);
}
