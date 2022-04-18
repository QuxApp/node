function median(data) {
  if (data.length % 2) {
    return data[Math.floor(data.length/2)]
  } else {
    return (data[Math.floor(data.length/2) - 1] + data[Math.floor(data.length/2)])/2
  }
}

module.exports = median