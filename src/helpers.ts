import { CURRENCY } from './constants'

export const thousands = val => {
    try {
        return parseInt(val).toLocaleString()
    } catch (e) {
        return '---'
    }
}

/**
 * Выводим оставшееся время до указанной даты
 * @param {Date} currentTimestamp - время, до которого нужно досчитать
 * @return {{s: number, d: number, h: number, m: number}} - форматированное время до указанной даты
 */
export const parseSecondsToRemainingTime = currentTimestamp => {
    const time = Math.floor((new Date(currentTimestamp).getTime() - Date.now()) / 1000)

    const days = Math.floor(time / (3600 * 24))
    const hours = Math.floor(time % (3600 * 24) / 3600) || '00'

    let result = 'Next change of life after '

    if (days) {
        result += `${days} day(s) ${hours} hours(s)`
    } else {
        result += `${hours} hours`
    }

    return result
}

export const currencyValue = (value : number = 1) => {
	return `${thousands(value)} ${CURRENCY}`
}
