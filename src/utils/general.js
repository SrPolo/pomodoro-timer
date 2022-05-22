export function getMinutesAndSeconds(seconds) {
  const _minutes = Math.trunc(seconds / 60)
  const _seconds = seconds % 60
  return [_minutes, _seconds]
}

export function toTwoDigits(number) {
  return number < 10 ? `0${number}` : `${number}`
}

export const getFormatedTime = (timeSeconds) => {
  const [minutes, seconds] = getMinutesAndSeconds(timeSeconds)
  return `${toTwoDigits(minutes)} : ${toTwoDigits(seconds)}`
}
