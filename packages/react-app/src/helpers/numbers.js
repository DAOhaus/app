import web3 from 'web3'
const { isBN, toBN:_toBN, fromWei:_fromWei } = web3.utils

export const toBN = (n = 0) => {
  return _toBN(n);
}

export const fromWei = (n = 0, convertToString) => {
  const isBig = isBN(n)
  const internalNumber = isBig 
    ? n 
    : toBN(n)
  const final = _fromWei(internalNumber)
  return convertToString ? final.toString() : final
}