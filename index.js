import { useSyncExternalStore } from 'react'

const key = 'PPz-i18n@1711596014785'
let val = localStorage.getItem(key)
const subs = []

let default_lang = null
/** set default language */
export const setDefaultLang = lang => default_lang = lang

/** the current lang */
export const useLangVal = () =>
  useSyncExternalStore(
    listener => {
      subs.push(listener) // add listener
      return () => subs.splice(subs.indexOf(listener), 1) // remove listener
    },
    () => val || default_lang || 'en', // priority: user set > localStorage > default > 'en'
  )

/** the setter to lang */
export function useLangSet() {
  return _val => {
    localStorage.setItem(key, _val)
    val = _val
    subs.forEach(sub => sub())
  }
}

/** the state of lang (value and setter) */
export const useLangState = () => [useLangVal(), useLangSet()]

/** give me all languages, return you the right one */
export const useLang = () => {
  const lang = useLangVal()
  return trans => trans[lang]
}
