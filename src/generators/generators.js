export function* periodGenerator(periods) {
  while (true) yield* periods
}
