import { useLang, useLangState } from 'ppz-i18n'

export
function Setter() {
  const t = useLang()
  const [lang, setLang] = useLangState()
  return <>
    <h2>
      {t({
        en: 'choose a language ',
        cn: '选择语言 ',
      })}
    </h2>
    <select
      value={lang}
      onChange={evt =>
        setLang(evt.target.value)
      }
    >
      <option value='en'>English</option>
      <option value='cn'>中文</option>
    </select>
  </>
}
