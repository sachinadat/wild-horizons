export const getDataByQueryParams = (data, queryObj) => {
  const validParams = ['country', 'continent', 'is_open_to_public']

  // If queryObj is missing or completely empty, skip filtering entirely
  if (!queryObj || Object.keys(queryObj).length === 0) return data

  const filteredData = data.filter(d => {
    return validParams.every(param => {
      const isParamPresent = Object.hasOwn(queryObj, param)

      if (!isParamPresent) {
        return true
      }
      
      const val1 = d[param]
      const val2 = queryObj[param]

      // 1. Handle Booleans explicitly using string matching
      if (typeof val1 === 'boolean') {
        if (val2 === 'true') return val1 === true
        if (val2 === 'false') return val1 === false
        return false // If val2 is nonsense like 'maybe', it doesn't match
      }

      // 2. Prevent crashes if the database value is null or undefined
      if (val1 === null || val1 === undefined) {
        return false
      }

      // 3. Fallback for strings (Safe Case-Insensitive Matching)
      // Wrapping in String() guarantees numbers like zip codes or IDs won't break
      return String(val1).toUpperCase() === String(val2).toUpperCase()
    })
  })

  return filteredData
}
