import { getPeriodsList } from '@/utils/general'
import { useState } from 'react'

export const usePeriods = (rounds) => {
  const [periodList] = useState(getPeriodsList(rounds))
  const [currentPeriod, setCurrentPeriod] = useState(0)

  const nextPeriod = () => {
    if (currentPeriod === periodList.length - 1) {
      return setCurrentPeriod(0)
    }
    setCurrentPeriod(currentPeriod + 1)
  }

  return [periodList[currentPeriod], nextPeriod]
}
