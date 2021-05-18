export default (str) => {
    return str && str !== 'ETH'
      ? str.replace(str.substring(4,39), "...")
      : str
  }