# PPz i18n
`ppz-i18n` 是一个简单、实用、轻量的 react 多语言工具。
``` js
npm install ppz-i18n
```

+ 持久化用户的选择（到 localStorage）
+ 格式化特殊对象（如 Date，详见 [demo](./demo/src/usage/format.jsx)）
+ 源码（包括注释、空行）总共 40 行，文件小于 1kb（压缩、minify 前）

你可以在 10 分钟内：
+ 读完全部文档并掌握用法
+ 读完[全部源码](./index.js)
+ 应用到你的项目

下面就是所有文档。

#### 基础用法
> `ppz-i18n` 默认使用英语，无须任何配置

``` js
import { useLang } from 'ppz-i18n'

function Basic() {
  const t = useLang()
  return <div>{
    t({
      en: 'This is English.',
      cn: '这是中文。',
    })
  }</div>
}
```

如果需要[设置默认语言](./demo/src/main.jsx)，在 `main.js` 里：
``` js
import { setDefaultLang } from 'ppz-i18n'

setDefaultLang('cn')
```

#### 用户选择语言
``` js
import { useLangState } from 'ppz-i18n'

function Setter() {
  const [lang, setLang] = useLangState()
  return <select
    value={lang}
    onChange={evt =>
      setLang(evt.target.value)
    }
  >
    <option value='en'>English</option>
    <option value='cn'>中文</option>
  </select>
}
```

#### 特殊对象
有时对于特殊的数据（如 Date 对象）需要不同的本地化处理  
下面是一个处理 Date 的例子 

> 各种语言处理日期的方法，推荐使用 [luxon](https://moment.github.io/luxon/#/)）

``` js
import { useLang } from 'ppz-i18n'

function useLangWithDate() {
  const t = useLang()
  return date => t({
    en: 'Thu Mar 28 2024',
    cn: '2024 年 3 月 28 日',
  })
}

function SomeComponent() {
  const t = useLang()
  const tDate = useLangWithDate()
  return <p>
    {(t({
      en: 'Today is ',
      cn: '今天是 ',
    }))}
    {tDate(new Date())}
  </p>
}
```

> 另外，这里有一个 [demo](./demo)
