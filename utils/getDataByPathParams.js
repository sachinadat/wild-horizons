const getDataByPathParams = (data, locationName, locationType) => {
    return data.filter(d => d[locationName].toUpperCase() === locationType.toUpperCase())
}

export default getDataByPathParams
