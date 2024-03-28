import { useLang } from 'ppz-i18n'

export
function Basic() {
  const t = useLang()
  return <>
    <hgroup>
      <h1>PPz i18n</h1>
      <p>{
        t({
          en: 'A simple lib for i18n.',
          cn: '一个简单的 i18n 库。',
        })
      }</p>
    </hgroup>
  </>
}
