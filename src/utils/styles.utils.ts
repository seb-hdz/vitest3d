export const jn = (...classes: (string | undefined)[]) => {
  const initial = "";
  const styles = classes.reduce<string>((joined, current) => {
    if (!current) return joined;
    return joined + current.trim() + " ";
  }, initial);
  return styles.trim();
};
