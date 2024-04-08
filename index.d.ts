/** set default language */
export
declare const setDefaultLang: (lang: string) => void

/** the current lang */
export
declare const useLangVal: () => string

type setter = (val: string) => void

/** the setter to lang */
export
declare function useLangSet(): setter

/** the state of lang (value and setter) */
export
declare const useLangState: () => [string, setter]

/** give me all languages, return you the right one */
export
declare const useLang: () => <K extends string, V>(trans: Record<K, V>) => V
