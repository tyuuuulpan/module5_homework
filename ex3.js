let str = 'Hello'

console.log(
    str
    .split('')
    .reduceRight((a, e) =>
      a + e
    , ''))