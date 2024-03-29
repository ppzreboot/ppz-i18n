import { useLang } from 'ppz-i18n'

function useLangWithDate() {
  const t = useLang()
  return (date: Date) => t({
    en: 'Thu Mar 28 2024', // you can use [luxon](https://moment.github.io/luxon/) to get locale date string
    cn: '2024 年 3 月 28 日',
  })
}

export
function Format() {
  const t = useLang()
  const tDate = useLangWithDate()
  return <>
    <h2>{t({
      en: 'Special Object',
      cn: '特殊对象',
    })}</h2>
    <p>{tDate(new Date())}</p>
  </>
}
