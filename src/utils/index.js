export * from './colors'
export * from './dimension'
export * from './fonts'
export * from './constant'
export * from './storage'

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}