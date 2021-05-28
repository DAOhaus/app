export default (str) => {
    return str && str !== 'ETH'
      ? str.replace(str.substring(6,38), "...")
      : str
  }