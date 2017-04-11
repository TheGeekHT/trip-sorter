// @flow

export const capitalize = (str: any) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

export const trim = (str: String) => str.trim()

export const getCost = (item: Object) => +`${item.cost * (1 - (item.discount / 100))}`
