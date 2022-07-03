/**
 * It takes a number of seconds and returns an array of two numbers, the first being the number of
 * minutes and the second being the number of seconds
 * @param seconds - The number of seconds to convert to minutes and seconds.
 * @returns An array of two numbers.
 */
export function getMinutesAndSeconds(seconds) {
  const _minutes = Math.trunc(seconds / 60)
  const _seconds = seconds % 60
  return [_minutes, _seconds]
}

/**
 * If the number is less than 10, return a string with a 0 in front of the number, otherwise return the
 * number as a string.
 * @param number - The number to be converted to two digits.
 * @returns A string
 */
export function toTwoDigits(number) {
  return number < 10 ? `0${number}` : `${number}`
}

/**
 * It takes a number of seconds and returns a string of the form "MM : SS" where MM is the number of
 * minutes and SS is the number of seconds.
 * @param timeSeconds - The time in seconds that you want to format.
 */
export const getFormattedTime = (timeSeconds) => {
  const [minutes, seconds] = getMinutesAndSeconds(timeSeconds)
  return `${toTwoDigits(minutes)} : ${toTwoDigits(seconds)}`
}

/**
 * Convert minutes to seconds.
 * @param minutes - The number of minutes to convert to seconds.
 */
export const minutesToSeconds = (minutes) => minutes * 60

/**
 * Convert seconds to minutes by rounding the result of dividing seconds by 60.
 * @param seconds - The number of seconds to convert to minutes.
 */
export const secondsToMinutes = (seconds) => Math.round(seconds / 60)
