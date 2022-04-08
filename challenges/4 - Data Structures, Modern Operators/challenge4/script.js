const data = [
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
  "today_is_march"
]


const convertCamelCase = function (parms = [""]) {
  const pharaseConverted = parms.map((value) => {
    const [phrase, ...restPhase] = value.split("_");
    const camelCase = restPhase.map(
      value => value[0].toUpperCase() + value.slice(1).toLocaleLowerCase()
    )

    return phrase.concat(...camelCase);
  })

  return pharaseConverted
}

console.log(convertCamelCase(data))
console.log(data)