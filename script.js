const root = document.documentElement
// The last number goes up with every change; a release gets the next version number, such as 1.4. The date is DD-MM-YYYY.
const APP_VERSION = '1.5.5'
const APP_UPDATED = '25-10-2026'
const searchForm = document.getElementById('searchform')
const searchBox = document.getElementById('search')
const engineButton = document.getElementById('engine')
const clockTime = document.getElementById('time')
const clockDate = document.getElementById('date')
const modeButtons = document.querySelectorAll('[data-theme-value]')


const engines = [
  { name: 'Kagi', url: 'https://kagi.com/search?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" aria-hidden="true"><path d="M14.498 18.392h-5.14c-1.39 0-1.632-1.508-1.39-2.11.12-.302.423-.724.664-1.026a6.81 6.81 0 003.326.845 6.945 6.945 0 006.954-6.935c0-2.05-.907-3.86-2.298-5.186l.181-.181c.363-.362.907-.603 1.451-.543l.847.06V0h-1.451c-1.693 0-3.084 1.025-3.689 2.472a6.83 6.83 0 00-1.934-.301 6.945 6.945 0 00-6.954 6.935c0 1.507.484 2.954 1.33 4.1a1.84 1.84 0 01-.423.302l-.181.18c-1.391 1.327-2.056 3.015-1.693 4.945.181 1.025 1.088 2.11 1.995 2.714.605.422 1.39.603 2.177.603l5.804-.242c.665 0 1.27.302 1.633.905L16.432 24 20 22.794l-.605-1.327a5.425 5.425 0 00-4.897-3.075zm-2.48-12.543c1.814 0 3.326 1.508 3.326 3.317 0 1.809-1.512 3.316-3.325 3.316-1.814 0-3.326-1.507-3.326-3.316 0-1.87 1.451-3.317 3.325-3.317z"></path></svg>` },
  { name: 'Brave', url: 'https://search.brave.com/search?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" aria-hidden="true"><path d="M17.544 2.375c.017-.005 1.844-.5 2.712.361.872.872 1.588 1.642 1.588 1.642l-.565 1.38v-.003.006-.003L22 7.8c-.014.05-2.112 7.983-2.357 8.954-.488 1.924-.819 2.663-2.202 3.638a212.634 212.634 0 01-4.305 2.917c-.41.252-.92.691-1.383.691-.463 0-.974-.439-1.383-.691a213.099 213.099 0 01-4.306-2.917c-1.383-.975-1.72-1.714-2.2-3.632-.246-.977-2.35-8.904-2.364-8.96l.722-2.045-.566-1.383s.722-.764 1.594-1.63c.866-.872 2.712-.36 2.712-.36L8.066 0h7.373l2.105 2.375zm-5.797 12.557c-.138 0-1.04.318-1.762.691l-.457.234c-.487.253-.823.428-.956.506-.168.108-.066.306.09.414.15.103 2.195 1.684 2.394 1.865l.09.078c.186.168.432.391.607.391.174 0 .415-.223.607-.391l.084-.078c.2-.169 2.244-1.756 2.394-1.865.15-.108.258-.3.09-.408-.133-.084-.475-.253-.956-.506h-.006l-.457-.24c-.722-.373-1.623-.691-1.762-.691zm.006-11.276c-.35.02-.694.092-1.023.211l-.378.126c-.493.169-.969.331-1.21.331-.312 0-2.554-.428-2.584-.433 0 0-2.706 3.26-2.706 3.957 0 .577.228.805.504 1.07l.174.175 2.033 2.152.06.067c.204.204.5.498.29.998l-.043.102c-.228.535-.511 1.203-.15 1.876.384.716 1.046 1.19 1.467 1.118.42-.084 1.419-.601 1.78-.841.367-.229 1.52-1.19 1.521-1.551 0-.307-.829-.812-1.238-1.053l-.18-.12-.199-.12c-.367-.229-1.035-.644-1.047-.825-.018-.228-.017-.294.283-.853l.21-.379c.289-.487.602-1.029.536-1.426-.085-.433-.777-.685-1.36-.901l-.21-.078-.613-.229c-.583-.222-1.232-.463-1.34-.511-.145-.073-.11-.132.335-.174l.223-.025c.553-.06 1.582-.168 2.08-.03l.32.09c.564.145 1.25.337 1.316.445l.03.048c.067.09.109.145.037.53l-.121.607c-.15.806-.391 2.069-.421 2.351l-.012.115c-.042.312-.066.529.301.613.438.119.884.206 1.335.259.216 0 .824-.144 1.24-.24l.095-.025c.367-.078.343-.289.3-.602l-.011-.12c-.03-.282-.27-1.54-.42-2.345l-.122-.614c-.072-.384-.024-.439.036-.529l.03-.048c.067-.108.753-.294 1.318-.444l.318-.091c.5-.138 1.528-.03 2.081.03l.216.018c.451.048.493.108.343.18-.11.049-.758.29-1.341.512-.273.108-.547.21-.823.307-.583.216-1.275.468-1.36.907-.066.391.247.939.535 1.42l.21.379c.301.56.308.625.284.854-.012.18-.68.595-1.053.824l-.192.126-.181.108c-.41.247-1.238.758-1.238 1.059 0 .367 1.16 1.316 1.521 1.55.367.235 1.36.758 1.78.836.421.078 1.082-.396 1.467-1.112.36-.673.078-1.335-.15-1.876l-.042-.102c-.21-.5.084-.794.289-1.004l.065-.06 2.02-2.147.181-.181c.271-.265.505-.493.505-1.07 0-.698-2.706-3.957-2.706-3.957-.03.006-2.275.44-2.586.44l.007-.007c-.252 0-.722-.156-1.215-.337l-.379-.12c-.612-.21-1.02-.21-1.022-.21z"></path></svg>` },
  { name: 'Google', url: 'https://www.google.com/search?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" aria-hidden="true"><path d="M23 12.245c0-.905-.075-1.565-.236-2.25h-10.54v4.083h6.186c-.124 1.014-.797 2.542-2.294 3.569l-.021.136 3.332 2.53.23.022C21.779 18.417 23 15.593 23 12.245z"></path><path d="M12.225 23c3.03 0 5.574-.978 7.433-2.665l-3.542-2.688c-.948.648-2.22 1.1-3.891 1.1a6.745 6.745 0 01-6.386-4.572l-.132.011-3.465 2.628-.045.124C4.043 20.531 7.835 23 12.225 23z"></path><path d="M5.84 14.175A6.65 6.65 0 015.463 12c0-.758.138-1.491.361-2.175l-.006-.147-3.508-2.67-.115.054A10.831 10.831 0 001 12c0 1.772.436 3.447 1.197 4.938l3.642-2.763z"></path><path d="M12.225 5.253c2.108 0 3.529.892 4.34 1.638l3.167-3.031C17.787 2.088 15.255 1 12.225 1 7.834 1 4.043 3.469 2.197 7.062l3.63 2.763a6.77 6.77 0 016.398-4.572z"></path></svg>` },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 .984C18.083.984 23.016 5.916 23.016 12S18.084 23.016 12 23.016.984 18.084.984 12C.984 5.917 5.916.984 12 .984zm0 .938C6.434 1.922 1.922 6.434 1.922 12c0 4.437 2.867 8.205 6.85 9.55-.237-.82-.776-2.753-1.6-6.052-1.184-4.741-2.064-8.606 2.379-9.813.047-.011.064-.064.03-.093-.514-.467-1.382-.548-2.233-.38a.06.06 0 0 1-.07-.058c0-.011 0-.023.011-.035.205-.286.572-.507.822-.64a1.843 1.843 0 0 0-.607-.335c-.059-.022-.059-.12-.006-.144.006-.006.012-.012.024-.012 1.749-.233 3.586.292 4.49 1.448.011.011.023.017.035.023 2.968.635 3.509 4.837 3.328 5.998a9.607 9.607 0 0 0 2.346-.576c.746-.286 1.008-.222 1.101-.053.1.193-.018.513-.28.81-.496.567-1.393 1.01-2.974 1.137-.546.044-1.029.024-1.445.006-.789-.035-1.339-.059-1.633.39-.192.298-.041.998 1.487 1.22 1.09.157 2.078.047 2.798-.034.643-.07 1.073-.118 1.172.069.21.402-.996 1.207-3.066 1.224-.158 0-.315-.006-.467-.011-1.283-.065-2.227-.414-2.816-.735a.094.094 0 0 1-.035-.017c-.105-.059-.31.045-.188.267.07.134.444.478 1.004.776-.058.466.087 1.184.338 2l.088-.016c.041-.009.087-.019.134-.025.507-.082.775.012.926.175.717-.536 1.913-1.294 2.03-1.154.583.694.66 2.332.53 2.99-.004.012-.017.024-.04.035-.274.117-1.783-.296-1.783-.511-.059-1.075-.26-1.173-.493-1.225h-.156c.006.006.012.018.018.03l.052.12c.093.257.24 1.063.13 1.26-.112.199-.835.297-1.284.303-.443.006-.543-.158-.637-.408-.07-.204-.103-.675-.103-.95a.857.857 0 0 1 .012-.216c-.134.058-.333.193-.397.281-.017.262-.017.682.123 1.149.07.221-1.518 1.164-1.74.99-.227-.181-.634-1.952-.459-2.67-.187.017-.338.075-.42.191-.367.508.093 2.933.582 3.248.257.169 1.54-.553 2.176-1.095.105.145.305.158.553.158.326-.012.782-.06 1.103-.158.192.45.423.972.613 1.388 4.47-1.032 7.803-5.037 7.803-9.82 0-5.566-4.512-10.078-10.078-10.078zm1.791 5.646c-.42 0-.678.146-.795.332-.023.047.047.094.094.07.14-.075.357-.161.701-.156.328.006.516.09.67.159l.023.01c.041.017.088-.03.059-.065-.134-.18-.332-.35-.752-.35zm-5.078.198a1.24 1.24 0 0 0-.522.082c-.454.169-.67.526-.67.76 0 .051.112.057.141.011.081-.123.21-.31.617-.478.408-.17.73-.146.951-.094.047.012.083-.041.041-.07a.989.989 0 0 0-.558-.211zm5.434 1.423a.651.651 0 0 0-.655.647.652.652 0 0 0 1.307 0 .646.646 0 0 0-.652-.647zm.283.262h.008a.17.17 0 0 1 .17.17c0 .093-.077.17-.17.17a.17.17 0 0 1-.17-.17c0-.09.072-.165.162-.17zm-5.358.076a.752.752 0 0 0-.758.758c0 .42.338.758.758.758s.758-.337.758-.758a.756.756 0 0 0-.758-.758zm.328.303h.01c.112 0 .2.089.2.2 0 .11-.088.197-.2.197a.195.195 0 0 1-.197-.198c0-.107.082-.194.187-.199z"/></svg>` }
]

// DuckDuckGo is the default until the visitor picks another engine.
let engine = engines.findIndex((e) => e.name === 'DuckDuckGo')
try {
  const saved = engines.findIndex((e) => e.name === localStorage.getItem('engine'))
  if (saved >= 0) engine = saved
} catch {}

const showEngine = () => {
  const copy = text[pageLang] || text.en
  engineButton.innerHTML = engines[engine].icon
  engineButton.title = copy.engineLabel.replace('{name}', engines[engine].name)
  engineButton.setAttribute('aria-label', engineButton.title)
}

engineButton.addEventListener('click', () => {
  engine = (engine + 1) % engines.length
  showEngine()
  try { localStorage.setItem('engine', engines[engine].name) } catch {}
  searchBox.focus()
})

// Enter submits the form; preventDefault keeps the page from reloading.
// An empty submit gets a short hint in the field instead of doing nothing.
let hintTimer
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const value = searchBox.value.trim()
  if (value.length > 0) {
    const url = engines[engine].url + encodeURIComponent(value)
    if (searchNewTab) window.open(url, '_blank', 'noopener')
    else location.href = url
    return
  }
  searchBox.value = ''
  searchBox.focus()
  clearTimeout(hintTimer)
})

// Clock: click the time to cycle through 24-hour, 12-hour (AM/PM) and full time (with ticking seconds
// and still colons). Hover shows the time zone.
const clockModes = ['24', '12', 'full']
let clockMode = '24'
try {
  const saved = localStorage.getItem('clockFormat')
  if (clockModes.includes(saved)) clockMode = saved
} catch {}

// Date: click to switch between the long date and a short numeric date in the page language; hover shows the ISO week and day of the year.
let dateNumeric = false
try { dateNumeric = localStorage.getItem('dateFormat') === 'numeric' } catch {}
// The order of the short date: from the browser's own setting, or one the visitor chose in Advanced.
const dateOrders = ['auto', 'dmy', 'mdy', 'ymd']
const dateOrderLocale = { auto: null, dmy: 'en-GB', mdy: 'en-US', ymd: 'sv-SE' }
let dateOrder = 'auto'
// Whether the date is shown at all; Minimal leaves it out.
let dateOn = true
try { dateOn = localStorage.getItem('showDate') !== 'off' } catch {}
try { if (dateOrders.includes(localStorage.getItem('dateNotation'))) dateOrder = localStorage.getItem('dateNotation') } catch {}

const isoWeek = (d) => {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const day = t.getUTCDay() || 7
  t.setUTCDate(t.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1))
  return Math.ceil(((t - yearStart) / 864e5 + 1) / 7)
}
// Round, not floor: daylight saving shifts the difference by an hour.
const dayOfYear = (d) => Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - new Date(d.getFullYear(), 0, 0)) / 864e5)
const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0

// Each colon is its own element, so the full time can style them separately.
const colon = () => Object.assign(document.createElement('span'), { className: 'colon', textContent: ':' })

// The date and the week title follow the browser language. Kept here, before the text tables.
const LANG_CHOICES = ['nl', 'en', 'de', 'fr', 'es', 'zh']
// A language chosen in Advanced settings wins; with no saved choice the page follows the browser.
const pageLang = (() => {
  let saved = null
  try { saved = localStorage.getItem('lang') } catch {}
  return LANG_CHOICES.includes(saved) ? saved : (navigator.language || 'en').slice(0, 2).toLowerCase()
})()
const dateLocales = { en: 'en-GB', nl: 'nl-NL', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', zh: 'zh-CN' }
const weekWords = { en: ['Week', 'day', 'of'], nl: ['Week', 'dag', 'van'], de: ['Woche', 'Tag', 'von'], fr: ['Semaine', 'jour', 'sur'], es: ['Semana', 'día', 'de'], zh: ['第', '天，共', '天'] }
const [weekWord, dayWord, ofWord] = weekWords[pageLang] || weekWords.en
let clockClickHint = ''
const updateClock = () => {
  const now = new Date()
  const full = clockMode === 'full'
  const time = now.toLocaleTimeString(
    clockMode === '12' ? 'en-US' : 'en-GB',
    full
      ? { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }
      : { hour: '2-digit', minute: '2-digit', hour12: clockMode === '12' }
  )
  // The short date follows the page language: 11-10-2026 in Dutch, 11.10.2026 in German, 2026/10/11 in Chinese.
  const date = dateNumeric
    ? now.toLocaleDateString(dateOrderLocale[dateOrder] || navigator.language || 'en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
    : now.toLocaleDateString(dateLocales[pageLang] || 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  const offset = -now.getTimezoneOffset()
  const sign = offset >= 0 ? '+' : '-'
  const hh = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0')
  const mm = String(Math.abs(offset) % 60).padStart(2, '0')
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local time'
  if (full) {
    const [hours, minutes, seconds] = time.split(':')
    clockTime.replaceChildren(hours, colon(), minutes, colon(), seconds)
  } else {
    clockTime.textContent = time
  }
  clockTime.dateTime = now.toISOString()
  clockTime.title = clockClickHint ? `${clockClickHint} · ${zone} (UTC${sign}${hh}:${mm})` : `${zone} (UTC${sign}${hh}:${mm})`
  clockDate.textContent = date
  clockDate.hidden = !dateOn
  clockDate.title = `${weekWord} ${isoWeek(now)} · ${dayWord} ${dayOfYear(now)} ${ofWord} ${isLeap(now.getFullYear()) ? 366 : 365}`
}
updateClock()
// Once a second, so the seconds in full time tick; the other modes only change once a minute.
setInterval(updateClock, 1000)

// Setting the date style or order from the page and from Advanced is the same setting.
const setDateStyle = (numeric) => {
  dateNumeric = numeric
  try { localStorage.setItem('dateFormat', dateNumeric ? 'numeric' : 'long') } catch {}
  settingsFields.dateStyle.value = dateNumeric ? 'short' : 'long'
  updateClock()
}
const setDateOrder = (order) => {
  dateOrder = order
  try { localStorage.setItem('dateNotation', dateOrder) } catch {}
  settingsFields.dateOrder.value = dateOrder
  updateClock()
}
clockDate.addEventListener('click', () => setDateStyle(!dateNumeric))

// The clock format can be changed by clicking the time, or chosen in Advanced; both keep the same setting.
const setClockMode = (mode) => {
  clockMode = mode
  try { localStorage.setItem('clockFormat', clockMode) } catch {}
  settingsFields.clock.value = clockMode
  settingsFields.dateStyle.value = dateNumeric ? 'short' : 'long'
  settingsFields.dateOrder.value = dateOrder
  settingsFields.date.checked = dateOn
  updateClock()
}
clockTime.addEventListener('click', () => setClockMode(clockModes[(clockModes.indexOf(clockMode) + 1) % clockModes.length]))

// Weather is off until you turn it on. It finds your place from your IP address (ipapi.co) or from a city
// you enter (Open-Meteo search), then asks Open-Meteo for the forecast. Both send data outside this page.
const weatherButton = document.getElementById('weather-button')
const weatherDetail = document.getElementById('weather-detail')
const settingsButton = document.getElementById('settings-button')
const topLangSelect = document.getElementById('top-lang')
const topLangGroup = document.getElementById('top-lang-group')
const settings = document.getElementById('settings')
// On a phone the slider is replaced by a button that steps through a few colours, so a tap is enough.
const tintCycle = document.getElementById('tint-cycle')
const TINT_STEPS = [0, 210, 40, 140, 340, 270]
const settingsFields = {
  weather: document.getElementById('set-weather'),
  locIp: document.getElementById('loc-ip'),
  locCity: document.getElementById('loc-city'),
  quote: document.getElementById('set-quote'),
  lang: document.getElementById('set-lang'),
  zones: document.getElementById('set-zones'),
  wallpaper: document.getElementById('set-wallpaper'),
  tint: document.getElementById('set-tint'),
  wallpaperButton: document.getElementById('set-wallpaper-btn'),
  links: document.getElementById('set-links'),
  linksOwn: document.getElementById('set-links-own'),
  askai: document.getElementById('set-askai'),
  searchNewTab: document.getElementById('set-search-newtab'),
  aiNewTab: document.getElementById('set-ai-newtab'),
  clock: document.getElementById('set-clock'),
  date: document.getElementById('set-date'),
  dateStyle: document.getElementById('set-date-style'),
  dateOrder: document.getElementById('set-date-order'),
  preset: document.querySelectorAll('input[name="preset"]'),
  cityForm: document.getElementById('city-form'),
  cityInput: document.getElementById('city-input'),
  cityClear: document.getElementById('city-clear'),
  cityMessage: document.getElementById('city-msg'),
  resetSettings: document.getElementById('reset-settings'),
  resetData: document.getElementById('reset-data'),
}

const readFlag = (key, fallback) => {
  try { return localStorage.getItem(key) === null ? fallback : localStorage.getItem(key) === 'on' } catch { return fallback }
}
const writeKey = (key, value) => { try { localStorage.setItem(key, value) } catch {} }

let weatherOn = readFlag('weather', false)
let quoteOn = readFlag('quote', false)
// The last IP lookup, kept with its time. It is asked for only when the weather needs it, or when the visitor
// checks it in settings; the page does not ask for the display alone.
let lastIpRecord = null
try { lastIpRecord = JSON.parse(localStorage.getItem('lastIp') || 'null') } catch {}
const ipLookup = async (fresh = false) => {
  const info = await fetchCached('ipInfo', 10 * 60e3, 'https://ipapi.co/json/', fresh)
  lastIpRecord = { ip: info.ip, data: info, at: Date.now() }
  writeKey('lastIp', JSON.stringify(lastIpRecord))
  return info
}
const ipValue = document.getElementById('ip-value')
const ipMeta = document.getElementById('ip-meta')
const ipCheck = document.getElementById('ip-check')
const ipStatus = document.getElementById('ip-status')
const ipList = document.getElementById('ip-list')
const ipOpen = document.getElementById('ip-open')
const ipWindow = document.getElementById('ip-window')
// The window shows the last requested address with its time and the fields the lookup returns.
// A field the service left out shows a dash.
const renderIp = () => {
  const rec = lastIpRecord
  const d = rec && rec.data
  ipValue.textContent = rec ? rec.ip : t.ipNone
  ipMeta.textContent = rec ? `${t.ipFieldAt}: ${new Date(rec.at).toLocaleString(uiLang)}` : ''
  ipCheck.textContent = rec ? t.ipCheckAgain : t.ipCheckFirst
  const dash = (v) => (v === undefined || v === null || v === '' ? '—' : String(v))
  const rows = d ? [
    [t.ipFieldPlace, d.city], [t.ipFieldRegion, d.region], [t.ipFieldCountry, d.country_name],
    [t.ipFieldPostal, d.postal], [t.ipFieldProvider, d.org], [t.ipFieldAsn, d.asn], [t.ipFieldNetwork, d.network],
    [t.ipFieldTimezone, d.timezone], [t.ipFieldCoords, d.latitude != null && d.longitude != null ? `${d.latitude}, ${d.longitude}` : '']
  ] : []
  ipList.replaceChildren(...rows.flatMap(([label, value]) => [el('dt', '', label), el('dd', '', dash(value))]))
  ipList.hidden = !d
}
// Checking asks now; the weather follows if it uses the IP address.
const checkIp = async () => {
  ipCheck.disabled = true
  ipStatus.textContent = t.loading
  try {
    await ipLookup(true)
  } catch {
    ipStatus.textContent = t.ipFailed
    ipCheck.disabled = false
    return
  }
  ipStatus.textContent = ''
  ipCheck.disabled = false
  renderIp()
  if (weatherOn && locationMode === 'ip') showWeather()
}
ipCheck.addEventListener('click', checkIp)

const openIpWindow = () => {
  ipWindow.hidden = false
  ipWindow.querySelector('.settings-panel').focus()
}
const closeIpWindow = () => { ipWindow.hidden = true; ipOpen.focus() }
ipOpen.addEventListener('click', openIpWindow)
document.getElementById('ip-window-close').addEventListener('click', closeIpWindow)
ipWindow.addEventListener('click', (e) => { if (e.target === ipWindow) closeIpWindow() })

let city = null
try { city = JSON.parse(localStorage.getItem('city') || 'null') } catch {}
// 'ip' finds the place from the IP address; 'city' uses the city the visitor entered.
let locationMode = city ? 'city' : 'ip'
try {
  const saved = localStorage.getItem('location')
  if (saved === 'ip' || saved === 'city') locationMode = saved
} catch {}

const uiLang = pageLang
const weatherWords = {
  en: { clear: 'Clear', mostly: 'Mostly clear', partly: 'Partly cloudy', cloudy: 'Cloudy', fog: 'Fog', drizzle: 'Drizzle', rain: 'Rain', heavyRain: 'Heavy rain', snow: 'Snow', heavySnow: 'Heavy snow', showers: 'Showers', heavyShowers: 'Heavy showers', storm: 'Thunderstorm' },
  nl: { clear: 'Helder', mostly: 'Overwegend helder', partly: 'Deels bewolkt', cloudy: 'Bewolkt', fog: 'Mist', drizzle: 'Motregen', rain: 'Regen', heavyRain: 'Zware regen', snow: 'Sneeuw', heavySnow: 'Zware sneeuw', showers: 'Buien', heavyShowers: 'Zware buien', storm: 'Onweer' },
  de: { clear: 'Klar', mostly: 'Überwiegend klar', partly: 'Teilweise bewölkt', cloudy: 'Bewölkt', fog: 'Nebel', drizzle: 'Nieselregen', rain: 'Regen', heavyRain: 'Starker Regen', snow: 'Schnee', heavySnow: 'Starker Schnee', showers: 'Schauer', heavyShowers: 'Starke Schauer', storm: 'Gewitter' },
  fr: { clear: 'Dégagé', mostly: 'Plutôt dégagé', partly: 'Partiellement nuageux', cloudy: 'Nuageux', fog: 'Brouillard', drizzle: 'Bruine', rain: 'Pluie', heavyRain: 'Forte pluie', snow: 'Neige', heavySnow: 'Forte neige', showers: 'Averses', heavyShowers: 'Fortes averses', storm: 'Orage' },
  es: { clear: 'Despejado', mostly: 'Mayormente despejado', partly: 'Parcialmente nublado', cloudy: 'Nublado', fog: 'Niebla', drizzle: 'Llovizna', rain: 'Lluvia', heavyRain: 'Lluvia intensa', snow: 'Nieve', heavySnow: 'Nieve intensa', showers: 'Chubascos', heavyShowers: 'Chubascos intensos', storm: 'Tormenta' },
  zh: { clear: '晴', mostly: '大部晴朗', partly: '局部多云', cloudy: '多云', fog: '雾', drizzle: '毛毛雨', rain: '雨', heavyRain: '大雨', snow: '雪', heavySnow: '大雪', showers: '阵雨', heavyShowers: '强阵雨', storm: '雷暴' },
}
const text = {
  en: { show: 'Show weather', hide: 'Hide weather', loading: 'Loading…', unavailable: 'Weather unavailable', noSource: 'Set a city in settings', ip: 'Internet IP', title: 'Settings', hint: 'Press ? to open this panel and Esc to close it.', weather: 'On', lookup: 'Find my city from my IP address', cityLabel: 'Or enter a city', save: 'Save', clearCity: 'Use my IP address instead', notFound: 'City not found', quote: 'Quote', privacy: 'Weather sends your IP address to ipapi.co, or the city you enter to Open-Meteo, and only while weather is on. Custom AI shortcuts also load their icon from their own site.', resetSettings: 'Reset settings', resetData: 'Delete my data', resetDataConfirm: 'Delete your custom links, AI shortcuts, time zones and your city? This cannot be undone.', resetSettingsConfirm: 'Reset all settings to their defaults? Your links, AI shortcuts, time zones and city stay. This cannot be undone.', close: 'Close', open: 'Settings' },
  nl: { show: 'Toon weer', hide: 'Verberg weer', loading: 'Laden…', unavailable: 'Weer niet beschikbaar', noSource: 'Stel een plaats in bij instellingen', ip: 'Internet-IP', title: 'Instellingen', hint: 'Druk op ? om dit venster te openen en op Esc om het te sluiten.', weather: 'Aan', lookup: 'Mijn plaats zoeken op basis van mijn IP-adres', cityLabel: 'Of vul een plaats in', save: 'Opslaan', clearCity: 'Liever mijn IP-adres gebruiken', notFound: 'Plaats niet gevonden', quote: 'Citaat', privacy: 'Het weer stuurt je IP-adres naar ipapi.co, of de plaats die je invult naar Open-Meteo, en alleen als het weer aanstaat. Eigen AI-snelkoppelingen laden hun icoon ook van hun eigen site.', resetSettings: 'Instellingen resetten', resetData: 'Mijn gegevens wissen', resetDataConfirm: 'Je eigen links, AI-snelkoppelingen, tijdzones en je stad wissen? Dit kan niet ongedaan worden.', resetSettingsConfirm: 'Alle instellingen terugzetten naar de standaard? Je links, AI-snelkoppelingen, tijdzones en stad blijven staan. Dit kan niet ongedaan worden.', close: 'Sluiten', open: 'Instellingen' },
  de: { show: 'Wetter anzeigen', hide: 'Wetter ausblenden', loading: 'Lädt…', unavailable: 'Wetter nicht verfügbar', noSource: 'Ort in den Einstellungen festlegen', ip: 'Internet-IP', title: 'Einstellungen', hint: 'Drücke ?, um dieses Fenster zu öffnen, und Esc, um es zu schließen.', weather: 'An', lookup: 'Meinen Ort über meine IP-Adresse suchen', cityLabel: 'Oder einen Ort eingeben', save: 'Speichern', clearCity: 'Stattdessen meine IP-Adresse verwenden', notFound: 'Ort nicht gefunden', quote: 'Zitat', privacy: 'Das Wetter sendet deine IP-Adresse an ipapi.co bzw. den eingegebenen Ort an Open-Meteo, und nur wenn das Wetter aktiv ist. Eigene KI-Verknüpfungen laden ihr Symbol auch von ihrer eigenen Seite.', resetSettings: 'Einstellungen zurücksetzen', resetData: 'Meine Daten löschen', resetDataConfirm: 'Deine eigenen Links, KI-Verknüpfungen, Zeitzonen und deine Stadt löschen? Das lässt sich nicht rückgängig machen.', resetSettingsConfirm: 'Alle Einstellungen auf die Standardwerte zurücksetzen? Deine Links, KI-Verknüpfungen, Zeitzonen und Stadt bleiben erhalten. Das lässt sich nicht rückgängig machen.', close: 'Schließen', open: 'Einstellungen' },
  fr: { show: 'Afficher la météo', hide: 'Masquer la météo', loading: 'Chargement…', unavailable: 'Météo indisponible', noSource: 'Réglez une ville dans les paramètres', ip: 'IP internet', title: 'Paramètres', hint: 'Appuyez sur ? pour ouvrir ce panneau et sur Échap pour le fermer.', weather: 'Activé', lookup: 'Trouver ma ville à partir de mon adresse IP', cityLabel: 'Ou saisissez une ville', save: 'Enregistrer', clearCity: 'Utiliser plutôt mon adresse IP', notFound: 'Ville introuvable', quote: 'Citation', privacy: 'La météo envoie votre adresse IP à ipapi.co, ou la ville saisie à Open-Meteo, et seulement lorsqu’elle est activée. Les raccourcis IA personnels chargent aussi leur icône depuis leur propre site.', resetSettings: 'Réinitialiser les réglages', resetData: 'Effacer mes données', resetDataConfirm: 'Supprimer vos liens personnels, raccourcis IA, fuseaux et votre ville ? Action irréversible.', resetSettingsConfirm: 'Remettre tous les réglages par défaut ? Vos liens, raccourcis IA, fuseaux et ville restent. Action irréversible.', close: 'Fermer', open: 'Paramètres' },
  es: { show: 'Mostrar el tiempo', hide: 'Ocultar el tiempo', loading: 'Cargando…', unavailable: 'Tiempo no disponible', noSource: 'Elige una ciudad en los ajustes', ip: 'IP de internet', title: 'Ajustes', hint: 'Pulsa ? para abrir este panel y Esc para cerrarlo.', weather: 'Activado', lookup: 'Buscar mi ciudad a partir de mi IP', cityLabel: 'O introduce una ciudad', save: 'Guardar', clearCity: 'Usar mi IP en su lugar', notFound: 'Ciudad no encontrada', quote: 'Cita', privacy: 'El tiempo envía tu IP a ipapi.co, o la ciudad que escribas a Open-Meteo, y solo mientras esté activado. Los accesos de IA propios cargan también su icono desde su propio sitio.', resetSettings: 'Restablecer ajustes', resetData: 'Borrar mis datos', resetDataConfirm: '¿Borrar tus enlaces propios, accesos de IA, zonas horarias y tu ciudad? No se puede deshacer.', resetSettingsConfirm: '¿Restablecer todos los ajustes a sus valores predeterminados? Tus enlaces, accesos de IA, zonas horarias y ciudad se mantienen. No se puede deshacer.', close: 'Cerrar', open: 'Ajustes' },
  zh: { show: '显示天气', hide: '隐藏天气', loading: '加载中…', unavailable: '天气不可用', noSource: '请在设置中填写城市', ip: '互联网 IP', title: '设置', hint: '按 ? 打开此面板，按 Esc 关闭。', weather: '开启', lookup: '根据 IP 地址查找我的城市', cityLabel: '或输入城市', save: '保存', clearCity: '改用我的 IP 地址', notFound: '未找到该城市', quote: '名言', privacy: '开启天气时，页面会把你的 IP 地址发送到 ipapi.co，或把你输入的城市发送到 Open-Meteo。自定义 AI 快捷方式也会从各自的网站加载图标。', resetSettings: '重置设置', resetData: '删除我的数据', resetDataConfirm: '删除你的自定义链接、AI 快捷方式、时区和城市？此操作无法撤销。', resetSettingsConfirm: '将所有设置恢复为默认值？你的链接、AI 快捷方式、时区和城市会保留。此操作无法撤销。', close: '关闭', open: '设置' },
}
const forecastText = {
  en: { now: 'Now', hours: 'Next 6 hours', days: 'Next 7 days', feels: 'Feels like', wind: 'Wind', humidity: 'Humidity', more: 'Click for the full forecast', windy: 'Full forecast on Windy', rain: 'Rain' },
  nl: { now: 'Nu', hours: 'Komende 6 uur', days: 'Komende 7 dagen', feels: 'Voelt als', wind: 'Wind', humidity: 'Luchtvochtigheid', more: 'Klik voor de volledige verwachting', windy: 'Volledige verwachting op Windy', rain: 'Regen' },
  de: { now: 'Jetzt', hours: 'Nächste 6 Stunden', days: 'Nächste 7 Tage', feels: 'Gefühlt', wind: 'Wind', humidity: 'Luftfeuchtigkeit', more: 'Klicken für die vollständige Vorhersage', windy: 'Vollständige Vorhersage auf Windy', rain: 'Regen' },
  fr: { now: 'Maintenant', hours: '6 prochaines heures', days: '7 prochains jours', feels: 'Ressenti', wind: 'Vent', humidity: 'Humidité', more: 'Cliquez pour les prévisions complètes', windy: 'Prévisions complètes sur Windy', rain: 'Pluie' },
  es: { now: 'Ahora', hours: 'Próximas 6 horas', days: 'Próximos 7 días', feels: 'Sensación', wind: 'Viento', humidity: 'Humedad', more: 'Haz clic para la previsión completa', windy: 'Previsión completa en Windy', rain: 'Lluvia' },
  zh: { now: '现在', hours: '未来 6 小时', days: '未来 7 天', feels: '体感', wind: '风', humidity: '湿度', more: '点击查看完整预报', windy: '在 Windy 查看完整预报', rain: '降水' },
}
const hourHeads = { en: ['Time', 'Temp', 'Rain', 'Wind'], nl: ['Tijd', 'Temp', 'Regen', 'Wind'], de: ['Zeit', 'Temp.', 'Regen', 'Wind'], fr: ['Heure', 'Temp.', 'Pluie', 'Vent'], es: ['Hora', 'Temp.', 'Lluvia', 'Viento'], zh: ['时间', '气温', '降水', '风'] }
const zonesText = {
  en: { zonesEdit: 'Edit time zones', zonesToggle: 'Time zones', zonesTitle: 'Time zones', zonesLocal: 'This computer', zonesAdd: 'Add a time zone', zoneAddBtn: 'Add', zonesEmpty: 'No extra time zones yet.', zoneNotFound: 'Time zone not found', zoneDuplicate: 'Already in the list', remove: 'Remove', zonesButton: 'Time zones' },
  nl: { zonesEdit: 'Tijdzones bewerken', zonesToggle: 'Tijdzones', zonesTitle: 'Tijdzones', zonesLocal: 'Deze computer', zonesAdd: 'Tijdzone toevoegen', zoneAddBtn: 'Toevoegen', zonesEmpty: 'Nog geen extra tijdzones.', zoneNotFound: 'Tijdzone niet gevonden', zoneDuplicate: 'Staat al in de lijst', remove: 'Verwijderen', zonesButton: 'Tijdzones' },
  de: { zonesEdit: 'Zeitzonen bearbeiten', zonesToggle: 'Zeitzonen', zonesTitle: 'Zeitzonen', zonesLocal: 'Dieser Computer', zonesAdd: 'Zeitzone hinzufügen', zoneAddBtn: 'Hinzufügen', zonesEmpty: 'Noch keine zusätzlichen Zeitzonen.', zoneNotFound: 'Zeitzone nicht gefunden', zoneDuplicate: 'Ist schon in der Liste', remove: 'Entfernen', zonesButton: 'Zeitzonen' },
  fr: { zonesEdit: 'Modifier les fuseaux horaires', zonesToggle: 'Fuseaux horaires', zonesTitle: 'Fuseaux horaires', zonesLocal: 'Cet ordinateur', zonesAdd: 'Ajouter un fuseau horaire', zoneAddBtn: 'Ajouter', zonesEmpty: 'Aucun fuseau supplémentaire.', zoneNotFound: 'Fuseau horaire introuvable', zoneDuplicate: 'Déjà dans la liste', remove: 'Supprimer', zonesButton: 'Fuseaux horaires' },
  es: { zonesEdit: 'Editar zonas horarias', zonesToggle: 'Zonas horarias', zonesTitle: 'Zonas horarias', zonesLocal: 'Este equipo', zonesAdd: 'Añadir una zona horaria', zoneAddBtn: 'Añadir', zonesEmpty: 'Aún no hay zonas adicionales.', zoneNotFound: 'Zona horaria no encontrada', zoneDuplicate: 'Ya está en la lista', remove: 'Quitar', zonesButton: 'Zonas horarias' },
  zh: { zonesEdit: '编辑时区', zonesToggle: '时区', zonesTitle: '时区', zonesLocal: '本机', zonesAdd: '添加时区', zoneAddBtn: '添加', zonesEmpty: '还没有额外的时区。', zoneNotFound: '未找到该时区', zoneDuplicate: '已在列表中', remove: '移除', zonesButton: '时区' }
}
const ipPrivacy = {'en': 'Checking your IP address asks ipapi.co for it.', 'nl': 'Je IP-adres opvragen vraagt het bij ipapi.co.', 'de': 'Zum Abfragen deiner IP-Adresse wird sie bei ipapi.co angefragt.', 'fr': 'Vérifier votre adresse IP la demande à ipapi.co.', 'es': 'Consultar tu IP también la pide a ipapi.co.', 'zh': '查询 IP 地址时，会向 ipapi.co 请求。'}
const linksText = {
  en: { placesEdit: 'Edit places', askAiTip: 'AI shortcuts', linksEdit: 'Edit links', linksButton: 'Links', linksTitle: 'Links', linksEmpty: 'No links yet.', linkAdd: 'Add link', linkEdit: 'Edit link', lblName: 'Name', lblUrl: 'Address', lblDesc: 'Description (optional)', linkSave: 'Save', linkCancel: 'Cancel', linkInvalid: 'Enter a valid address, for example https://example.com', linkEditBtn: 'Edit', linkRemove: 'Remove' },
  nl: { placesEdit: 'Plaatsen bewerken', askAiTip: 'AI-snelkoppelingen', linksEdit: 'Links bewerken', linksButton: 'Links', linksTitle: 'Links', linksEmpty: 'Nog geen links.', linkAdd: 'Link toevoegen', linkEdit: 'Link bewerken', lblName: 'Naam', lblUrl: 'Adres', lblDesc: 'Beschrijving (optioneel)', linkSave: 'Opslaan', linkCancel: 'Annuleren', linkInvalid: 'Vul een geldig adres in, bijvoorbeeld https://voorbeeld.nl', linkEditBtn: 'Bewerken', linkRemove: 'Verwijderen' },
  de: { placesEdit: 'Orte bearbeiten', askAiTip: 'KI-Verknüpfungen', linksEdit: 'Links bearbeiten', linksButton: 'Links', linksTitle: 'Links', linksEmpty: 'Noch keine Links.', linkAdd: 'Link hinzufügen', linkEdit: 'Link bearbeiten', lblName: 'Name', lblUrl: 'Adresse', lblDesc: 'Beschreibung (optional)', linkSave: 'Speichern', linkCancel: 'Abbrechen', linkInvalid: 'Gib eine gültige Adresse ein, zum Beispiel https://beispiel.de', linkEditBtn: 'Bearbeiten', linkRemove: 'Entfernen' },
  fr: { placesEdit: 'Modifier les lieux', askAiTip: 'Raccourcis IA', linksEdit: 'Modifier les liens', linksButton: 'Liens', linksTitle: 'Liens', linksEmpty: 'Aucun lien pour l’instant.', linkAdd: 'Ajouter un lien', linkEdit: 'Modifier le lien', lblName: 'Nom', lblUrl: 'Adresse', lblDesc: 'Description (facultatif)', linkSave: 'Enregistrer', linkCancel: 'Annuler', linkInvalid: 'Saisissez une adresse valide, par exemple https://exemple.fr', linkEditBtn: 'Modifier', linkRemove: 'Supprimer' },
  es: { placesEdit: 'Editar lugares', askAiTip: 'Accesos directos de IA', linksEdit: 'Editar enlaces', linksButton: 'Enlaces', linksTitle: 'Enlaces', linksEmpty: 'Aún no hay enlaces.', linkAdd: 'Añadir enlace', linkEdit: 'Editar enlace', lblName: 'Nombre', lblUrl: 'Dirección', lblDesc: 'Descripción (opcional)', linkSave: 'Guardar', linkCancel: 'Cancelar', linkInvalid: 'Escribe una dirección válida, por ejemplo https://ejemplo.es', linkEditBtn: 'Editar', linkRemove: 'Quitar' },
  zh: { placesEdit: '编辑地点', askAiTip: 'AI 快捷方式', linksEdit: '编辑链接', linksButton: '链接', linksTitle: '链接', linksEmpty: '还没有链接。', linkAdd: '添加链接', linkEdit: '编辑链接', lblName: '名称', lblUrl: '地址', lblDesc: '说明（可选）', linkSave: '保存', linkCancel: '取消', linkInvalid: '请输入有效的地址，例如 https://example.com', linkEditBtn: '编辑', linkRemove: '移除' }
}
const sectionText = {
  en: { secWeather: 'Weather', secLook: 'Show', secPrivacy: 'Privacy', placeTime: 'Local time' },
  nl: { secWeather: 'Weer', secLook: 'Tonen', secPrivacy: 'Privacy', placeTime: 'Lokale tijd' },
  de: { secWeather: 'Wetter', secLook: 'Anzeigen', secPrivacy: 'Datenschutz', placeTime: 'Ortszeit' },
  fr: { secWeather: 'Météo', secLook: 'Afficher', secPrivacy: 'Confidentialité', placeTime: 'Heure locale' },
  es: { secWeather: 'Tiempo', secLook: 'Mostrar', secPrivacy: 'Privacidad', placeTime: 'Hora local' },
  zh: { secWeather: '天气', secLook: '显示', secPrivacy: '隐私', placeTime: '当地时间' }
}
const aiText = {
  en: { quickTitle: 'Quick start', quickEngineHead: 'Change search engine', quickEngineText: 'Each click on the icon goes to the next search engine: DuckDuckGo, Kagi, Brave or Google. Your choice is remembered.', quickClick: 'Click here', quickMoreHead: 'More from your page', quickAiHead: 'Add AI links', quickAiText: 'Under Manage data you pick up to five AI services, or add your own address.', quickPageHead: 'Pick a page', quickPageText: 'Minimal, Standard or Advanced, in the settings at the top right.', quickDone: 'Got it', quickLink: 'Quick start', quickCard: 'Quick start: the first steps', quickNote: 'Everything here is also in Help.', changelogLink: 'Changelog', hintText: 'Settings are here: click the gear, or press ?.', limitFull: '{n} of {n} · full', aiSec: 'AI shortcuts', aiOn: 'On', aiName: 'Name', aiUrl: 'Address', aiEdit: 'Edit', aiAddTitle: 'Add shortcut', aiEditTitle: 'Edit shortcut', aiSave: 'Save', aiCancel: 'Cancel', aiUp: 'Move up', aiDown: 'Move down', aiRemove: 'Remove', versionText: 'Version {v}, updated {d}', secBackground: 'Background', resetIntro: 'Reset settings only sets your settings back to the defaults; your data stays. Delete my data removes your own links, AI shortcuts, time zones, city and extra places. This cannot be undone, so make a backup first on the Backup tab in Manage data.', resetSec: 'Reset', dateOnLbl: 'Show the date', dateSec: 'Date', dateShow: 'Show', dateLong: 'Long', dateShort: 'Short', dateOrderLbl: 'Order', dateAuto: 'Automatic', dateDmy: 'Day-month-year', dateMdy: 'Month-day-year', dateYmd: 'Year-month-day', timeSec: 'Time format', time24: '24 hours', time12: '12 hours (AM/PM)', timeFull: 'Full, with seconds', searchSec: 'Search', searchNewTab: 'Open search in a new tab', aiNewTab: 'Open AI links in a new tab', aiDuplicate: 'Already in the list.', aiPick: 'Pick services', aiInvalid: 'Enter a valid https address' },
  nl: { quickTitle: 'Quick start', quickEngineHead: 'Zoekmachine wisselen', quickEngineText: 'Elke klik op het icoon gaat naar de volgende zoekmachine: DuckDuckGo, Kagi, Brave of Google. Je keuze blijft bewaard.', quickClick: 'Klik hier', quickMoreHead: 'Meer uit je pagina', quickAiHead: 'AI-links toevoegen', quickAiText: 'Onder Data beheren kies je tot vijf AI-diensten, of voeg je eigen adres toe.', quickPageHead: 'Pagina kiezen', quickPageText: 'Minimaal, Standaard of Geavanceerd, in de instellingen rechtsboven.', quickDone: 'Begrepen', quickLink: 'Quick start', quickCard: 'Quick start: de eerste stappen', quickNote: 'Alles staat ook in Help.', changelogLink: 'Wijzigingen', hintText: 'Hier vind je de instellingen: klik op het tandwiel of druk op ?.', limitFull: '{n} van {n} · vol', aiSec: 'AI-snelkoppelingen', aiOn: 'Aan', aiName: 'Naam', aiUrl: 'Adres', aiEdit: 'Bewerken', aiAddTitle: 'Snelkoppeling toevoegen', aiEditTitle: 'Snelkoppeling bewerken', aiSave: 'Opslaan', aiCancel: 'Annuleren', aiUp: 'Omhoog', aiDown: 'Omlaag', aiRemove: 'Verwijderen', versionText: 'Versie {v}, bijgewerkt {d}', secBackground: 'Achtergrond', resetIntro: 'Instellingen resetten zet alleen je instellingen terug naar de standaard; je gegevens blijven staan. Mijn gegevens wissen verwijdert je eigen links, AI-snelkoppelingen, tijdzones, stad en extra plaatsen. Dat kan niet ongedaan worden, dus maak eerst een backup op het tabblad Backup onder Data beheren.', resetSec: 'Resetten', dateOnLbl: 'Datum tonen', dateSec: 'Datum', dateShow: 'Weergave', dateLong: 'Lang', dateShort: 'Kort', dateOrderLbl: 'Volgorde', dateAuto: 'Automatisch', dateDmy: 'Dag-maand-jaar', dateMdy: 'Maand-dag-jaar', dateYmd: 'Jaar-maand-dag', timeSec: 'Tijdnotatie', time24: '24 uur', time12: '12 uur (AM/PM)', timeFull: 'Volledig, met seconden', searchSec: 'Zoeken', searchNewTab: 'Zoeken openen in een nieuw tabblad', aiNewTab: 'AI-links openen in een nieuw tabblad', aiDuplicate: 'Staat al in de lijst.', aiPick: 'Kies diensten', aiInvalid: 'Vul een geldig https-adres in' },
  de: { quickTitle: 'Schnellstart', quickEngineHead: 'Suchmaschine wechseln', quickEngineText: 'Jeder Klick auf das Symbol führt zur nächsten Suchmaschine: DuckDuckGo, Kagi, Brave oder Google. Deine Wahl bleibt gespeichert.', quickClick: 'Hier klicken', quickMoreHead: 'Mehr aus deiner Seite', quickAiHead: 'KI-Links hinzufügen', quickAiText: 'Unter Daten verwalten wählst du bis zu fünf KI-Dienste oder fügst deine eigene Adresse hinzu.', quickPageHead: 'Seite wählen', quickPageText: 'Minimal, Standard oder Erweitert, in den Einstellungen oben rechts.', quickDone: 'Verstanden', quickLink: 'Schnellstart', quickCard: 'Schnellstart: die ersten Schritte', quickNote: 'Alles steht auch in der Hilfe.', changelogLink: 'Änderungen', hintText: 'Hier findest du die Einstellungen: Klick auf das Zahnrad oder drücke ?.', limitFull: '{n} von {n} · voll', aiSec: 'KI-Verknüpfungen', aiOn: 'An', aiName: 'Name', aiUrl: 'Adresse', aiEdit: 'Bearbeiten', aiAddTitle: 'Verknüpfung hinzufügen', aiEditTitle: 'Verknüpfung bearbeiten', aiSave: 'Speichern', aiCancel: 'Abbrechen', aiUp: 'Nach oben', aiDown: 'Nach unten', aiRemove: 'Entfernen', versionText: 'Version {v}, aktualisiert {d}', secBackground: 'Hintergrund', resetIntro: 'Einstellungen zurücksetzen stellt nur die Standardwerte wieder her; deine Daten bleiben. Meine Daten löschen entfernt deine eigenen Links, KI-Verknüpfungen, Zeitzonen, Stadt und zusätzlichen Orte. Das lässt sich nicht rückgängig machen, also erstelle zuerst ein Backup im Reiter Backup unter Daten verwalten.', resetSec: 'Zurücksetzen', dateOnLbl: 'Datum anzeigen', dateSec: 'Datum', dateShow: 'Anzeige', dateLong: 'Lang', dateShort: 'Kurz', dateOrderLbl: 'Reihenfolge', dateAuto: 'Automatisch', dateDmy: 'Tag-Monat-Jahr', dateMdy: 'Monat-Tag-Jahr', dateYmd: 'Jahr-Monat-Tag', timeSec: 'Zeitformat', time24: '24 Stunden', time12: '12 Stunden (AM/PM)', timeFull: 'Vollständig, mit Sekunden', searchSec: 'Suche', searchNewTab: 'Suche in einem neuen Tab öffnen', aiNewTab: 'KI-Links in einem neuen Tab öffnen', aiDuplicate: 'Ist schon in der Liste.', aiPick: 'Dienste wählen', aiInvalid: 'Gib eine gültige https-Adresse ein' },
  fr: { quickTitle: 'Démarrage rapide', quickEngineHead: 'Changer de moteur de recherche', quickEngineText: 'Chaque clic sur l’icône passe au moteur suivant : DuckDuckGo, Kagi, Brave ou Google. Votre choix est conservé.', quickClick: 'Cliquez ici', quickMoreHead: 'Plus sur votre page', quickAiHead: 'Ajouter des liens IA', quickAiText: 'Sous Gérer les données, choisissez jusqu’à cinq services IA, ou ajoutez votre propre adresse.', quickPageHead: 'Choisir une page', quickPageText: 'Minimal, Standard ou Avancé, dans les réglages en haut à droite.', quickDone: 'Compris', quickLink: 'Démarrage rapide', quickCard: 'Démarrage rapide : les premiers pas', quickNote: 'Tout cela figure aussi dans l’aide.', changelogLink: 'Modifications', hintText: 'Les réglages sont ici : cliquez sur l’engrenage ou appuyez sur ?.', limitFull: '{n} sur {n} · complet', aiSec: 'Raccourcis IA', aiOn: 'Activé', aiName: 'Nom', aiUrl: 'Adresse', aiEdit: 'Modifier', aiAddTitle: 'Ajouter un raccourci', aiEditTitle: 'Modifier le raccourci', aiSave: 'Enregistrer', aiCancel: 'Annuler', aiUp: 'Monter', aiDown: 'Descendre', aiRemove: 'Supprimer', versionText: 'Version {v}, mise à jour {d}', secBackground: 'Arrière-plan', resetIntro: 'Réinitialiser les réglages remet seulement les réglages par défaut ; vos données restent. Effacer mes données supprime vos liens, raccourcis IA, fuseaux, ville et lieux supplémentaires. Action irréversible : faites d’abord une sauvegarde dans l’onglet Sauvegarde de Gérer les données.', resetSec: 'Réinitialiser', dateOnLbl: 'Afficher la date', dateSec: 'Date', dateShow: 'Affichage', dateLong: 'Long', dateShort: 'Court', dateOrderLbl: 'Ordre', dateAuto: 'Automatique', dateDmy: 'Jour-mois-année', dateMdy: 'Mois-jour-année', dateYmd: 'Année-mois-jour', timeSec: 'Format de l’heure', time24: '24 heures', time12: '12 heures (AM/PM)', timeFull: 'Complet, avec secondes', searchSec: 'Recherche', searchNewTab: 'Ouvrir la recherche dans un nouvel onglet', aiNewTab: 'Ouvrir les liens IA dans un nouvel onglet', aiDuplicate: 'Déjà dans la liste.', aiPick: 'Choisir les services', aiInvalid: 'Saisissez une adresse https valide' },
  es: { quickTitle: 'Inicio rápido', quickEngineHead: 'Cambiar de buscador', quickEngineText: 'Cada clic en el icono pasa al siguiente buscador: DuckDuckGo, Kagi, Brave o Google. Tu elección se guarda.', quickClick: 'Haz clic aquí', quickMoreHead: 'Más en tu página', quickAiHead: 'Añadir enlaces de IA', quickAiText: 'En Gestionar datos eliges hasta cinco servicios de IA, o añades tu propia dirección.', quickPageHead: 'Elige una página', quickPageText: 'Minimal, Standard o Avanzado, en los ajustes arriba a la derecha.', quickDone: 'Entendido', quickLink: 'Inicio rápido', quickCard: 'Inicio rápido: los primeros pasos', quickNote: 'Todo esto también está en la ayuda.', changelogLink: 'Cambios', hintText: 'Aquí están los ajustes: pulsa el engranaje o ?.', limitFull: '{n} de {n} · completo', aiSec: 'Accesos de IA', aiOn: 'Activado', aiName: 'Nombre', aiUrl: 'Dirección', aiEdit: 'Editar', aiAddTitle: 'Añadir acceso', aiEditTitle: 'Editar acceso', aiSave: 'Guardar', aiCancel: 'Cancelar', aiUp: 'Subir', aiDown: 'Bajar', aiRemove: 'Quitar', versionText: 'Versión {v}, actualizada {d}', secBackground: 'Fondo', resetIntro: 'Restablecer ajustes solo devuelve los valores predeterminados; tus datos se mantienen. Borrar mis datos elimina tus enlaces propios, accesos de IA, zonas horarias, ciudad y lugares adicionales. No se puede deshacer, así que haz antes una copia en la pestaña Copia de Gestionar datos.', resetSec: 'Restablecer', dateOnLbl: 'Mostrar la fecha', dateSec: 'Fecha', dateShow: 'Mostrar', dateLong: 'Larga', dateShort: 'Corta', dateOrderLbl: 'Orden', dateAuto: 'Automático', dateDmy: 'Día-mes-año', dateMdy: 'Mes-día-año', dateYmd: 'Año-mes-día', timeSec: 'Formato de hora', time24: '24 horas', time12: '12 horas (AM/PM)', timeFull: 'Completo, con segundos', searchSec: 'Búsqueda', searchNewTab: 'Abrir la búsqueda en una pestaña nueva', aiNewTab: 'Abrir los accesos de IA en una pestaña nueva', aiDuplicate: 'Ya está en la lista.', aiPick: 'Elige servicios', aiInvalid: 'Escribe una dirección https válida' },
  zh: { quickTitle: '快速入门', quickEngineHead: '更换搜索引擎', quickEngineText: '每次点击图标会切换到下一个搜索引擎：DuckDuckGo、Kagi、Brave 或 Google。你的选择会被保存。', quickClick: '点这里', quickMoreHead: '页面更多功能', quickAiHead: '添加 AI 链接', quickAiText: '在“管理数据”中最多选五个 AI 服务，也可以添加你自己的地址。', quickPageHead: '选择页面', quickPageText: '极简、标准或高级，在右上角的设置中切换。', quickDone: '知道了', quickLink: '快速入门', quickCard: '快速入门：最初的几步', quickNote: '这些内容也在帮助中。', changelogLink: '更新记录', hintText: '设置在这里：点击齿轮，或按 ?。', limitFull: '{n}/{n} · 已满', aiSec: 'AI 快捷方式', aiOn: '开启', aiName: '名称', aiUrl: '地址', aiEdit: '编辑', aiAddTitle: '添加快捷方式', aiEditTitle: '编辑快捷方式', aiSave: '保存', aiCancel: '取消', aiUp: '上移', aiDown: '下移', aiRemove: '移除', versionText: '版本 {v}，更新于 {d}', secBackground: '背景', resetIntro: '重置设置只会恢复默认值，你的数据会保留。删除我的数据会移除你自己的链接、AI 快捷方式、时区、城市和额外地点。此操作无法撤销，请先在管理数据的备份标签中备份。', resetSec: '重置', dateOnLbl: '显示日期', dateSec: '日期', dateShow: '显示', dateLong: '长格式', dateShort: '短格式', dateOrderLbl: '顺序', dateAuto: '自动', dateDmy: '日-月-年', dateMdy: '月-日-年', dateYmd: '年-月-日', timeSec: '时间格式', time24: '24 小时制', time12: '12 小时制 (AM/PM)', timeFull: '完整，含秒', searchSec: '搜索', searchNewTab: '在新标签页中打开搜索', aiNewTab: '在新标签页中打开 AI 快捷方式', aiDuplicate: '已在列表中。', aiPick: '选择服务', aiInvalid: '请输入有效的 https 地址' }
}
const manageText = {
  en: { linkUp: 'Move up', linkDown: 'Move down', manageOpen: 'Manage data', tabBackup: 'Backup', backupNote: 'Export saves your settings, links, AI shortcuts, time zones and weather places to a file on your computer. Import loads such a file: Merge adds what is new and keeps what you have, Replace overwrites everything. Make a backup before you reset or delete your data.', tabLinks: 'Links', tabZones: 'Time zones', tabAi: 'AI', tabWeather: 'Weather', placeLabel: 'Add a city', placeAdd: 'Add', placeOwn: 'Your place', placeNone: 'No place yet', placeDuplicate: 'Already in the list', placeRemove: 'Remove' },
  nl: { linkUp: 'Omhoog', linkDown: 'Omlaag', manageOpen: 'Data beheren', tabBackup: 'Backup', backupNote: 'Exporteren slaat je instellingen, links, AI-snelkoppelingen, tijdzones en weerplaatsen op in een bestand op je computer. Importeren laadt zo’n bestand: Samenvoegen voegt toe wat nieuw is en laat staan wat je hebt, Vervangen overschrijft alles. Maak een backup voordat je gegevens reset of wist.', tabLinks: 'Links', tabZones: 'Tijdzones', tabAi: 'AI', tabWeather: 'Weer', placeLabel: 'Een stad toevoegen', placeAdd: 'Toevoegen', placeOwn: 'Je eigen plaats', placeNone: 'Nog geen plaats', placeDuplicate: 'Staat al in de lijst', placeRemove: 'Verwijderen' },
  de: { linkUp: 'Nach oben', linkDown: 'Nach unten', manageOpen: 'Daten verwalten', tabBackup: 'Backup', backupNote: 'Exportieren speichert deine Einstellungen, Links, KI-Verknüpfungen, Zeitzonen und Wetterorte in einer Datei auf deinem Computer. Importieren lädt so eine Datei: Zusammenführen ergänzt das Neue und behält, was du hast; Ersetzen überschreibt alles. Erstelle ein Backup, bevor du Daten zurücksetzt oder löschst.', tabLinks: 'Links', tabZones: 'Zeitzonen', tabAi: 'KI', tabWeather: 'Wetter', placeLabel: 'Eine Stadt hinzufügen', placeAdd: 'Hinzufügen', placeOwn: 'Dein Ort', placeNone: 'Noch kein Ort', placeDuplicate: 'Ist schon in der Liste', placeRemove: 'Entfernen' },
  fr: { linkUp: 'Monter', linkDown: 'Descendre', manageOpen: 'Gérer les données', tabBackup: 'Sauvegarde', backupNote: 'Exporter enregistre vos réglages, liens, raccourcis IA, fuseaux et lieux météo dans un fichier sur votre ordinateur. Importer charge ce fichier : Fusionner ajoute le nouveau et garde le reste ; Remplacer écrase tout. Faites une sauvegarde avant de réinitialiser ou d’effacer vos données.', tabLinks: 'Liens', tabZones: 'Fuseaux', tabAi: 'IA', tabWeather: 'Météo', placeLabel: 'Ajouter une ville', placeAdd: 'Ajouter', placeOwn: 'Votre lieu', placeNone: 'Aucun lieu pour l’instant', placeDuplicate: 'Déjà dans la liste', placeRemove: 'Supprimer' },
  es: { linkUp: 'Subir', linkDown: 'Bajar', manageOpen: 'Gestionar datos', tabBackup: 'Copia', backupNote: 'Exportar guarda tus ajustes, enlaces, accesos de IA, zonas horarias y lugares del tiempo en un archivo de tu equipo. Importar carga ese archivo: Combinar añade lo nuevo y conserva lo que tienes; Reemplazar sobrescribe todo. Haz una copia antes de restablecer o borrar tus datos.', tabLinks: 'Enlaces', tabZones: 'Zonas horarias', tabAi: 'IA', tabWeather: 'Tiempo', placeLabel: 'Añadir una ciudad', placeAdd: 'Añadir', placeOwn: 'Tu lugar', placeNone: 'Aún no hay lugar', placeDuplicate: 'Ya está en la lista', placeRemove: 'Quitar' },
  zh: { linkUp: '上移', linkDown: '下移', manageOpen: '管理数据', tabBackup: '备份', backupNote: '导出会把你的设置、链接、AI 快捷方式、时区和天气地点保存到电脑上的一个文件。导入会加载该文件：合并会添加新内容并保留现有内容；替换会覆盖全部。重置或删除数据前，请先备份。', tabLinks: '链接', tabZones: '时区', tabAi: 'AI', tabWeather: '天气', placeLabel: '添加城市', placeAdd: '添加', placeOwn: '你的地点', placeNone: '还没有地点', placeDuplicate: '已在列表中', placeRemove: '移除' }
}
const footerText = {
  en: { pre: 'Vibe coded with', post: 'by a4ds5t', title: 'View the README on GitHub' },
  nl: { pre: 'Gemaakt met', post: 'door a4ds5t', title: 'Bekijk de README op GitHub' },
  de: { pre: 'Gebaut mit', post: 'von a4ds5t', title: 'README auf GitHub ansehen' },
  fr: { pre: 'Créé avec', post: 'par a4ds5t', title: 'Voir le README sur GitHub' },
  es: { pre: 'Hecho con', post: 'por a4ds5t', title: 'Ver el README en GitHub' },
  zh: { pre: '用', post: '由 a4ds5t 制作', title: '在 GitHub 上查看 README' }
}
const dataText = {
  en: { langSection: 'Language', langAuto: 'Automatic', importTitle: 'Import data', importBody: 'Merging adds new links, places and time zones and keeps what you have. Replacing overwrites everything.', importMerge: 'Merge', importReplace: 'Replace', importCancel: 'Cancel', importSummary: 'Added: {added}. Already there: {dupes}. Skipped because of the limit: {skipped}.', exportData: 'Export data', importData: 'Import data', importInvalid: 'This file is not a Minimal-StartPage export.', },
  nl: { langSection: 'Taal', langAuto: 'Automatisch', importTitle: 'Gegevens importeren', importBody: 'Samenvoegen voegt nieuwe links, plaatsen en tijdzones toe en laat wat je al hebt staan. Vervangen overschrijft alles.', importMerge: 'Samenvoegen', importReplace: 'Vervangen', importCancel: 'Annuleren', importSummary: 'Toegevoegd: {added}. Stond er al: {dupes}. Overgeslagen door de limiet: {skipped}.', exportData: 'Gegevens exporteren', importData: 'Gegevens importeren', importInvalid: 'Dit bestand is geen export van Minimal-StartPage.', },
  de: { langSection: 'Sprache', langAuto: 'Automatisch', importTitle: 'Daten importieren', importBody: 'Zusammenführen ergänzt neue Links, Orte und Zeitzonen und behält, was du hast. Ersetzen überschreibt alles.', importMerge: 'Zusammenführen', importReplace: 'Ersetzen', importCancel: 'Abbrechen', importSummary: 'Hinzugefügt: {added}. Schon vorhanden: {dupes}. Wegen des Limits übersprungen: {skipped}.', exportData: 'Daten exportieren', importData: 'Daten importieren', importInvalid: 'Diese Datei ist kein Export von Minimal-StartPage.', },
  fr: { langSection: 'Langue', langAuto: 'Automatique', importTitle: 'Importer les données', importBody: 'Fusionner ajoute les nouveaux liens, lieux et fuseaux et garde ce que vous avez. Remplacer écrase tout.', importMerge: 'Fusionner', importReplace: 'Remplacer', importCancel: 'Annuler', importSummary: 'Ajoutés : {added}. Déjà présents : {dupes}. Ignorés à cause de la limite : {skipped}.', exportData: 'Exporter les données', importData: 'Importer les données', importInvalid: 'Ce fichier n’est pas un export de Minimal-StartPage.', },
  es: { langSection: 'Idioma', langAuto: 'Automático', importTitle: 'Importar datos', importBody: 'Combinar añade los nuevos enlaces, lugares y zonas horarias y conserva lo que ya tienes. Reemplazar sobrescribe todo.', importMerge: 'Combinar', importReplace: 'Reemplazar', importCancel: 'Cancelar', importSummary: 'Añadidos: {added}. Ya estaban: {dupes}. Omitidos por el límite: {skipped}.', exportData: 'Exportar datos', importData: 'Importar datos', importInvalid: 'Este archivo no es una exportación de Minimal-StartPage.', },
  zh: { langSection: '语言', langAuto: '自动', importTitle: '导入数据', importBody: '合并会添加新的链接、地点和时区，并保留现有内容。替换会覆盖全部内容。', importMerge: '合并', importReplace: '替换', importCancel: '取消', importSummary: '已添加：{added}。已存在：{dupes}。因上限跳过：{skipped}。', exportData: '导出数据', importData: '导入数据', importInvalid: '此文件不是 Minimal-StartPage 的导出文件。', }
}
const tintCycleText = {
  en: { tintCycle: 'Change colour' }, nl: { tintCycle: 'Kleur wisselen' }, de: { tintCycle: 'Farbe wechseln' },
  fr: { tintCycle: 'Changer la couleur' }, es: { tintCycle: 'Cambiar el color' }, zh: { tintCycle: '切换颜色' }
}
const quoteTitleText = {
  en: { quoteAnother: 'Show another quote' }, nl: { quoteAnother: 'Toon een ander citaat' }, de: { quoteAnother: 'Anderes Zitat anzeigen' },
  fr: { quoteAnother: 'Afficher une autre citation' }, es: { quoteAnother: 'Mostrar otra cita' }, zh: { quoteAnother: '换一条名言' }
}
const ipText = {
  en: { ipNone: 'Not requested yet', ipFailed: 'Could not check', ipWindowTitle: 'IP details', ipCheckFirst: 'Check', ipCheckAgain: 'Check again', ipFieldPlace: 'Place', ipFieldRegion: 'Region', ipFieldCountry: 'Country', ipFieldPostal: 'Postcode', ipFieldProvider: 'Provider', ipFieldAsn: 'AS number', ipFieldNetwork: 'Network', ipFieldTimezone: 'Time zone', ipFieldCoords: 'Coordinates', ipFieldAt: 'Requested' },
  nl: { ipNone: 'Nog niet opgevraagd', ipFailed: 'Niet kunnen controleren', ipWindowTitle: 'IP-gegevens', ipCheckFirst: 'Opvragen', ipCheckAgain: 'Opnieuw opvragen', ipFieldPlace: 'Plaats', ipFieldRegion: 'Regio', ipFieldCountry: 'Land', ipFieldPostal: 'Postcode', ipFieldProvider: 'Provider', ipFieldAsn: 'AS-nummer', ipFieldNetwork: 'Netwerk', ipFieldTimezone: 'Tijdzone', ipFieldCoords: 'Coördinaten', ipFieldAt: 'Opgevraagd' },
  de: { ipNone: 'Noch nicht abgefragt', ipFailed: 'Konnte nicht prüfen', ipWindowTitle: 'IP-Details', ipCheckFirst: 'Abfragen', ipCheckAgain: 'Erneut abfragen', ipFieldPlace: 'Ort', ipFieldRegion: 'Region', ipFieldCountry: 'Land', ipFieldPostal: 'Postleitzahl', ipFieldProvider: 'Anbieter', ipFieldAsn: 'AS-Nummer', ipFieldNetwork: 'Netzwerk', ipFieldTimezone: 'Zeitzone', ipFieldCoords: 'Koordinaten', ipFieldAt: 'Abgefragt' },
  fr: { ipNone: 'Pas encore demandée', ipFailed: 'Vérification impossible', ipWindowTitle: 'Détails de l’IP', ipCheckFirst: 'Vérifier', ipCheckAgain: 'Vérifier à nouveau', ipFieldPlace: 'Lieu', ipFieldRegion: 'Région', ipFieldCountry: 'Pays', ipFieldPostal: 'Code postal', ipFieldProvider: 'Fournisseur', ipFieldAsn: 'Numéro AS', ipFieldNetwork: 'Réseau', ipFieldTimezone: 'Fuseau horaire', ipFieldCoords: 'Coordonnées', ipFieldAt: 'Demandée' },
  es: { ipNone: 'Aún no consultada', ipFailed: 'No se pudo comprobar', ipWindowTitle: 'Detalles de la IP', ipCheckFirst: 'Consultar', ipCheckAgain: 'Consultar de nuevo', ipFieldPlace: 'Lugar', ipFieldRegion: 'Región', ipFieldCountry: 'País', ipFieldPostal: 'Código postal', ipFieldProvider: 'Proveedor', ipFieldAsn: 'Número AS', ipFieldNetwork: 'Red', ipFieldTimezone: 'Zona horaria', ipFieldCoords: 'Coordenadas', ipFieldAt: 'Consultada' },
  zh: { ipNone: '尚未查询', ipFailed: '无法检查', ipWindowTitle: 'IP 详情', ipCheckFirst: '查询', ipCheckAgain: '重新查询', ipFieldPlace: '地点', ipFieldRegion: '地区', ipFieldCountry: '国家', ipFieldPostal: '邮编', ipFieldProvider: '服务商', ipFieldAsn: 'AS 号', ipFieldNetwork: '网络', ipFieldTimezone: '时区', ipFieldCoords: '坐标', ipFieldAt: '查询时间' }
}
const linksOwnText = {
  en: { linksOwn: 'Own links' },
  nl: { linksOwn: 'Eigen links' },
  de: { linksOwn: 'Eigene Links' },
  fr: { linksOwn: 'Liens personnels' },
  es: { linksOwn: 'Enlaces propios' },
  zh: { linksOwn: '自定义链接' }
}
const linkToggleText = {
  en: { linksToggle: 'Links button' },
  nl: { linksToggle: 'Linkknop' },
  de: { linksToggle: 'Link-Schaltfläche' },
  fr: { linksToggle: 'Bouton des liens' },
  es: { linksToggle: 'Botón de enlaces' },
  zh: { linksToggle: '链接按钮' }
}
const disclaimerText = {
  en: { privacy: 'Sends your IP address to outside services.' },
  nl: { privacy: 'Stuurt je IP-adres naar externe diensten.' },
  de: { privacy: 'Sendet deine IP-Adresse an externe Dienste.' },
  fr: { privacy: 'Envoie votre adresse IP à des services externes.' },
  es: { privacy: 'Envía tu IP a servicios externos.' },
  zh: { privacy: '会向外部服务发送你的 IP 地址。' }
}
const wallpaperText = {
  en: { wallpaperToggle: 'Wallpaper', wallpaperButton: 'Wallpaper button' },
  nl: { wallpaperToggle: 'Wallpaper', wallpaperButton: 'Wallpaperknop' },
  de: { wallpaperToggle: 'Wallpaper', wallpaperButton: 'Wallpaper-Schaltfläche' },
  fr: { wallpaperToggle: 'Fond d’écran', wallpaperButton: 'Bouton du fond d’écran' },
  es: { wallpaperToggle: 'Fondo de pantalla', wallpaperButton: 'Botón del fondo' },
  zh: { wallpaperToggle: '壁纸', wallpaperButton: '壁纸按钮' }
}
const tintText = {
  en: { tintToggle: 'Background colour button' },
  nl: { tintToggle: 'Achtergrondkleur-knop' },
  de: { tintToggle: 'Hintergrundfarbe-Knopf' },
  fr: { tintToggle: 'Bouton couleur du fond' },
  es: { tintToggle: 'Botón de color del fondo' },
  zh: { tintToggle: '背景颜色按钮' }
}
const bgTitleText = {
  en: { wallBy: 'Photo by', wallDunes: 'Pink dunes', wallMountains: 'Mountain haze', wallNote: 'Each press of the background button goes to the next one that is on.', wallNext: 'Next background', wallNone: 'No background', wallPhoto: 'Misty forest', wallOn: 'On', tabWallpaper: 'Background' },
  nl: { wallBy: 'Foto van', wallDunes: 'Roze duinen', wallMountains: 'Bergen in de mist', wallNote: 'Elke druk op de achtergrondknop gaat naar de volgende die aan staat.', wallNext: 'Volgende achtergrond', wallNone: 'Geen achtergrond', wallPhoto: 'Mistig bos', wallOn: 'Aan', tabWallpaper: 'Achtergrond' },
  de: { wallBy: 'Foto von', wallDunes: 'Rosa Dünen', wallMountains: 'Berge im Dunst', wallNote: 'Jeder Druck auf die Hintergrund-Schaltfläche wechselt zum nächsten eingeschalteten Hintergrund.', wallNext: 'Nächster Hintergrund', wallNone: 'Kein Hintergrund', wallPhoto: 'Nebliger Wald', wallOn: 'An', tabWallpaper: 'Hintergrund' },
  fr: { wallBy: 'Photo de', wallDunes: 'Dunes roses', wallMountains: 'Montagnes dans la brume', wallNote: 'Chaque pression sur le bouton du fond passe au fond suivant activé.', wallNext: 'Fond suivant', wallNone: 'Aucun fond', wallPhoto: 'Forêt brumeuse', wallOn: 'Activé', tabWallpaper: 'Fond' },
  es: { wallBy: 'Foto de', wallDunes: 'Dunas rosas', wallMountains: 'Montañas en la bruma', wallNote: 'Cada pulsación del botón de fondo pasa al siguiente fondo activado.', wallNext: 'Siguiente fondo', wallNone: 'Sin fondo', wallPhoto: 'Bosque brumoso', wallOn: 'Activado', tabWallpaper: 'Fondo' },
  zh: { wallBy: '摄影：', wallDunes: '粉色沙丘', wallMountains: '薄雾中的群山', wallNote: '每次点击背景按钮，会切换到下一个已开启的背景。', wallNext: '下一个背景', wallNone: '无背景', wallPhoto: '雾中的森林', wallOn: '开启', tabWallpaper: '背景' }
}
const pageText = {
  en: { secPage: 'Page', presetMinimal: 'Minimal', presetStandard: 'Standard', presetCustom: 'Personal' },
  nl: { secPage: 'Pagina', presetMinimal: 'Minimaal', presetStandard: 'Standaard', presetCustom: 'Persoonlijk' },
  de: { secPage: 'Seite', presetMinimal: 'Minimal', presetStandard: 'Standard', presetCustom: 'Persönlich' },
  fr: { secPage: 'Page', presetMinimal: 'Minimal', presetStandard: 'Standard', presetCustom: 'Personnalisé' },
  es: { secPage: 'Página', presetMinimal: 'Mínimo', presetStandard: 'Estándar', presetCustom: 'Personal' },
  zh: { secPage: '页面', presetMinimal: '极简', presetStandard: '标准', presetCustom: '个性化' }
}
const topbarText = {
  en: { colorMode: 'Color mode', themeAuto: 'System theme', themeDark: 'Dark theme', themeLight: 'Light theme', langLabel: 'Language', searchLabel: 'Search the web', searchFormTitle: 'Type a search and press Enter', engineLabel: 'Search engine: {name}. Click to change.', searchSubmit: 'Search', timeClick: 'Click to cycle through 24-hour, 12-hour and full time', askAiCaption: 'Ask AI' },
  nl: { colorMode: 'Kleurmodus', themeAuto: 'Systeemthema', themeDark: 'Donker thema', themeLight: 'Licht thema', langLabel: 'Taal', searchLabel: 'Zoek op het web', searchFormTitle: 'Typ een zoekopdracht en druk op Enter', engineLabel: 'Zoekmachine: {name}. Klik om te wisselen.', searchSubmit: 'Zoeken', timeClick: 'Klik om te wisselen tussen 24 uur, 12 uur en volledige tijd', askAiCaption: 'Vraag AI' },
  de: { colorMode: 'Farbmodus', themeAuto: 'Systemdesign', themeDark: 'Dunkles Design', themeLight: 'Helles Design', langLabel: 'Sprache', searchLabel: 'Im Web suchen', searchFormTitle: 'Suchbegriff eingeben und Enter drücken', engineLabel: 'Suchmaschine: {name}. Klicken zum Wechseln.', searchSubmit: 'Suchen', timeClick: 'Klicken, um zwischen 24-Stunden-, 12-Stunden- und Vollzeit zu wechseln', askAiCaption: 'KI fragen' },
  fr: { colorMode: 'Mode couleur', themeAuto: 'Thème système', themeDark: 'Thème sombre', themeLight: 'Thème clair', langLabel: 'Langue', searchLabel: 'Rechercher sur le web', searchFormTitle: 'Saisissez une recherche et appuyez sur Entrée', engineLabel: 'Moteur de recherche : {name}. Cliquez pour changer.', searchSubmit: 'Rechercher', timeClick: 'Cliquez pour alterner entre 24 h, 12 h et l’heure complète', askAiCaption: 'Demander à l’IA' },
  es: { colorMode: 'Modo de color', themeAuto: 'Tema del sistema', themeDark: 'Tema oscuro', themeLight: 'Tema claro', langLabel: 'Idioma', searchLabel: 'Buscar en la web', searchFormTitle: 'Escribe una búsqueda y pulsa Intro', engineLabel: 'Buscador: {name}. Haz clic para cambiar.', searchSubmit: 'Buscar', timeClick: 'Haz clic para alternar entre 24 horas, 12 horas y hora completa', askAiCaption: 'Preguntar a la IA' },
  zh: { colorMode: '颜色模式', themeAuto: '跟随系统', themeDark: '深色主题', themeLight: '浅色主题', langLabel: '语言', searchLabel: '搜索网页', searchFormTitle: '输入搜索内容并按 Enter', engineLabel: '搜索引擎：{name}。点击切换。', searchSubmit: '搜索', timeClick: '点击可在 24 小时制、12 小时制和完整时间之间切换', askAiCaption: '询问 AI' },
}
const advancedText = {
  en: { advTitle: 'Advanced settings', advancedOpen: 'Advanced', advancedClosed: '← Back to basic settings' },
  nl: { advTitle: 'Geavanceerde instellingen', advancedOpen: 'Geavanceerd', advancedClosed: '← Terug naar basisinstellingen' },
  de: { advTitle: 'Erweiterte Einstellungen', advancedOpen: 'Erweitert', advancedClosed: '← Zurück zu den Grundeinstellungen' },
  fr: { advTitle: 'Réglages avancés', advancedOpen: 'Avancé', advancedClosed: '← Retour aux réglages de base' },
  es: { advTitle: 'Ajustes avanzados', advancedOpen: 'Avanzado', advancedClosed: '← Volver a los ajustes básicos' },
  zh: { advTitle: '高级设置', advancedOpen: '高级', advancedClosed: '← 返回基本设置' }
}
for (const lang of Object.keys(text)) Object.assign(text[lang], linksText[lang], advancedText[lang], pageText[lang], topbarText[lang], bgTitleText[lang], tintText[lang], wallpaperText[lang], disclaimerText[lang], linkToggleText[lang], linksOwnText[lang], aiText[lang], manageText[lang], dataText[lang], tintCycleText[lang], quoteTitleText[lang], ipText[lang], sectionText[lang], forecastText[lang], { hourHeads: hourHeads[lang] }, zonesText[lang], { ipPrivacy: ipPrivacy[lang] })
const weatherWording = {
  en: { location: 'Location', locIp: 'My place via IP address', locCity: 'A city I choose', noSource: 'Choose a place', needPlace: 'The weather needs a place: choose your IP address or a city below.' },
  nl: { location: 'Locatie', locIp: 'Mijn plaats via IP-adres', locCity: 'Een stad die ik kies', noSource: 'Kies een plaats', needPlace: 'Het weer heeft een plaats nodig: kies hieronder je IP-adres of een stad.' },
  de: { location: 'Standort', locIp: 'Mein Ort per IP-Adresse', locCity: 'Eine Stadt, die ich wähle', noSource: 'Ort wählen', needPlace: 'Das Wetter braucht einen Ort: wähle unten deine IP-Adresse oder eine Stadt.' },
  fr: { location: 'Position', locIp: 'Ma position via IP', locCity: 'Une ville que je choisis', noSource: 'Choisir un lieu', needPlace: 'La météo a besoin d’un lieu : choisissez ci-dessous votre adresse IP ou une ville.' },
  es: { location: 'Ubicación', locIp: 'Mi lugar por IP', locCity: 'Una ciudad que elijo', noSource: 'Elige un lugar', needPlace: 'El tiempo necesita un lugar: elige abajo tu IP o una ciudad.' },
  zh: { location: '位置', locIp: '通过 IP 地址定位', locCity: '我选择的城市', noSource: '选择地点', needPlace: '天气需要一个地点：请在下方选择你的 IP 地址或一个城市。' },
}
for (const lang of Object.keys(text)) Object.assign(text[lang], weatherWording[lang])
// Help: the settings window's help. The same content as the README, without screenshots.
const helpText = {
  en: { title: 'Help', settings: 'Settings', close: 'Close', faq: 'Frequently asked questions', sections: [
    ['About this page', 'A quiet start page, built with Claude Code as an experiment in vibe coding. I wanted to see how far plain language gets you with a small web app. My opinion: a start page should be nearly empty; extras earn their place by being found, not by staring back at you.', ['https://github.com/a4ds5t/Minimal-StartPage', 'https://start.soholocal.nl/']],
    ['Search', 'Type and press Enter, or click the magnifier. The icon on the left shows the search engine: click it to switch between DuckDuckGo (the default), Kagi, Brave and Google. Your choice is remembered. Under Advanced you can also open search in a new tab.'],
    ['AI shortcuts', 'Shortcuts below the search bar. In Manage data you tick the AI services you want, up to five; your own shortcuts count toward the same five. Each shortcut shows its service icon. AI links open in a new tab by default, and you can change that under Advanced.'],
    ['Clock', 'Hover over the time to see your time zone. Click the time to cycle through 24-hour, 12-hour and full time with seconds. When time zones are on, the clock icon above the time opens the zones you chose.'],
    ['Date', 'Hover over the date to see the ISO week and the day of the year. Click it to switch between the long form and a short numeric date. The order follows your browser unless you choose one under Advanced.'],
    ['Links', 'The button at the top left opens your links. The icons at the top of that window are permanent. Hovering the button shows your own links. You can add up to 15 links of your own, each with an optional description, and remove or edit them. With Own links off, the button opens Wikipedia directly.'],
    ['Weather', 'Off by default. Turn it on in Settings and choose where to find the weather: your IP address, or a city you pick. Hover over the temperature for a short preview; click it for the full forecast with the next 6 hours and seven days. Up to five more places can be added in Manage, under Weather; choose one in this window to see its forecast.'],
    ['Background', 'Each press of the round button at the bottom right goes to the next background: none first, then the ones switched on in Data beheren. The button at the bottom left changes the background colour in steps; on a computer that is the button too.'],
    ['Settings', 'Open them with the gear at the top right, or press ?. Press Esc to close. Options that depend on another option are greyed out until that one is on. The page presets (Minimal and Standard) sit at the top. Personal shows when your choices match neither. Advanced lists every option, in groups; its link goes back to the basic settings. Bottom right you see the version and the date of the last change. The last number rises with every change; a release gets the next version number, such as 1.4. At the bottom of Advanced, Reset settings brings back the defaults and keeps your data. Delete my data removes your own links, AI shortcuts, time zones, city and extra places. That cannot be undone, so first make a backup with Manage data and Export data.'],
    ['Your data', 'Your choices are stored only in this browser. Weather sends your IP address to ipapi.co, or the city you pick to Open-Meteo, only while weather is on; showing your IP address uses the same lookup. Extra places send their name to Open-Meteo. Custom AI shortcuts load their icon from their own site. Nothing else leaves the page.'],
    ['Export and import', 'Export data saves your choices, links and places to a file you keep. Import data loads such a file: Merge adds what is new and keeps the rest, Replace overwrites everything.'],
  ] },
  nl: { title: 'Help', settings: 'Instellingen', close: 'Sluiten', faq: 'Veelgestelde vragen', sections: [
    ['Over deze pagina', 'Een rustige startpagina, gebouwd met Claude Code als experiment in vibe coding. Ik wilde zien hoe ver gewone taal je brengt met een kleine webapp. Mijn mening: een startpagina hoort bijna leeg te zijn; de extra’s verdienen hun plek doordat je ze vindt, niet doordat ze je aankijken.', ['https://github.com/a4ds5t/Minimal-StartPage', 'https://start.soholocal.nl/']],
    ['Zoeken', 'Typ en druk op Enter, of klik op het vergrootglas. Het icoon links toont de zoekmachine: klik erop om te wisselen tussen DuckDuckGo (de standaard), Kagi, Brave en Google. Je keuze wordt onthouden. Onder Geavanceerd kun je zoeken ook in een nieuw tabblad laten openen.'],
    ['AI-snelkoppelingen', 'Snelkoppelingen onder de zoekbalk. In Data beheren vink je de AI-diensten aan die je wilt, maximaal vijf; je eigen snelkoppelingen tellen mee in die vijf. Elke snelkoppeling toont het icoon van de dienst. AI-links openen standaard in een nieuw tabblad; dat kun je aanpassen onder Geavanceerd.'],
    ['Klok', 'Ga met de muis over de tijd om je tijdzone te zien. Klik op de tijd om te wisselen tussen 24 uur, 12 uur en volledige tijd met seconden. Staan de tijdzones aan, dan opent het klokje boven de tijd de zones die je koos.'],
    ['Datum', 'Ga met de muis over de datum om de ISO-week en de dag van het jaar te zien. Klik erop om te wisselen tussen de lange vorm en een korte datum. De volgorde volgt je browser, tenzij je er onder Geavanceerd een kiest.'],
    ['Links', 'De knop linksboven opent je links. De icoontjes bovenaan dat venster zijn vast. Met de muis over de knop zie je je eigen links. Je kunt er maximaal 15 toevoegen, elk met een optionele beschrijving, en ze bewerken of verwijderen. Staat Eigen links uit, dan opent de knop direct Wikipedia.'],
    ['Weer', 'Standaard uit. Zet het aan in de instellingen en kies waar het weer vandaan komt: je IP-adres, of een stad die je kiest. Ga met de muis over de temperatuur voor een korte voorspelling; klik erop voor de volledige verwachting met de komende 6 uur en zeven dagen. Je kunt in Beheren onder Weer tot vijf extra plaatsen toevoegen; kies er in dit venster een om die voorspelling te zien.'],
    ['Achtergrond', 'Elke druk op de ronde knop rechtsonder gaat naar de volgende achtergrond: eerst geen, daarna de achtergronden die je in Data beheren hebt aangezet. De knop linksonder wisselt de achtergrondkleur in stappen; op de computer is dat ook een knop.'],
    ['Instellingen', 'Open ze met het tandwiel rechtsboven, of druk op ?. Druk op Esc om te sluiten. Opties die van een andere optie afhangen, zijn grijs tot die aan staat. Bovenaan staan de paginakeuzes Minimaal en Standaard. Persoonlijk verschijnt als je keuzes bij geen van beide passen. Geavanceerd toont alle opties, in groepen; de link ernaast brengt je terug naar de basisinstellingen. Rechtsonder staan de versie en de datum van de laatste wijziging. Het laatste getal gaat omhoog bij elke wijziging; een release krijgt het volgende versienummer, zoals 1.4. Onderaan Geavanceerd staat Resetten. Instellingen resetten zet alleen je instellingen terug naar de standaard. Mijn gegevens wissen verwijdert je eigen links, AI-snelkoppelingen, tijdzones, stad en extra plaatsen. Dat kan niet ongedaan worden, dus maak eerst een backup via Data beheren, met Gegevens exporteren.'],
    ['Je gegevens', 'Je keuzes worden alleen in deze browser bewaard. Het weer stuurt je IP-adres naar ipapi.co, of de stad die je kiest naar Open-Meteo, alleen als het weer aanstaat; het tonen van je IP-adres gebruikt dezelfde opzoeking. Extra plaatsen sturen hun naam naar Open-Meteo. Eigen AI-snelkoppelingen laden hun icoon van hun eigen site. Er gaat verder niets naar buiten.'],
    ['Gegevens exporteren', 'Gegevens exporteren slaat je keuzes, links en plaatsen op in een bestand dat bij jou blijft. Gegevens importeren laadt zo’n bestand: Samenvoegen voegt toe wat nieuw is en laat de rest staan, Vervangen overschrijft alles.'],
  ] },
  de: { title: 'Hilfe', settings: 'Einstellungen', close: 'Schließen', faq: 'Häufige Fragen', sections: [
    ['Über diese Seite', 'Eine ruhige Startseite, mit Claude Code gebaut als Experiment in Vibe Coding. Ich wollte sehen, wie weit normale Sprache eine kleine Web-App bringt. Meine Meinung: Eine Startseite sollte fast leer sein; Extras verdienen ihren Platz, weil man sie findet, nicht weil sie einen anstarren.', ['https://github.com/a4ds5t/Minimal-StartPage', 'https://start.soholocal.nl/']],
    ['Suche', 'Tippe und drücke Enter, oder klicke auf die Lupe. Das Symbol links zeigt die Suchmaschine: Klick darauf, um zwischen DuckDuckGo (Standard), Kagi, Brave und Google zu wechseln. Deine Wahl wird gespeichert. Unter Erweitert kannst du die Suche auch in einem neuen Tab öffnen lassen.'],
    ['KI-Verknüpfungen', 'Verknüpfungen unter dem Suchfeld. In Daten verwalten wählst du die KI-Dienste aus, bis zu fünf; eigene Verknüpfungen zählen zu diesen fünf. Jede Verknüpfung zeigt das Symbol ihres Dienstes. KI-Links öffnen standardmäßig in einem neuen Tab; das lässt sich unter Erweitert ändern.'],
    ['Uhr', 'Fahre mit der Maus über die Zeit, um deine Zeitzone zu sehen. Ein Klick auf die Zeit wechselt zwischen 24-Stunden-, 12-Stunden- und voller Zeit mit Sekunden. Sind Zeitzonen aktiv, öffnet die Kugel über der Zeit die gewählten Zonen.'],
    ['Datum', 'Fahre mit der Maus über das Datum, um die ISO-Woche und den Tag des Jahres zu sehen. Ein Klick wechselt zwischen langer Form und TT-MM-JJJJ.'],
    ['Links', 'Die Schaltfläche oben links öffnet deine Links. Die Symbole oben im Fenster sind fest. Mit der Maus über der Schaltfläche siehst du deine eigenen Links. Du kannst bis zu 15 eigene Links hinzufügen, mit optionaler Beschreibung, und sie bearbeiten oder entfernen. Ist Eigene Links aus, öffnet die Schaltfläche direkt Wikipedia.'],
    ['Wetter', 'Standardmäßig aus. Schalte es in den Einstellungen ein und wähle, woher das Wetter kommt: deine IP-Adresse oder eine Stadt, die du wählst. Fahre mit der Maus über die Temperatur für eine kurze Vorschau; klicke für die vollständige Vorhersage mit den nächsten 6 Stunden und sieben Tagen. Unter Verwalten, Wetter kannst du bis zu fünf weitere Orte hinzufügen; wähle hier einen aus, um dessen Vorhersage zu sehen.'],
    ['Hintergrund', 'Jeder Druck auf den runden Knopf unten rechts wechselt zum nächsten Hintergrund: zuerst keiner, dann die in „Daten verwalten“ eingeschalteten. Der Knopf unten links wechselt die Hintergrundfarbe in Stufen; am Computer ist das ebenfalls ein Knopf.'],
    ['Einstellungen', 'Öffne sie mit dem Zahnrad oben rechts oder drücke ?. Esc schließt sie. Optionen, die von einer anderen abhängen, sind grau, bis diese eingeschaltet ist. Oben stehen die Seitenvorlagen Minimal und Standard. Persönlich erscheint, wenn deine Auswahl zu keiner passt. Erweitert zeigt alle Optionen, in Gruppen; der Link daneben führt zurück zu den Grundeinstellungen. Unten rechts stehen die Version und das Datum der letzten Änderung. Die letzte Zahl steigt mit jeder Änderung; ein Release bekommt die nächste Versionsnummer, etwa 1.4. Unten unter Erweitert steht der Block Zurücksetzen. Einstellungen zurücksetzen stellt nur die Standardwerte wieder her. Meine Daten löschen entfernt deine eigenen Links, KI-Verknüpfungen, Zeitzonen, Stadt und zusätzlichen Orte. Das lässt sich nicht rückgängig machen, also erstelle zuerst ein Backup über Daten verwalten, mit Daten exportieren.'],
    ['Deine Daten', 'Deine Einstellungen werden nur in diesem Browser gespeichert. Das Wetter sendet deine IP-Adresse an ipapi.co bzw. die gewählte Stadt an Open-Meteo, nur wenn das Wetter aktiv ist; das Anzeigen deiner IP-Adresse nutzt dieselbe Abfrage. Zusätzliche Orte senden ihren Namen an Open-Meteo. Eigene KI-Verknüpfungen laden ihr Symbol von ihrer eigenen Seite. Sonst verlässt nichts die Seite.'],
    ['Daten exportieren und importieren', 'Daten exportieren speichert deine Einstellungen, Links und Orte in einer Datei, die bei dir bleibt. Daten importieren lädt so eine Datei: Zusammenführen ergänzt, was neu ist, und behält den Rest; Ersetzen überschreibt alles.'],
  ] },
  fr: { title: 'Aide', settings: 'Paramètres', close: 'Fermer', faq: 'Questions fréquentes', sections: [
    ['À propos de cette page', 'Une page d’accueil sobre, construite avec Claude Code dans le cadre d’une expérience de vibe coding. Je voulais voir jusqu’où le langage naturel mène une petite application web. Mon avis : une page d’accueil doit rester presque vide ; les extras méritent leur place parce qu’on les trouve, pas parce qu’ils s’imposent.', ['https://github.com/a4ds5t/Minimal-StartPage', 'https://start.soholocal.nl/']],
    ['Recherche', 'Tapez et appuyez sur Entrée, ou cliquez sur la loupe. L’icône à gauche indique le moteur : cliquez dessus pour passer de DuckDuckGo (par défaut) à Kagi, Brave ou Google. Votre choix est mémorisé. Dans Avancé, vous pouvez aussi ouvrir la recherche dans un nouvel onglet.'],
    ['Raccourcis IA', 'Raccourcis sous la barre de recherche. Dans Gérer les données, cochez les services IA voulus, cinq au maximum ; vos propres raccourcis comptent dans ces cinq. Chaque raccourci affiche l’icône de son service. Les liens IA s’ouvrent par défaut dans un nouvel onglet ; cela se règle dans Avancé.'],
    ['Horloge', 'Passez la souris sur l’heure pour voir votre fuseau. Cliquez sur l’heure pour passer de 24 heures à 12 heures, puis à l’heure complète avec les secondes. Si les fuseaux sont activés, l’icône d’horloge au-dessus de l’heure ouvre les fuseaux choisis.'],
    ['Date', 'Passez la souris sur la date pour voir la semaine ISO et le jour de l’année. Cliquez pour passer de la forme longue à une date courte. L’ordre suit votre navigateur, sauf si vous en choisissez un dans Avancé.'],
    ['Liens', 'Le bouton en haut à gauche ouvre vos liens. Les icônes en haut de cette fenêtre sont permanentes. Survoler le bouton affiche vos propres liens. Vous pouvez en ajouter jusqu’à 15, avec une description facultative, et les modifier ou les supprimer. Si Liens personnels est désactivé, le bouton ouvre directement Wikipédia.'],
    ['Météo', 'Désactivée par défaut. Activez-la dans les paramètres et choisissez d’où vient la météo : votre adresse IP, ou une ville de votre choix. Survolez la température pour un aperçu ; cliquez pour la prévision complète sur 6 heures et sept jours. Vous pouvez ajouter jusqu’à cinq lieux de plus dans Gérer, sous Météo ; choisissez-en un dans cette fenêtre pour voir sa prévision.'],
    ['Fond', 'Chaque pression sur le bouton rond en bas à droite passe au fond suivant : d’abord aucun, puis ceux activés dans « Gérer les données ». Le bouton en bas à gauche change la couleur du fond par étapes ; sur ordinateur, c’est aussi un bouton.'],
    ['Paramètres', 'Ouvrez-les avec l’engrenage en haut à droite, ou appuyez sur ?. Échap ferme. Les options qui dépendent d’une autre sont grisées tant que celle-ci n’est pas activée. En haut se trouvent les préréglages Minimal et Standard. Personnalisé apparaît si vos choix ne correspondent à aucun des deux. Avancé affiche toutes les options, par groupes ; le lien à côté revient aux réglages de base. En bas à droite figurent la version et la date de la dernière modification. Le dernier chiffre augmente à chaque modification ; une version publiée reçoit le numéro suivant, comme 1.4. En bas d’Avancé se trouve Réinitialiser. Réinitialiser les réglages remet seulement les réglages par défaut. Effacer mes données supprime vos liens, raccourcis IA, fuseaux, ville et lieux supplémentaires. Action irréversible : faites d’abord une sauvegarde via Gérer les données, avec Exporter les données.'],
    ['Vos données', 'Vos choix ne sont conservés que dans ce navigateur. La météo envoie votre adresse IP à ipapi.co, ou la ville choisie à Open-Meteo, seulement si la météo est activée ; afficher votre adresse IP utilise la même requête. Les lieux supplémentaires envoient leur nom à Open-Meteo. Les raccourcis IA personnels chargent leur icône depuis leur propre site. Rien d’autre ne quitte la page.'],
    ['Exporter et importer', 'Exporter les données enregistre vos choix, liens et lieux dans un fichier qui reste chez vous. Importer les données charge ce fichier : Fusionner ajoute ce qui est nouveau et garde le reste ; Remplacer écrase tout.'],
  ] },
  es: { title: 'Ayuda', settings: 'Ajustes', close: 'Cerrar', faq: 'Preguntas frecuentes', sections: [
    ['Sobre esta página', 'Una página de inicio tranquila, creada con Claude Code como experimento de vibe coding. Quería ver hasta dónde llega el lenguaje natural con una pequeña aplicación web. Mi opinión: una página de inicio debería estar casi vacía; los extras se ganan su sitio porque se encuentran, no porque te miren.', ['https://github.com/a4ds5t/Minimal-StartPage', 'https://start.soholocal.nl/']],
    ['Búsqueda', 'Escribe y pulsa Intro, o haz clic en la lupa. El icono de la izquierda muestra el buscador: haz clic para cambiar entre DuckDuckGo (por defecto), Kagi, Brave y Google. Tu elección se recuerda. En Avanzado también puedes abrir la búsqueda en una pestaña nueva.'],
    ['Accesos de IA', 'Accesos debajo de la barra de búsqueda. En Gestionar datos marca los servicios de IA que quieras, hasta cinco; tus accesos propios cuentan dentro de esos cinco. Cada acceso muestra el icono de su servicio. Los enlaces de IA se abren por defecto en una pestaña nueva; se cambia en Avanzado.'],
    ['Reloj', 'Pasa el ratón sobre la hora para ver tu zona horaria. Haz clic en la hora para cambiar entre 24 horas, 12 horas y hora completa con segundos. Si las zonas horarias están activas, el globo sobre la hora abre las zonas que elegiste.'],
    ['Fecha', 'Pasa el ratón sobre la fecha para ver la semana ISO y el día del año. Haz clic para cambiar entre la forma larga y una fecha corta. El orden sigue a tu navegador, salvo que elijas uno en Avanzado.'],
    ['Enlaces', 'El botón de arriba a la izquierda abre tus enlaces. Los iconos de la parte superior de esa ventana son fijos. Al pasar el ratón sobre el botón ves tus propios enlaces. Puedes añadir hasta 15, cada uno con una descripción opcional, y editarlos o quitarlos. Con Enlaces propios desactivado, el botón abre Wikipedia directamente.'],
    ['Tiempo', 'Desactivado por defecto. Actívalo en los ajustes y elige de dónde viene: tu IP, o una ciudad que elijas. Pasa el ratón sobre la temperatura para una vista previa; haz clic para la previsión completa de 6 horas y siete días. Puedes añadir hasta cinco lugares más en Gestionar, en Tiempo; elige uno en esta ventana para ver su previsión.'],
    ['Fondo', 'Cada pulsación del botón redondo de abajo a la derecha pasa al siguiente fondo: primero ninguno, luego los activados en «Gestionar datos». El botón de abajo a la izquierda cambia el color del fondo por pasos; en el ordenador también es un botón.'],
    ['Ajustes', 'Ábrelos con el engranaje arriba a la derecha, o pulsa ?. Esc los cierra. Las opciones que dependen de otra aparecen en gris hasta que esa esté activada. Arriba están los ajustes predefinidos Minimal y Standard. Personal aparece si tus opciones no coinciden con ninguno. Avanzado muestra todas las opciones, en grupos; el enlace de al lado vuelve a los ajustes básicos. Abajo a la derecha aparecen la versión y la fecha del último cambio. El último número sube con cada cambio; una versión publicada recibe el siguiente número, como 1.4. Al final de Avanzado están Restablecer. Restablecer ajustes solo devuelve los valores predeterminados. Borrar mis datos elimina tus enlaces propios, accesos de IA, zonas horarias, ciudad y lugares adicionales. No se puede deshacer, así que antes haz una copia con Gestionar datos y Exportar datos.'],
    ['Tus datos', 'Tus elecciones solo se guardan en este navegador. El tiempo envía tu IP a ipapi.co, o la ciudad que elijas a Open-Meteo, solo mientras esté activado; mostrar tu IP usa la misma consulta. Los lugares adicionales envían su nombre a Open-Meteo. Los accesos de IA propios cargan su icono desde su propio sitio. Nada más sale de la página.'],
    ['Exportar e importar', 'Exportar datos guarda tus opciones, enlaces y lugares en un archivo que se queda contigo. Importar datos carga ese archivo: Combinar añade lo nuevo y conserva el resto; Reemplazar sobrescribe todo.'],
  ] },
  zh: { title: '帮助', settings: '设置', close: '关闭', faq: '常见问题', sections: [
    ['关于此页', '一个安静的起始页，用 Claude Code 构建，是一次 vibe coding 的实验。我想看看自然语言能把一个小型网页应用带到多远。我的看法：起始页应该几乎是空的；附加功能应该靠被发现赢得位置，而不是一直盯着你。', ['https://github.com/a4ds5t/Minimal-StartPage', 'https://start.soholocal.nl/']],
    ['搜索', '输入后按 Enter，或点击放大镜。左侧图标显示搜索引擎：点击可在 DuckDuckGo（默认）、Kagi、Brave 和 Google 之间切换。你的选择会被记住。 在“高级”中，也可以让搜索在新标签页中打开。'],
    ['AI 快捷方式', '搜索框下方的快捷方式。在“管理数据”中勾选想要的 AI 服务，最多五个；你自己添加的快捷方式也计入这五个。每个快捷方式显示其服务的图标。AI 链接默认在新标签页中打开，可在“高级”中更改。'],
    ['时钟', '把鼠标移到时间上可看到你的时区。点击时间可在 24 小时制、12 小时制和带秒的完整时间之间切换。开启时区后，时间上方的地球图标会打开你选择的时区。'],
    ['日期', '把鼠标移到日期上可看到 ISO 周数和一年中的第几天。点击可在长格式和短日期之间切换。顺序默认跟随浏览器，也可以在“高级”中选择。'],
    ['链接', '左上角的按钮打开你的链接。该窗口顶部的图标是固定的。把鼠标移到按钮上可看到你自己的链接。你最多可以添加 15 个链接，每个都可以有可选说明，并可编辑或删除。关闭“自定义链接”后，按钮会直接打开维基百科。'],
    ['天气', '默认关闭。在设置中开启，并选择天气的来源：你的 IP 地址，或你选择的城市。把鼠标移到温度上可看到简短预报；点击可查看未来 6 小时和七天的完整预报。 在“管理”的“天气”中最多可添加五个其他地点；在此窗口中选择一个即可查看其预报。'],
    ['背景', '点击右下角的圆形按钮会切换到下一个背景：先是无背景，然后是在“管理数据”里开启的背景。左下角的按钮按步骤改变背景颜色；电脑上也是按钮。'],
    ['设置', '点击右上角的齿轮打开，或按 ?。按 Esc 关闭。依赖其他选项的选项会变灰，直到那个选项开启。顶部是页面预设：极简和标准。两者都不符时显示个性化。高级会列出所有选项，并分组显示；旁边的链接可返回基本设置。右下角显示版本号和最后一次修改的日期。最后一位数字会随每次修改增加；发布版本时会得到下一个版本号，例如 1.4。高级底部是重置。重置设置只会恢复默认值。删除我的数据会移除你自己的链接、AI 快捷方式、时区、城市和额外地点。此操作无法撤销，因此请先在管理数据中导出数据作为备份。'],
    ['你的数据', '你的选择只保存在这个浏览器中。开启天气时，页面会把你的 IP 地址发送到 ipapi.co，或把你选择的城市发送到 Open-Meteo；显示 IP 地址使用同一查询。额外地点会把名称发送到 Open-Meteo。自定义 AI 快捷方式会从各自的网站加载图标。除此之外，页面不会发送任何内容。'],
    ['导出和导入', '导出数据会把你的选择、链接和地点保存到一个由你保管的文件中。导入数据会加载该文件：合并会添加新内容并保留其余部分，替换会覆盖全部内容。'],
  ] },
};

const t = text[uiLang] || text.en
const helpCopy = helpText[uiLang] || helpText.en
const words = weatherWords[uiLang] || weatherWords.en

// Open-Meteo weather codes (WMO), grouped.
const weatherKey = (code) => {
  if (code === 0) return 'clear'
  if (code === 1) return 'mostly'
  if (code === 2) return 'partly'
  if (code === 3) return 'cloudy'
  if (code === 45 || code === 48) return 'fog'
  if (code >= 51 && code <= 55) return 'drizzle'
  if (code === 61 || code === 63) return 'rain'
  if (code === 65) return 'heavyRain'
  if (code === 71 || code === 73) return 'snow'
  if (code === 75) return 'heavySnow'
  if (code === 80 || code === 81) return 'showers'
  if (code === 82) return 'heavyShowers'
  if (code >= 95) return 'storm'
  return null
}

// Small outline icons in the page's style. The colour only shows on hover (see style.css).
const cloudPath = 'M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 9.2 3.5 3.5 0 0 0 7 18z'
const sunPath = '<circle cx="9" cy="8" r="3"/><path d="M9 2v1M3.5 8h-1M4.6 3.6l.7.7M13.4 3.6l-.7.7"/>'
const weatherIcons = {
  clear: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  mostly: `${sunPath}<path d="M9 19h8a3.5 3.5 0 0 0 .4-6.97A5 5 0 0 0 8 13.5 3 3 0 0 0 9 19z"/>`,
  partly: `${sunPath}<path d="M9 19h8a3.5 3.5 0 0 0 .4-6.97A5 5 0 0 0 8 13.5 3 3 0 0 0 9 19z"/>`,
  cloudy: `<path d="${cloudPath}"/>`,
  fog: '<path d="M4 9h16M6 13h12M4 17h16"/>',
  drizzle: `<path d="${cloudPath}"/><path d="M8 21l.5-1M12 21l.5-1M16 21l.5-1"/>`,
  rain: `<path d="${cloudPath}"/><path d="M8 21l-1 1.5M12 21l-1 1.5M16 21l-1 1.5"/>`,
  heavyRain: `<path d="${cloudPath}"/><path d="M7 21l-1 1.5M11 21l-1 1.5M15 21l-1 1.5M19 21l-1 1.5"/>`,
  snow: `<path d="${cloudPath}"/><path d="M8 20h.01M12 21h.01M16 20h.01"/>`,
  heavySnow: `<path d="${cloudPath}"/><path d="M7 20h.01M10 21h.01M13 20h.01M16 21h.01"/>`,
  showers: `<path d="${cloudPath}"/><path d="M9 21l-1 1.5M15 21l-1 1.5"/>`,
  heavyShowers: `<path d="${cloudPath}"/><path d="M7 21l-1 1.5M11 21l-1 1.5M15 21l-1 1.5M19 21l-1 1.5"/>`,
  storm: `<path d="${cloudPath}"/><path d="M12.5 14.5l-2 3.5h2.5l-1.5 3.5"/>`,
}
const weatherIcon = (key) => `<svg class="weather-icon ${key || 'cloudy'}" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${weatherIcons[key] || weatherIcons.cloudy}</svg>`

// Keeps a response in localStorage for maxAge milliseconds, so a reload does not fetch again.
const fetchCached = async (key, maxAge, url, fresh = false) => {
  try {
    const hit = JSON.parse(localStorage.getItem(key) || 'null')
    if (!fresh && hit && Date.now() - hit.at < maxAge) return hit.data
  } catch {}
  const data = await (await fetch(url)).json()
  try { localStorage.setItem(key, JSON.stringify({ at: Date.now(), data })) } catch {}
  return data
}

const weatherRow = (...cells) => {
  const row = document.createElement('div')
  row.className = 'weather-row'
  row.append(...cells.map((cell) => (cell instanceof Node ? cell : Object.assign(document.createElement('span'), { textContent: cell }))))
  return row
}

// A cell with a condition icon before its text, e.g. an hour or the current state.
const iconCell = (key, label, className) => {
  const cell = el('span', className)
  cell.innerHTML = weatherIcon(key)
  cell.append(label)
  return cell
}

// The city you entered wins; otherwise the IP lookup, if you allow it.
const getPlace = async () => {
  if (locationMode === 'city') return city ? { label: `${city.name}, ${city.country}`, latitude: city.latitude, longitude: city.longitude, ip: null } : null
  const info = await ipLookup()
  if (typeof info.latitude !== 'number') return null
  return { label: `${info.city}, ${info.country_name}`, latitude: info.latitude, longitude: info.longitude, ip: info.ip, detail: [`${info.city}, ${info.country_name}`, info.org].filter(Boolean).join(' · ') }
}

// Latest answer, kept so the full forecast can be drawn without asking again.
let current = null
// Extra places next to the own one: five at most, shown as chips in the forecast window.
const PLACE_LIMIT = 5
const ZONE_LIMIT = 5
// At the limit, the add field is greyed out and says so in its own middle, e.g. "5 of 5 · full", shown as its placeholder.
const limitText = (count, max) => {
  const full = count >= max
  return { full, text: full ? t.limitFull.replaceAll('{n}', max) : '' }
}
const limitCount = (fieldId, count, max) => {
  const field = document.getElementById(fieldId)
  const { full, text } = limitText(count, max)
  field.placeholder = text
  field.classList.toggle('limit-full', full)
}
let extraPlaces = []
try {
  const saved = JSON.parse(localStorage.getItem('weatherPlaces') || 'null')
  if (Array.isArray(saved)) extraPlaces = saved.filter((p) => p && typeof p.label === 'string' && typeof p.latitude === 'number' && typeof p.longitude === 'number').slice(0, PLACE_LIMIT)
} catch {}
const savePlaces = () => writeKey('weatherPlaces', JSON.stringify(extraPlaces))
// The place shown in the forecast window: null for the own place, otherwise { place, forecast }.
let viewed = null
let viewIndex = 0

const forecastUrl = (place) => 'https://api.open-meteo.com/v1/forecast' +
  `?latitude=${place.latitude}&longitude=${place.longitude}` +
  '&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m,relative_humidity_2m' +
  '&hourly=temperature_2m,precipitation_probability,wind_speed_10m,weather_code' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
  '&timezone=auto&forecast_days=7&forecast_hours=8'

const el = (tag, className, textContent) => Object.assign(document.createElement(tag), { className: className || '', textContent: textContent ?? '' })

const showWeather = async () => {
  try {
    const place = await getPlace()
    if (!place) {
      // Greyed-out icon: a click opens settings, where a place can be chosen.
      showIdle(t.noSource)
      current = null
      weatherDetail.replaceChildren()
      return
    }
    const forecast = await fetchCached(`weather:v2:${place.latitude},${place.longitude}`, 30 * 60e3, forecastUrl(place))
    current = { place, forecast }
    const now = forecast.current
    const start = forecast.hourly.time.indexOf(now.time)
    const key = weatherKey(now.weather_code)
    const temperature = `${Math.round(now.temperature_2m)}°`
    const next = forecast.hourly.time.slice(start + 1, start + 7).map((time, i) => weatherRow(
      iconCell(weatherKey(forecast.hourly.weather_code[start + 1 + i]), time.slice(11, 16), 'hour-cell'),
      `${Math.round(forecast.hourly.temperature_2m[start + 1 + i])}°`,
      `${forecast.hourly.precipitation_probability[start + 1 + i]}%`
    ))
    weatherButton.innerHTML = `${weatherIcon(key)}<span>${temperature}</span>`
    weatherButton.setAttribute('aria-label', `${key ? words[key] : ''} ${temperature}`.trim())
    weatherDetail.replaceChildren(
      el('div', 'preview-title', place.label),
      weatherRow(iconCell(key, key ? words[key] : '', 'now-cell'), temperature, ''),
      ...next,
      el('div', 'preview-hint', t.more)
    )
  } catch {
    weatherButton.textContent = t.unavailable
    current = null
    weatherDetail.replaceChildren()
  }
}

const renderForecast = () => {
  const shown = viewed || current
  if (!shown) return
  const { place, forecast } = shown
  renderPlaceChips()
  const now = forecast.current
  const key = weatherKey(now.weather_code)
  const temp = (v) => `${Math.round(v)}°`
  const section = (title, nodes) => {
    const s = el('section', 'forecast-section')
    s.append(el('h3', '', title), ...nodes)
    return s
  }
  const nowIcon = el('span', 'forecast-icon')
  nowIcon.innerHTML = weatherIcon(key)
  const nowRow = el('div', 'forecast-now')
  nowRow.append(nowIcon, el('span', 'forecast-temp', temp(now.temperature_2m)), el('span', 'forecast-word', key ? words[key] : ''))
  const meta = el('div', 'forecast-meta', `${t.feels} ${temp(now.apparent_temperature)} · ${t.wind} ${Math.round(now.wind_speed_10m)} km/h · ${t.humidity} ${now.relative_humidity_2m}%`)

  const start = forecast.hourly.time.indexOf(now.time)
  const hourHeader = el('div', 'forecast-row forecast-head')
  hourHeader.append(...t.hourHeads.map((label) => el('span', '', label)))
  const hourRows = [hourHeader, ...forecast.hourly.time.slice(start + 1, start + 7).map((time, i) => {
    const row = el('div', 'forecast-row')
    const j = start + 1 + i
    row.append(
      iconCell(weatherKey(forecast.hourly.weather_code[j]), time.slice(11, 16), 'hour-cell'),
      el('span', '', temp(forecast.hourly.temperature_2m[j])),
      el('span', '', `${forecast.hourly.precipitation_probability[j]}%`),
      el('span', '', `${Math.round(forecast.hourly.wind_speed_10m[j])} km/h`)
    )
    return row
  })]

  const dayRows = forecast.daily.time.map((iso, i) => {
    const row = el('div', 'forecast-row forecast-day')
    const dayKey = weatherKey(forecast.daily.weather_code[i])
    const icon = el('span', 'forecast-icon')
    icon.innerHTML = weatherIcon(dayKey)
    const label = new Date(`${iso}T12:00:00`).toLocaleDateString(uiLang, { weekday: 'short', day: 'numeric', month: 'short' })
    row.append(
      el('span', '', label),
      icon,
      el('span', '', `${temp(forecast.daily.temperature_2m_min[i])} / ${temp(forecast.daily.temperature_2m_max[i])}`),
      el('span', '', `${t.rain} ${forecast.daily.precipitation_probability_max[i]}%`)
    )
    return row
  })

  document.getElementById('forecast-title').textContent = place.label
  document.getElementById('forecast-body').replaceChildren(
    section(t.now, [nowRow, meta]),
    section(t.hours, hourRows),
    section(t.days, dayRows)
  )
  const link = document.getElementById('forecast-link')
  link.textContent = t.windy
  link.href = `https://www.windy.com/?${place.latitude},${place.longitude},8`
}

// Weather off: only a faint icon stays in the top bar, and it opens settings.
const showIdle = (label = t.show) => {
  weatherButton.classList.add('idle')
  weatherButton.innerHTML = weatherIcon(null)
  weatherButton.setAttribute('aria-label', label)
  weatherButton.title = label
}

// Minimal shows nothing extra, so the faint weather icon goes too; any other page keeps it to be found.
const syncWeatherButton = () => {
  weatherButton.hidden = !weatherOn && matchPreset() === 'minimal'
}

const hideWeather = () => {
  showIdle()
  weatherButton.setAttribute('aria-expanded', 'false')
  weatherDetail.replaceChildren()
  weatherDetail.classList.remove('open')
  current = null
}

const hasSource = () => (locationMode === 'city' ? !!city : true)

// The settings say when weather is on but has no place to look up.
const updateWeatherHint = () => {
  // The location options belong to the weather, so they are off while it is.
  document.querySelectorAll('#weather-sub input, #weather-sub button').forEach((el) => { el.disabled = !weatherOn })
}

const setWeather = (on) => {
  weatherOn = on
  writeKey('weather', on ? 'on' : 'off')
  updateWeatherHint()
  syncWeatherButton()
  if (on) {
    weatherButton.classList.remove('idle')
    weatherButton.removeAttribute('title')
    weatherButton.textContent = t.loading
    showWeather()
  } else {
    hideWeather()
  }
  settingsFields.weather.checked = on
}

let forecastFrom = null
const forecastDialog = document.getElementById('forecast')

const openForecast = () => {
  if (!current) return
  viewed = null
  viewIndex = 0
  renderForecast()
  forecastFrom = document.activeElement
  forecastDialog.hidden = false
  forecastDialog.querySelector('.settings-panel').focus()
}

const closeForecast = () => {
  forecastDialog.hidden = true
  if (forecastFrom && forecastFrom.focus) forecastFrom.focus()
}
document.getElementById('forecast-edit').addEventListener('click', () => {
  closeForecast()
  openManage('weather')
})

weatherButton.addEventListener('click', () => {
  if (!weatherOn || !hasSource()) {
    openSettings()
    return
  }
  openForecast()
})

// Clicking the preview, including its hint line, opens the full forecast.
weatherDetail.addEventListener('click', openForecast)

document.getElementById('forecast-close').addEventListener('click', closeForecast)
forecastDialog.addEventListener('click', (e) => { if (e.target === forecastDialog) closeForecast() })

// The forecast of an extra place is fetched the same way as the own one, and cached the same way.
const loadPlace = (place) => fetchCached(`weather:v2:${place.latitude},${place.longitude}`, 30 * 60e3, forecastUrl(place))
const choosePlace = async (index) => {
  viewIndex = index
  viewed = null
  if (index > 0) {
    const place = extraPlaces[index - 1]
    try {
      viewed = { place, forecast: await loadPlace(place) }
    } catch {
      viewIndex = 0
    }
  }
  renderForecast()
}
const renderPlaceChips = () => {
  sortPlaces()
  const box = document.getElementById('forecast-places')
  if (!weatherOn || !current) {
    box.replaceChildren()
    return
  }
  const chips = [current.place.label, ...extraPlaces.map((place) => place.label)].map((label, index) => {
    const chip = el('button', 'place-chip', label)
    chip.type = 'button'
    chip.setAttribute('aria-pressed', String(index === viewIndex))
    chip.addEventListener('click', () => choosePlace(index))
    return chip
  })
  // How many of the extra places are in use, out of the five allowed.
  box.replaceChildren(...chips)
}

// Extra places in time-zone order, the same order as the time zones: earliest UTC offset first.
const sortPlaces = () => {
  const now = new Date()
  extraPlaces.sort((a, b) => utcOffset(a.timezone || 'UTC', now) - utcOffset(b.timezone || 'UTC', now) || a.label.localeCompare(b.label))
}

// The weather tab: the own place, and the extra places with a remove button each.
const renderPlaces = () => {
  sortPlaces()
  document.getElementById('weather-own').textContent = `${t.placeOwn}: ${current ? current.place.label : t.placeNone}`
  const full = extraPlaces.length >= PLACE_LIMIT
  limitCount('place-input', extraPlaces.length, PLACE_LIMIT)
  document.getElementById('place-input').disabled = full
  document.getElementById('place-add').disabled = full
  document.getElementById('place-list').replaceChildren(...extraPlaces.map((place, index) => {
    const row = document.createElement('li')
    row.append(el('span', '', place.label))
    row.append(aiButton(t.placeRemove, '×', () => {
      extraPlaces = extraPlaces.filter((_, i) => i !== index)
      if (viewIndex === index + 1) choosePlace(0)
      savePlaces()
      renderPlaces()
      renderPlaceChips()
    }))
    return row
  }))
}
const placeMsg = document.getElementById('place-msg')
// City suggestions while typing, the same kind of lookup the time zone box does. Only the typed name is sent.
// Results are ranked by population, so the big city wins a shared name; the region tells apart the rest.
// The region tells apart two places with the same name, and is left out when it repeats the name.
const cityLabel = (r) => {
  const known = [r.name, ...(r.names || [])].map((n) => n.toLowerCase())
  const region = r.sameName && r.admin1 && !known.some((n) => n.includes(r.admin1.toLowerCase())) ? r.admin1 : ''
  return [r.name, region, r.country].filter(Boolean).join(', ')
}
const fetchCities = async (query, count, language) => (await (await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=${count}&language=${language}&format=json`)).json()).results || []
// Both English and Dutch names are searched, and a place appears once. Its name is the one that matches
// what was typed, so 'Keulen' shows Keulen and 'Cologne' shows Cologne; otherwise the English name.
const geocode = async (query, count) => {
  const [en, nl] = await Promise.all([fetchCities(query, count, 'en'), fetchCities(query, count, 'nl')])
  const q = query.toLowerCase()
  const places = new Map()
  for (const r of [...en, ...nl]) {
    const key = r.id ?? `${r.latitude},${r.longitude}`
    if (!places.has(key)) places.set(key, { r, names: [] })
    places.get(key).names.push(r.name)
  }
  const found = [...places.values()].map(({ r, names }) => {
    const typed = names.find((n) => n.toLowerCase().startsWith(q))
    return { ...r, name: typed || r.name, names }
  })
  // A region is shown only to tell apart two places with the same name.
  for (const r of found) r.sameName = found.filter((o) => o.name === r.name).length > 1
  return found.sort((x, y) => (y.population || 0) - (x.population || 0))
}
const suggestCities = (input, datalist, hits) => {
  let timer = null
  input.addEventListener('input', () => {
    clearTimeout(timer)
    const query = input.value.trim()
    if (query.length < 2) { datalist.replaceChildren(); return }
    timer = setTimeout(async () => {
      try {
        const results = (await geocode(query, 10)).slice(0, 5)
        hits.clear()
        for (const r of results) hits.set(cityLabel(r), r)
        datalist.replaceChildren(...results.map((r) => Object.assign(document.createElement('option'), { value: cityLabel(r) })))
      } catch {
        datalist.replaceChildren()
      }
    }, 300)
  })
}
const placeHits = new Map()
suggestCities(document.getElementById('place-input'), document.getElementById('place-options'), placeHits)
const cityHits = new Map()
suggestCities(settingsFields.cityInput, document.getElementById('city-options'), cityHits)

document.getElementById('place-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const input = document.getElementById('place-input')
  const name = input.value.trim()
  if (!name) return
  if (extraPlaces.length >= PLACE_LIMIT) { placeMsg.textContent = limitText(extraPlaces.length, PLACE_LIMIT).text; return }
  try {
    const hit = placeHits.get(name) || (await geocode(name, 10))[0]
    if (!hit) { placeMsg.textContent = t.notFound; return }
    const place = { label: cityLabel(hit), latitude: hit.latitude, longitude: hit.longitude, timezone: hit.timezone || 'UTC' }
    if (extraPlaces.some((p) => p.label === place.label)) { placeMsg.textContent = t.placeDuplicate; return }
    extraPlaces = [...extraPlaces, place]
    sortPlaces()
    savePlaces()
    input.value = ''
    placeMsg.textContent = ''
    renderPlaces()
  } catch {
    placeMsg.textContent = t.unavailable
  }
})
const manageOpenButton = document.getElementById('manage-open')
manageOpenButton.addEventListener('click', () => openManage(manageTab))

// Settings and help: a floating panel, opened with ? and closed with Escape.
const openedFrom = { el: null }
const isTyping = (el) => !!el && el.matches && el.matches('input, textarea, select, [contenteditable="true"]')

const applySettingsText = () => {
  document.getElementById('settings-title').textContent = document.getElementById('advanced').hidden ? t.title : t.advTitle
  document.getElementById('settings-hint').textContent = t.hint
  document.getElementById('app-version').textContent = t.versionText.replace('{v}', APP_VERSION).replace('{d}', APP_UPDATED)
  document.getElementById('lbl-weather').textContent = t.weather
  document.getElementById('lbl-location').textContent = t.location
  document.getElementById('help-open').textContent = helpCopy.title
  document.getElementById('sec-weather').textContent = t.secWeather
  document.getElementById('sec-look').textContent = t.secLook
  document.getElementById('lbl-loc-ip').textContent = t.locIp
  document.getElementById('lbl-loc-city').textContent = t.locCity
  document.getElementById('ip-window-title').textContent = t.ipWindowTitle
  document.getElementById('ip-open').textContent = t.ipWindowTitle
  document.getElementById('ip-window-close').setAttribute('aria-label', t.close)
  document.getElementById('links-window-title').textContent = t.linksTitle
  document.getElementById('links-window-close').setAttribute('aria-label', t.close)
  document.getElementById('links-manage').textContent = t.linksEdit
  document.getElementById('ask-ai-caption').textContent = t.askAiCaption
  document.getElementById('ask-ai-caption').title = t.askAiTip
  document.getElementById('forecast-edit').textContent = t.placesEdit
  document.getElementById('zones-window-title').textContent = t.zonesTitle
  document.getElementById('zones-window-close').setAttribute('aria-label', t.close)
  document.getElementById('zones-manage').textContent = t.zonesEdit
  renderIp()
  document.getElementById('lbl-city').textContent = t.cityLabel
  document.getElementById('city-save').textContent = t.save
  settingsFields.cityClear.textContent = t.clearCity
  document.getElementById('lbl-quote').textContent = t.quote
  document.getElementById('lbl-zones').textContent = t.zonesToggle
  document.getElementById('lbl-wallpaper').textContent = t.wallpaperToggle
  document.getElementById('sec-bg').textContent = t.secBackground
  document.querySelector('.presets').setAttribute('aria-label', t.secPage)
  document.getElementById('lbl-preset-minimal').textContent = t.presetMinimal
  document.getElementById('lbl-preset-standard').textContent = t.presetStandard
  document.getElementById('lbl-preset-custom').textContent = t.presetCustom
  document.getElementById('sec-ai').textContent = t.aiSec
  document.getElementById('lbl-askai').textContent = t.aiOn
  document.getElementById('sec-time').textContent = t.timeSec
  document.getElementById('sec-date').textContent = t.dateSec
  document.getElementById('lbl-date-on').textContent = t.dateOnLbl
  document.getElementById('lbl-date-style').textContent = t.dateShow
  document.getElementById('lbl-date-order').textContent = t.dateOrderLbl
  settingsFields.dateStyle.options[0].textContent = t.dateLong
  settingsFields.dateStyle.options[1].textContent = t.dateShort
  settingsFields.dateOrder.options[0].textContent = t.dateAuto
  settingsFields.dateOrder.options[1].textContent = t.dateDmy
  settingsFields.dateOrder.options[2].textContent = t.dateMdy
  settingsFields.dateOrder.options[3].textContent = t.dateYmd
  settingsFields.clock.options[0].textContent = t.time24
  settingsFields.clock.options[1].textContent = t.time12
  settingsFields.clock.options[2].textContent = t.timeFull
  document.getElementById('sec-search').textContent = t.searchSec
  document.getElementById('lbl-search-newtab').textContent = t.searchNewTab
  document.getElementById('lbl-ai-newtab').textContent = t.aiNewTab
  document.getElementById('ai-name').setAttribute('aria-label', t.aiName)
  document.getElementById('ai-url').setAttribute('aria-label', t.aiUrl)
  document.getElementById('manage-open').textContent = t.manageOpen
  document.getElementById('manage-title').textContent = t.manageOpen
  document.getElementById('ai-save').textContent = t.aiSave
  document.getElementById('ai-pick-label').textContent = t.aiPick
  document.getElementById('ai-cancel').textContent = t.aiCancel
  document.getElementById('ai-form-title').textContent = t.aiAddTitle
  document.getElementById('lbl-ai-name').textContent = t.aiName
  document.getElementById('lbl-ai-url').textContent = t.aiUrl
  document.getElementById('lbl-tint').textContent = t.tintToggle
  document.getElementById('lbl-wallpaper-btn').textContent = t.wallpaperButton
  document.getElementById('lbl-links').textContent = t.linksToggle
  document.getElementById('advanced-toggle').textContent = advancedToggle.getAttribute('aria-expanded') === 'true' ? t.advancedClosed : t.advancedOpen
  tintCycle.setAttribute('aria-label', t.tintCycle)
  document.getElementById('quote').title = t.quoteAnother
  tintCycle.title = t.tintCycle
  const foot = footerText[uiLang] || footerText.en
  document.getElementById('foot-pre').textContent = foot.pre
  document.getElementById('foot-post').textContent = foot.post
  document.getElementById('foot-link').title = foot.title
  document.getElementById('lbl-links-own').textContent = t.linksOwn
  document.getElementById('zone-label').textContent = t.zonesAdd
  document.getElementById('zone-add-btn').textContent = t.zoneAddBtn
  document.getElementById('manage-close').setAttribute('aria-label', t.close)
  document.getElementById('tab-links').textContent = t.tabLinks
  document.getElementById('tab-zones').textContent = t.tabZones
  document.getElementById('tab-ai').textContent = t.tabAi
  document.getElementById('tab-weather').textContent = t.tabWeather
  document.getElementById('tab-wallpapers').textContent = t.tabWallpaper
  document.getElementById('tab-backup').textContent = t.tabBackup
  document.getElementById('first-hint-text').textContent = t.hintText
  document.getElementById('changelog-link').textContent = t.changelogLink
  document.getElementById('first-hint-close').setAttribute('aria-label', t.close)
  document.getElementById('first-hint-quick').textContent = t.quickCard
  document.getElementById('quickstart-open').textContent = t.quickLink
  document.getElementById('help-quickstart').textContent = t.quickLink
  document.getElementById('quickstart-title').textContent = t.quickTitle
  document.getElementById('quickstart-engine-head').textContent = t.quickEngineHead
  document.getElementById('quickstart-engine-text').textContent = t.quickEngineText
  document.getElementById('quickstart-click').textContent = t.quickClick
  document.getElementById('quickstart-more-head').textContent = t.quickMoreHead
  document.getElementById('quickstart-ai-head').textContent = t.quickAiHead
  document.getElementById('quickstart-ai-text').textContent = t.quickAiText
  document.getElementById('quickstart-page-head').textContent = t.quickPageHead
  document.getElementById('quickstart-page-text').textContent = t.quickPageText
  document.getElementById('quickstart-note').textContent = t.quickNote
  document.getElementById('quickstart-done').textContent = t.quickDone
  document.getElementById('quickstart-close').setAttribute('aria-label', t.close)
  document.getElementById('backup-note').textContent = t.backupNote
  document.getElementById('wallpaper-note').textContent = t.wallNote
  document.getElementById('lbl-place').textContent = t.placeLabel
  document.getElementById('place-add').textContent = t.placeAdd
  labelLinksButton()
  document.getElementById('lbl-link-name').textContent = t.lblName
  document.getElementById('lbl-link-url').textContent = t.lblUrl
  document.getElementById('lbl-link-desc').textContent = t.lblDesc
  zonesButton.setAttribute('aria-label', t.zonesButton)
  zonesButton.title = t.zonesButton
  document.getElementById('privacy').textContent = t.privacy
  settingsFields.resetSettings.textContent = t.resetSettings
  document.getElementById('export-data').textContent = t.exportData
  document.getElementById('import-data').textContent = t.importData
  document.getElementById('sec-lang').textContent = t.langSection
  document.getElementById('lbl-set-lang').textContent = t.langSection
  document.getElementById('set-lang-auto').textContent = t.langAuto
  document.getElementById('top-lang-auto').textContent = t.langAuto
  if (topLangGroup) topLangGroup.setAttribute('aria-label', t.langLabel)
  if (topLangSelect) topLangSelect.title = t.langLabel
  document.getElementById('modes-group').setAttribute('aria-label', t.colorMode)
  modeButtons.forEach((button) => {
    const key = { auto: 'themeAuto', dark: 'themeDark', light: 'themeLight' }[button.dataset.themeValue]
    if (!key) return
    button.title = t[key]
    button.setAttribute('aria-label', t[key])
  })
  searchForm.title = t.searchFormTitle
  document.querySelector('label[for="search"]').textContent = t.searchLabel
  document.getElementById('go').title = t.searchSubmit
  document.getElementById('go').setAttribute('aria-label', t.searchSubmit)
  clockClickHint = t.timeClick
  showEngine()
  document.getElementById('import-title').textContent = t.importTitle
  document.getElementById('import-body').textContent = t.importBody
  document.getElementById('import-merge').textContent = t.importMerge
  document.getElementById('import-replace').textContent = t.importReplace
  document.getElementById('import-cancel').textContent = t.importCancel
  settingsFields.resetData.textContent = t.resetData
  document.getElementById('sec-reset').textContent = t.resetSec
  document.getElementById('reset-intro').textContent = t.resetIntro
  document.getElementById('reset-backup').textContent = t.manageOpen
  document.getElementById('settings-close').setAttribute('aria-label', t.close)
  document.getElementById('forecast-close').setAttribute('aria-label', t.close)
  settingsButton.setAttribute('aria-label', t.open)
  settingsButton.title = t.open
  syncLangSelects()
}

const syncSettings = () => {
  settingsFields.weather.checked = weatherOn
  settingsFields.locIp.checked = locationMode === 'ip'
  settingsFields.locCity.checked = locationMode === 'city'
  settingsFields.quote.checked = quoteOn
  syncLangSelects()
  renderIp()
  settingsFields.zones.checked = zonesOn
  settingsFields.wallpaper.checked = wallpaperOn
  settingsFields.tint.checked = tintOn
  settingsFields.wallpaperButton.checked = wallpaperButtonOn
  settingsFields.links.checked = linksOn
  settingsFields.linksOwn.checked = linksOwn
  settingsFields.askai.checked = askaiOn
  settingsFields.clock.value = clockMode
  settingsFields.dateStyle.value = dateNumeric ? 'short' : 'long'
  settingsFields.dateOrder.value = dateOrder
  settingsFields.date.checked = dateOn
  settingsFields.searchNewTab.checked = searchNewTab
  settingsFields.aiNewTab.checked = aiNewTab
  settingsFields.preset.forEach((radio) => { radio.checked = radio.value === matchPreset() })
  settingsFields.cityClear.hidden = !city
  updateWeatherHint()
  syncWeatherButton()
  settingsFields.cityMessage.textContent = ''
}

// Advanced options: the page presets and the disclaimer are the basic view; the rest opens from a link.
const advancedToggle = document.getElementById('advanced-toggle')
const advancedBlock = document.getElementById('advanced')
const basicPages = [document.querySelector('.presets')]
const setAdvanced = (open) => {
  advancedBlock.hidden = !open
  basicPages.forEach((el) => { el.hidden = open })
  advancedBlock.closest('.settings-panel').classList.toggle('is-wide', open)
  advancedToggle.setAttribute('aria-expanded', String(open))
  advancedToggle.textContent = open ? t.advancedClosed : t.advancedOpen
  document.getElementById('settings-title').textContent = open ? t.advTitle : t.title
  // Data beheren and IP details live in the basic view only; one place is enough.
  manageOpenButton.hidden = open
  ipOpen.hidden = open
}
advancedToggle.addEventListener('click', () => setAdvanced(advancedBlock.hidden))

const openSettings = () => {
  openedFrom.el = document.activeElement
  setAdvanced(false)
  syncSettings()
  settings.hidden = false
  settings.querySelector('.settings-panel').focus()
}

const closeSettings = () => {
  settings.hidden = true
  setAdvanced(false)
  if (openedFrom.el && openedFrom.el.focus) openedFrom.el.focus()
}

settingsButton.addEventListener('click', openSettings)

// Help: the same guide as the README, opened from the settings window. Escape closes it.
const helpWindow = document.getElementById('help')
const helpBody = document.getElementById('help-body')
let helpFrom = null
const renderHelp = () => {
  document.getElementById('help-title').textContent = helpCopy.title
  document.getElementById('help-close').setAttribute('aria-label', helpCopy.close)
  helpBody.replaceChildren(...helpCopy.sections.map(([heading, body, link]) => {
    const section = el('section', 'help-section')
    section.append(el('h3', '', heading), el('p', '', body))
    // Optional links, each shown by its address, for the About section.
    for (const url of [].concat(link || [])) section.append(Object.assign(document.createElement('a'), { href: url, target: '_blank', rel: 'noopener', className: 'help-link', textContent: url.replace('https://', '') }))
    return section
  }))
  // One link at the foot, to the questions and answers; the topics themselves stay as they are.
  const faqLink = Object.assign(document.createElement('a'), { href: 'https://github.com/a4ds5t/Minimal-StartPage/blob/main/docs/FAQ.md', target: '_blank', rel: 'noopener', className: 'help-link', textContent: helpCopy.faq })
  helpBody.append(faqLink)
}
// Help opens over the settings; the settings are hidden meanwhile so their scrollbar does not show through.
let helpOverSettings = false
const openHelp = () => {
  helpFrom = document.activeElement
  renderHelp()
  helpOverSettings = !settings.hidden
  settings.hidden = true
  helpWindow.hidden = false
  helpWindow.querySelector('.settings-panel').focus()
}
const closeHelp = () => {
  helpWindow.hidden = true
  if (helpOverSettings) settings.hidden = false
  helpOverSettings = false
  if (helpFrom && helpFrom.focus) helpFrom.focus()
}
document.getElementById('help-open').addEventListener('click', openHelp)
document.getElementById('help-close').addEventListener('click', closeHelp)
helpWindow.addEventListener('click', (e) => { if (e.target === helpWindow) closeHelp() })
document.getElementById('settings-close').addEventListener('click', closeSettings)
settings.addEventListener('click', (e) => { if (e.target === settings) closeSettings() })

document.addEventListener('keydown', (e) => {
  const open = [importWindow, helpWindow, ipWindow, linksWindow, zonesWindow, forecastDialog, manageWindow, settings].find((d) => !d.hidden) || null
  if (!open) {
    if (e.key === '?' && !isTyping(e.target) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault()
      openSettings()
    }
    return
  }
  if (e.key === 'Escape') {
    if (open === helpWindow) closeHelp()
    else if (open === ipWindow) closeIpWindow()
    else if (open === linksWindow) closeLinks()
    else if (open === zonesWindow) closeZones()
    else if (open === importWindow) closeImport()
    else if (open === forecastDialog) closeForecast()
    else if (open === manageWindow) closeManage()
    else if (!advancedBlock.hidden) setAdvanced(false)
    else closeSettings()
    return
  }
  if (e.key === 'Tab') {
    // Keep keyboard focus inside the open panel.
    const items = [...open.querySelectorAll('button, input, a[href]')].filter((item) => !item.hidden && !item.disabled)
    const first = items[0]
    const last = items[items.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }
})

settingsFields.weather.addEventListener('change', () => setWeather(settingsFields.weather.checked))

// Wallpaper on or off, and whether its button shows, from settings.
settingsFields.wallpaper.addEventListener('change', () => {
  const first = wallpapers.find(isOn)
  setWallpaper(settingsFields.wallpaper.checked && first ? first.id : 'none')
})
settingsFields.wallpaperButton.addEventListener('change', () => {
  wallpaperButtonOn = settingsFields.wallpaperButton.checked
  wallpaperToggle.hidden = !wallpaperButtonOn
  writeKey('wallpaperButton', wallpaperButtonOn ? 'on' : 'off')
})

// Choosing a location: the IP address or the city. Either one refreshes the weather when it is on.
const setLocation = (mode) => {
  locationMode = mode
  writeKey('location', mode)
  updateWeatherHint()
  if (weatherOn) showWeather()
}
settingsFields.locIp.addEventListener('change', () => setLocation('ip'))
settingsFields.locCity.addEventListener('change', () => setLocation('city'))

settingsFields.zones.addEventListener('change', () => {
  zonesOn = settingsFields.zones.checked
  writeKey('timeZones', zonesOn ? 'on' : 'off')
  applyZonesVisibility()
  if (!zonesOn && manageTab === 'zones' && !manageWindow.hidden) closeManage()
  if (!zonesOn && !zonesWindow.hidden) closeZones()
})

// Where the search and the AI links open: the same tab, or a new one. Search stays in the same tab by default; AI links open a new one.
let searchNewTab = readFlag('searchNewTab', false)
let aiNewTab = readFlag('aiNewTab', true)
settingsFields.searchNewTab.addEventListener('change', () => {
  searchNewTab = settingsFields.searchNewTab.checked
  writeKey('searchNewTab', searchNewTab ? 'on' : 'off')
})
settingsFields.clock.addEventListener('change', () => setClockMode(settingsFields.clock.value))
settingsFields.dateStyle.addEventListener('change', () => setDateStyle(settingsFields.dateStyle.value === 'short'))
settingsFields.date.addEventListener('change', () => {
  dateOn = settingsFields.date.checked
  writeKey('showDate', dateOn ? 'on' : 'off')
  updateClock()
})
settingsFields.dateOrder.addEventListener('change', () => setDateOrder(settingsFields.dateOrder.value))
settingsFields.aiNewTab.addEventListener('change', () => {
  aiNewTab = settingsFields.aiNewTab.checked
  writeKey('aiNewTab', aiNewTab ? 'on' : 'off')
  renderAskAi()
})

// Ask AI links below the search bar.
let askaiOn = readFlag('askai', false)
const askAi = document.getElementById('ask-ai')
settingsFields.askai.addEventListener('change', () => {
  askaiOn = settingsFields.askai.checked
  writeKey('askai', askaiOn ? 'on' : 'off')
  renderAskAi()
})

// Pages: presets for how much is on the page. They only switch the display options; weather and the
// IP address are never changed by a preset, since they send data.
const presets = {
  // Minimal starts with nothing extra, but keeps the colour button at the bottom left. Standard adds the Wikipedia button and the colour and wallpaper buttons;
  // AI shortcuts, time zones and the rest are found later, in the settings.
  minimal: { quote: false, links: false, linksOwn: false, zones: false, askai: false, weather: false, wallpaper: false, wallpaperButton: false, tint: true, date: false },
  standard: { quote: false, links: true, linksOwn: false, zones: false, askai: false, weather: false, wallpaper: true, wallpaperButton: true, tint: true, date: true },
}
// Weather is off in both presets. A preset only ever switches weather off, never on, so choosing one never starts a lookup.
const currentState = () => ({ quote: quoteOn, links: linksOn, linksOwn: linksOwn, zones: zonesOn, askai: askaiOn, weather: weatherOn, wallpaper: wallpaperOn, wallpaperButton: wallpaperButtonOn, tint: tintOn, date: dateOn })
// The preset that matches the current choices: only the keys a preset names are compared.
const matchPreset = () => {
  const now = currentState()
  return Object.keys(presets).find((name) => Object.keys(presets[name]).every((key) => now[key] === presets[name][key])) || 'custom'
}
// Each option is changed through its own switch, so the same handlers and storage run as when clicked.
// Personal: the last mixed choices are kept, so switching to a page and back restores them.
const readPersonal = () => {
  try { return JSON.parse(localStorage.getItem('personalState') || 'null') } catch { return null }
}
const keepPersonal = () => {
  if (matchPreset() === 'custom') writeKey('personalState', JSON.stringify(currentState()))
}
const applyPreset = (name) => {
  const choice = name === 'custom' ? readPersonal() : presets[name]
  if (!choice) return syncSettings()
  keepPersonal()
  Object.keys(choice).forEach((key) => {
    const field = key === 'wallpaper' ? settingsFields.wallpaper : settingsFields[key === 'wallpaperButton' ? 'wallpaperButton' : key]
    field.checked = choice[key]
    field.dispatchEvent(new Event('change'))
  })
  writeKey('preset', name)
  syncSettings()
}
settingsFields.preset.forEach((radio) => radio.addEventListener('change', () => applyPreset(radio.value)))
// Changing an option in the advanced view can make a preset match or stop matching, so the page radio follows it.
advancedBlock.addEventListener('change', () => {
  keepPersonal()
  settingsFields.preset.forEach((radio) => { radio.checked = radio.value === matchPreset() })
})

settingsFields.quote.addEventListener('change', () => {
  quoteOn = settingsFields.quote.checked
  writeKey('quote', quoteOn ? 'on' : 'off')
  root.toggleAttribute('data-quote-off', !quoteOn)
})

settingsFields.cityForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = settingsFields.cityInput.value.trim()
  if (!name) return
  try {
    const hit = cityHits.get(name) || (await geocode(name, 10))[0]
    if (!hit) {
      settingsFields.cityMessage.textContent = t.notFound
      return
    }
    city = { name: hit.name, country: hit.country, latitude: hit.latitude, longitude: hit.longitude }
    updateWeatherHint()
    writeKey('city', JSON.stringify(city))
    locationMode = 'city'
    writeKey('location', 'city')
    settingsFields.locCity.checked = true
    settingsFields.cityClear.hidden = false
    settingsFields.cityMessage.textContent = ''
    settingsFields.cityInput.value = ''
    setWeather(true)
  } catch {
    settingsFields.cityMessage.textContent = t.unavailable
  }
})

settingsFields.cityClear.addEventListener('click', () => {
  city = null
  try { localStorage.removeItem('city') } catch {}
  locationMode = 'ip'
  writeKey('location', 'ip')
  settingsFields.locIp.checked = true
  updateWeatherHint()
  settingsFields.cityClear.hidden = true
  if (weatherOn) showWeather()
})

// Two resets: the settings go back to the defaults; the personal data (own links, AI shortcuts, a city and
// the time zones) is deleted only when asked. Both reload the page so every part starts from storage.
const clearKeys = (keys) => {
  try {
    keys.forEach((key) => localStorage.removeItem(key))
    Object.keys(localStorage).filter((key) => key.startsWith('weather:')).forEach((key) => localStorage.removeItem(key))
  } catch {}
}
const personalKeys = ['links', 'askAiList', 'city', 'zones', 'location', 'weatherPlaces', 'personalState']
const storedLang = () => {
  try { return localStorage.getItem('lang') || 'auto' } catch { return 'auto' }
}
const syncLangSelects = (value) => {
  const choice = value ?? storedLang()
  if (settingsFields.lang) settingsFields.lang.value = choice
  if (topLangSelect) topLangSelect.value = choice
}
const applyLangPreference = (value) => {
  try {
    if (value === 'auto') localStorage.removeItem('lang')
    else localStorage.setItem('lang', value)
  } catch {}
  location.reload()
}
const onLangChange = (value) => {
  if (value === storedLang()) return
  applyLangPreference(value)
}
settingsFields.lang.addEventListener('change', () => onLangChange(settingsFields.lang.value))
if (topLangSelect) topLangSelect.addEventListener('change', () => onLangChange(topLangSelect.value))
settingsFields.resetSettings.addEventListener('click', () => {
  if (!confirm(t.resetSettingsConfirm)) return
  clearKeys(['personalState', 'lang', 'engine', 'theme', 'clockFormat', 'dateFormat', 'wallpaper', 'wallpaperEnabled', 'hue', 'weather', 'location', 'quote', 'ipInfo', 'timeZones', 'linksOn', 'linksOwn', 'wallpaperButton', 'tint', 'askai', 'searchNewTab', 'aiNewTab', 'dateNotation', 'showDate', 'preset'])
  location.reload()
})
document.getElementById('reset-backup').addEventListener('click', () => manageOpenButton.click())

settingsFields.resetData.addEventListener('click', () => {
  if (!confirm(t.resetDataConfirm)) return
  clearKeys(personalKeys)
  location.reload()
})

// Export and import: one JSON file with the settings and the personal data. Caches are left out.
// The file is for the user to keep (for example in iCloud Drive) and open on another device.
const EXPORT_SETTINGS = ['wallpaperEnabled', 'lang', 'engine', 'theme', 'clockFormat', 'dateFormat', 'wallpaper', 'hue', 'weather', 'location', 'quote', 'timeZones', 'linksOn', 'linksOwn', 'wallpaperButton', 'tint', 'askai', 'searchNewTab', 'aiNewTab', 'dateNotation', 'showDate', 'preset', 'personalState']
const EXPORT_DATA = ['links', 'askAiList', 'city', 'zones', 'weatherPlaces']
// The export is a real link with a download name, so every browser treats the click as the user's download.
// Export: the file is made in the click and saved through a fresh download link, which is the pattern Safari
// on both iPhone and Mac handles as a normal download. The address is released after a while.
document.getElementById('export-data').addEventListener('click', (e) => {
  e.preventDefault()
  const payload = { app: 'Minimal-StartPage', version: 1, exported: new Date().toISOString(), settings: {}, data: {} }
  EXPORT_SETTINGS.forEach((key) => { const value = localStorage.getItem(key); if (value !== null) payload.settings[key] = value })
  EXPORT_DATA.forEach((key) => { try { const value = localStorage.getItem(key); if (value !== null) payload.data[key] = JSON.parse(value) } catch {} })
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }))
  const link = document.createElement('a')
  link.href = url
  link.download = 'minimal-startpage.json'
  document.body.append(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 40000)
})
const importFile = document.getElementById('import-file')
const importWindow = document.getElementById('import-window')
let pendingImport = null
// Two links are the same link when host and path match; case, a leading www. and a trailing slash do not count.
// The query stays, so deep links with different parameters remain separate.
const normalizeUrl = (url) => {
  try {
    const u = new URL(url)
    return `${u.hostname.toLowerCase().replace(/^www\./, '')}${u.pathname.replace(/\/+$/, '')}${u.search}`
  } catch {
    return String(url).trim().toLowerCase()
  }
}
// Merge keeps what is there and adds what is new. A duplicate is skipped, so the existing entry (and its title) stays.
const mergeImport = (payload) => {
  const result = { added: 0, dupes: 0, skipped: 0 }
  const data = payload.data || {}
  const listOf = (value) => (Array.isArray(value) ? value : [])

  const linkKeys = new Set(links.map((link) => normalizeUrl(link.url)))
  listOf(data.links).forEach((link) => {
    if (!isValidLink(link)) return
    const key = normalizeUrl(link.url)
    if (linkKeys.has(key)) { result.dupes++; return }
    if (links.length >= LINK_LIMIT) { result.skipped++; return }
    links = [...links, { title: link.title, url: link.url, description: typeof link.description === 'string' ? link.description : '' }]
    linkKeys.add(key)
    result.added++
  })
  saveLinks()

  const aiKeys = new Set(askAiList.map((item) => normalizeUrl(item.url)))
  listOf(data.askAiList).forEach((item) => {
    if (!item || typeof item.title !== 'string' || !safeUrl(item.url)) return
    const key = normalizeUrl(item.url)
    if (aiKeys.has(key)) { result.dupes++; return }
    if (askAiList.length >= ASK_AI_LIMIT) { result.skipped++; return }
    askAiList = [...askAiList, { key: '', title: item.title, url: item.url }]
    aiKeys.add(key)
    result.added++
  })
  saveAskAi()

  listOf(data.zones).forEach((zone) => {
    if (typeof zone !== 'string' || !zone) return
    if (zones.includes(zone)) { result.dupes++; return }
    if (zones.length >= ZONE_LIMIT) { result.skipped++; return }
    zones = [...zones, zone]
    result.added++
  })
  saveZones()

  listOf(data.weatherPlaces).forEach((place) => {
    if (!place || typeof place.label !== 'string') return
    if (extraPlaces.some((p) => p.label === place.label)) { result.dupes++; return }
    if (extraPlaces.length >= PLACE_LIMIT) { result.skipped++; return }
    extraPlaces = [...extraPlaces, place]
    result.added++
  })
  savePlaces()

  // Preferences stay as they are; the import only fills what is not set here yet.
  Object.entries(payload.settings || {}).forEach(([key, value]) => {
    if (EXPORT_SETTINGS.includes(key) && typeof value === 'string' && localStorage.getItem(key) === null) writeKey(key, value)
  })
  return result
}
const closeImport = () => { importWindow.hidden = true; pendingImport = null }
// Only the first items of each list are loaded, in file order, as far as the page allows.
const capImport = (data) => ({
  ...data,
  ...(Array.isArray(data.links) ? { links: data.links.slice(0, LINK_LIMIT) } : {}),
  ...(Array.isArray(data.askAiList) ? { askAiList: data.askAiList.slice(0, ASK_AI_LIMIT) } : {}),
  ...(Array.isArray(data.zones) ? { zones: data.zones.slice(0, 5) } : {}),
  ...(Array.isArray(data.weatherPlaces) ? { weatherPlaces: data.weatherPlaces.slice(0, PLACE_LIMIT) } : {}),
})
const replaceImport = (payload) => {
  clearKeys([...EXPORT_SETTINGS, ...EXPORT_DATA])
  Object.entries(payload.settings).forEach(([key, value]) => { if (EXPORT_SETTINGS.includes(key) && typeof value === 'string') writeKey(key, value) })
  const data = capImport(payload.data)
  Object.entries(data).forEach(([key, value]) => { if (EXPORT_DATA.includes(key)) writeKey(key, JSON.stringify(value)) })
  location.reload()
}
document.getElementById('import-data').addEventListener('click', () => importFile.click())
importFile.addEventListener('change', async () => {
  const file = importFile.files[0]
  importFile.value = ''
  if (!file) return
  let payload = null
  try { payload = JSON.parse(await file.text()) } catch {}
  if (!payload || payload.app !== 'Minimal-StartPage' || typeof payload.settings !== 'object' || typeof payload.data !== 'object') {
    alert(t.importInvalid)
    return
  }
  pendingImport = payload
  importWindow.hidden = false
  importWindow.querySelector('.settings-panel').focus()
})
document.getElementById('import-merge').addEventListener('click', () => {
  const result = mergeImport(pendingImport)
  const summary = t.importSummary.replace('{added}', result.added).replace('{dupes}', result.dupes).replace('{skipped}', result.skipped)
  closeImport()
  alert(summary)
  location.reload()
})
document.getElementById('import-replace').addEventListener('click', () => replaceImport(pendingImport))
document.getElementById('import-cancel').addEventListener('click', closeImport)
importWindow.addEventListener('click', (e) => { if (e.target === importWindow) closeImport() })

// Older visits may still have a stored greeting name; remove it.
try { localStorage.removeItem('greetName') } catch {}

// Time zones: optional. A small globe next to the date opens a window with up to five extra zones.
const zonesButton = document.getElementById('zones-button')
const zonesList = document.getElementById('zones-list')
const zoneInput = document.getElementById('zone-input')
const zoneMsg = document.getElementById('zone-msg')
const zoneOptions = document.getElementById('zone-options')
const zoneAddButton = document.getElementById('zone-add-btn')
const zonesLocalLine = document.getElementById('zones-local')
let zonesOn = readFlag('timeZones', false)
const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
const zoneNames = (() => {
  try { return Intl.supportedValuesOf('timeZone') } catch { return ['Europe/Amsterdam', 'Europe/London', 'America/New_York', 'America/Los_Angeles', 'Asia/Tokyo', 'Australia/Sydney'] }
})()
const zoneAliases = {
  beijing: 'Asia/Shanghai',
  peking: 'Asia/Shanghai',
  mumbai: 'Asia/Kolkata',
  'new delhi': 'Asia/Kolkata',
  saigon: 'Asia/Ho_Chi_Minh',
  'ho chi minh city': 'Asia/Ho_Chi_Minh',
}
let zones = []
try { zones = (JSON.parse(localStorage.getItem('zones') || '[]') || []).filter((z) => zoneNames.includes(z)).slice(0, ZONE_LIMIT) } catch {}

const cityOf = (zone) => zone.split('/').pop().replace(/_/g, ' ')
// The zone's offset from UTC in minutes, e.g. -300 for New York in winter.
// Read from the zone's wall-clock parts, which older Safari versions support (the longOffset name is not).
const utcOffset = (zone, now) => {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: zone, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }).formatToParts(now).map((part) => [part.type, Number(part.value)]))
  const wallClock = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second)
  return Math.round((wallClock - (now.getTime() - now.getMilliseconds())) / 60000)
}
// The chosen zones, ordered from the earliest offset (-12) to the latest (+14).
const sortedZones = (now) => [...zones].sort((a, b) => utcOffset(a, now) - utcOffset(b, now) || cityOf(a).localeCompare(cityOf(b)))
const zoneClock = (zone, now) => now.toLocaleTimeString(clockMode === '12' ? 'en-US' : 'en-GB', { timeZone: zone, hour: '2-digit', minute: '2-digit', hour12: clockMode === '12' })
// Whole days between the local date and the date in the other zone, read from calendar dates.
const dayDifference = (zone, now) => {
  const ymd = (tz) => new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now)
  return Math.round((Date.parse(ymd(zone)) - Date.parse(ymd(localZone))) / 864e5)
}
const dayWordFor = (diff) => (diff === 0 ? '' : new Intl.RelativeTimeFormat(uiLang, { numeric: 'auto' }).format(diff, 'day'))

// The hover preview under the globe, like the weather preview: the chosen zones at a glance.
const zonesPreview = document.getElementById('zones-preview')
const renderPreview = () => {
  if (!zonesOn || !zones.length) {
    zonesPreview.replaceChildren()
    return
  }
  const now = new Date()
  zonesPreview.replaceChildren(...sortedZones(now).map((zone) => {
    const row = weatherRow(zoneName(zone), zoneTag(zone, now), zoneClock(zone, now), dayWordFor(dayDifference(zone, now)))
    row.classList.add('zone-line')
    return row
  }))
}

const zoneRows = (now, editable) => sortedZones(now).map((zone) => {
  const row = el('div', 'zone-row')
  row.append(zoneName(zone), zoneTag(zone, now), el('span', 'zone-time', zoneClock(zone, now)), el('span', 'zone-day', dayWordFor(dayDifference(zone, now))))
  if (editable) {
    const remove = Object.assign(document.createElement('button'), { type: 'button', className: 'zone-remove', textContent: '×' })
    remove.setAttribute('aria-label', `${t.remove} ${cityOf(zone)}`)
    remove.dataset.zone = zone
    row.append(remove)
  }
  return row
})
const renderZones = () => {
  const now = new Date()
  zonesLocalLine.textContent = `${t.zonesLocal}: ${cityOf(localZone)} ${zoneClock(localZone, now)} · ${utcLabel(localZone, now)}`
  const rows = zoneRows(now, true)
  zonesList.replaceChildren(...(rows.length ? rows : [el('p', 'zones-empty', t.zonesEmpty)]))
  const full = zones.length >= ZONE_LIMIT
  limitCount('zone-input', zones.length, ZONE_LIMIT)
  renderPreview()
  zoneInput.disabled = full
  zoneAddButton.disabled = full
}

const saveZones = () => writeKey('zones', JSON.stringify(zones))
// A short label such as UTC+1 or UTC−5:30, shown small next to the zone name.
const utcLabel = (zone, now) => {
  const minutes = utcOffset(zone, now)
  if (minutes === 0) return 'UTC'
  const abs = Math.abs(minutes)
  const clock = `${Math.floor(abs / 60)}${abs % 60 ? `:${String(abs % 60).padStart(2, '0')}` : ''}`
  return `UTC${minutes > 0 ? '+' : '−'}${clock}`
}
const zoneName = (zone) => el('span', 'zone-name', cityOf(zone))
const zoneTag = (zone, now) => el('span', 'zone-tag', utcLabel(zone, now))

// One panel for the links, time zones, AI shortcuts and weather places. Each opens on its own tab.
const manageWindow = document.getElementById('manage')
const manageTabs = [...manageWindow.querySelectorAll('.manage-tab-button')]
const manageSections = [...manageWindow.querySelectorAll('.manage-section')]
let manageTab = 'links'
let manageFrom = null
const showManageTab = (tab) => {
  manageTab = tab
  manageTabs.forEach((button) => {
    const on = button.dataset.tab === tab
    button.setAttribute('aria-selected', String(on))
    button.tabIndex = on ? 0 : -1
  })
  manageSections.forEach((section) => { section.hidden = section.dataset.tab !== tab })
  if (tab === 'links') resetLinkForm()
  if (tab === 'zones') renderZones()
  if (tab === 'ai') resetAiForm()
  if (tab === 'weather') renderPlaces()
  if (tab === 'wallpapers') renderWallpapers()
}
const openManage = (tab) => {
  manageFrom = document.activeElement
  showManageTab(tab)
  manageWindow.hidden = false
  manageWindow.querySelector('.settings-panel').focus()
}
const closeManage = () => {
  manageWindow.hidden = true
  if (manageFrom && manageFrom.focus) manageFrom.focus()
}
manageTabs.forEach((button, index) => {
  button.addEventListener('click', () => showManageTab(button.dataset.tab))
  // Arrow keys move between the tabs, as the tab pattern expects; Home and End jump to the ends.
  button.addEventListener('keydown', (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    let next = null
    if (step) next = (index + step + manageTabs.length) % manageTabs.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = manageTabs.length - 1
    if (next === null) return
    e.preventDefault()
    manageTabs[next].focus()
    showManageTab(manageTabs[next].dataset.tab)
  })
})
document.getElementById('manage-close').addEventListener('click', closeManage)
manageWindow.addEventListener('click', (e) => { if (e.target === manageWindow) closeManage() })

const zonesWindow = document.getElementById('zones-window')
const zonesWindowList = document.getElementById('zones-window-list')
const zonesLocalWindow = document.getElementById('zones-local-window')
const renderZonesWindow = () => {
  const now = new Date()
  zonesLocalWindow.textContent = `${t.zonesLocal}: ${cityOf(localZone)} ${zoneClock(localZone, now)} · ${utcLabel(localZone, now)}`
  const rows = zoneRows(now, false)
  zonesWindowList.replaceChildren(...(rows.length ? rows : [el('p', 'zones-empty', t.zonesEmpty)]))
}
const openZones = () => {
  renderZonesWindow()
  zonesWindow.hidden = false
  zonesWindow.querySelector('.settings-panel').focus()
}
const closeZones = () => { zonesWindow.hidden = true; zonesButton.focus() }
document.getElementById('zones-window-close').addEventListener('click', closeZones)
zonesWindow.addEventListener('click', (e) => { if (e.target === zonesWindow) closeZones() })
document.getElementById('zones-manage').addEventListener('click', () => {
  zonesWindow.hidden = true
  openManage('zones')
})
zonesButton.addEventListener('click', openZones)
zonesPreview.addEventListener('click', openZones)
zonesList.addEventListener('click', (e) => {
  if (!e.target.dataset.zone) return
  zones = zones.filter((z) => z !== e.target.dataset.zone)
  saveZones()
  renderZones()
})

document.getElementById('zone-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const typed = zoneInput.value.trim().toLowerCase()
  if (!typed) return
  // Some cities share a zone with another city (Beijing is in Asia/Shanghai), so they are listed here too.
  const match = zoneAliases[typed] ||
    zoneNames.find((z) => z.toLowerCase() === typed.replace(/ /g, '_')) ||
    zoneNames.find((z) => cityOf(z).toLowerCase() === typed)
  if (!match) {
    zoneMsg.textContent = t.zoneNotFound
    return
  }
  if (zones.includes(match)) {
    zoneMsg.textContent = t.zoneDuplicate
    return
  }
  zones = [...zones, match]
  saveZones()
  zoneInput.value = ''
  renderZones()
})

zoneOptions.replaceChildren(...[...zoneNames.map(cityOf), ...Object.keys(zoneAliases).map((name) => name.replace(/\b\w/g, (c) => c.toUpperCase()))].map((value) => Object.assign(document.createElement('option'), { value })))

const applyZonesVisibility = () => {
  zonesButton.hidden = !zonesOn
  renderPreview()
}
applyZonesVisibility()
// The window ticks along with the clock while it is open.
setInterval(() => {
  renderPreview()
  if (!manageWindow.hidden && manageTab === 'zones') renderZones()
}, 1000)

// Links. Permanent links are built in: Wikipedia, in the browser's language. They cannot be removed.
// Custom links are added by the visitor, up to 15. The whole links button can be switched off in settings.
const linksButton = document.getElementById('links-button')
const linksButtonIcon = linksButton.innerHTML
// Own links off: the button is a plain Wikipedia link with its logo, and the label says so.
const labelLinksButton = () => {
  const label = linksOwn ? t.linksButton : 'Wikipedia'
  linksButton.setAttribute('aria-label', label)
  linksButton.title = label
}
const linksPreview = document.getElementById('links-preview')
const linksIcons = document.getElementById('links-window-icons')
const linksOwnBox = document.getElementById('links-own')
const linksWindow = document.getElementById('links-window')
const linksList = document.getElementById('links-list')
const linkForm = document.getElementById('link-form')
const linkName = document.getElementById('link-name')
const linkUrl = document.getElementById('link-url')
const linkDesc = document.getElementById('link-desc')
const linkMsg = document.getElementById('link-msg')
const linkCancel = document.getElementById('link-cancel')
const linkSave = document.getElementById('link-save')
const linkFormTitle = document.getElementById('link-form-title')
const LINK_LIMIT = 15

// Only http and https addresses are accepted, so nothing like javascript: can be stored.
const safeUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}
const hostOf = (value) => {
  try { return new URL(value).host } catch { return '' }
}

// The Wikipedia edition follows the browser language, with English as the fallback.
const wikiCode = ['nl', 'de', 'fr', 'es', 'zh'].includes(uiLang) ? uiLang : 'en'
const brandIcons = {
  wikipedia: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z"/></svg>',
  google: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>',
  apple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
  dw: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.143 5.182A6.854 6.854 0 0 0 12 7.493a6.855 6.855 0 0 0-5.143-2.311C3.07 5.182 0 8.234 0 12c0 3.766 3.07 6.818 6.857 6.818A6.855 6.855 0 0 0 12 16.507a6.854 6.854 0 0 0 5.143 2.311C20.929 18.818 24 15.766 24 12c0-3.766-3.07-6.818-6.857-6.818zm-6.04 10.05a5.349 5.349 0 0 1-4.246 2.086c-2.954 0-5.348-2.38-5.348-5.318 0-2.937 2.394-5.318 5.348-5.318 1.731 0 3.27.818 4.247 2.087A5.274 5.274 0 0 1 12.206 12a5.274 5.274 0 0 1-1.102 3.231zm8.88-.641h-1.608l-1.049-2.549-1.025 2.549h-1.605l-1.661-5.182h1.833l.779 2.602.972-2.602h1.434l.973 2.602.778-2.602h1.841zM7.058 9.273H4.083v5.454h2.975c1.534 0 3.107-.878 3.107-2.727 0-1.768-1.434-2.727-3.107-2.727zm-.161 3.874H5.729v-2.318h1.168c1.062 0 1.44.59 1.44 1.159.001.561-.375 1.159-1.44 1.159z"/></svg>'
}
// Permanent links: recognisable logos (Simple Icons, CC0). Grouped: reference, tech, then social. The Wikipedia edition follows the browser language.
// Reuters is the news link, shown by its name: no Reuters logo is in the open icon set.
const wikipediaIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z"/></svg>'
const microsoftIcon = '<svg class="wide" viewBox="0 0 60 24" fill="currentColor" aria-hidden="true"><text x="30" y="17" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="600">Microsoft</text></svg>'
const reutersIcon = '<svg class="wide" viewBox="0 0 60 24" fill="currentColor" aria-hidden="true"><text x="30" y="17" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="700">Reuters</text></svg>'
const permanentLinks = () => [
  { title: 'Wikipedia', url: `https://${wikiCode}.wikipedia.org/`, description: '', icon: wikipediaIcon },
  { title: 'Google', url: 'https://www.google.com/', description: '', icon: brandIcons.google },
  { title: 'Reuters', url: 'https://www.reuters.com/', description: '', icon: reutersIcon },
  { title: 'Apple', url: 'https://www.apple.com/', description: '', icon: brandIcons.apple },
  { title: 'Microsoft', url: 'https://www.microsoft.com/', description: '', icon: microsoftIcon },
  { title: 'GitHub', url: 'https://github.com/', description: '', icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>' },
  { title: 'Facebook', url: 'https://www.facebook.com/', description: '', icon: brandIcons.facebook },
  { title: 'Instagram', url: 'https://www.instagram.com/', description: '', icon: brandIcons.instagram },
  { title: 'X', url: 'https://x.com/', description: '', icon: brandIcons.x },
  { title: 'Reddit', url: 'https://www.reddit.com/', description: '', icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/></svg>' },
]
const isPermanent = (url) => permanentLinks().some((link) => link.url === url)
const isValidLink = (link) => !!link && typeof link.title === 'string' && typeof link.url === 'string' && safeUrl(link.url) && !isPermanent(link.url)

let links = []
try {
  const saved = JSON.parse(localStorage.getItem('links') || 'null')
  if (Array.isArray(saved)) links = saved.filter(isValidLink).slice(0, LINK_LIMIT)
} catch {}
let linksOn = readFlag('linksOn', true)
let linksOwn = readFlag('linksOwn', false)
let editing = null

const saveLinks = () => writeKey('links', JSON.stringify(links))

// A link as a row in the preview or the window. Link text is set with textContent, never as HTML.
const linkAnchor = (link, withDescription) => {
  const anchor = Object.assign(document.createElement('a'), { href: link.url, target: '_blank', rel: 'noopener', className: 'link-main' })
  anchor.append(el('span', 'link-title', link.title))
  const detail = [hostOf(link.url), withDescription ? link.description : ''].filter(Boolean).join(' · ')
  if (detail) anchor.append(el('small', '', detail))
  return anchor
}

const renderLinks = () => {
  linksButton.hidden = !linksOn
  linksButton.innerHTML = linksOwn ? linksButtonIcon : wikipediaIcon
  labelLinksButton()
  linksPreview.hidden = !linksOwn
  settingsFields.linksOwn.disabled = !linksOn
  // The hover list shows only the links the visitor added; the permanent ones live in the window.
  linksPreview.replaceChildren(...links.map((link) => linkAnchor(link, false)))

  // Permanent links as a row of icons at the top of the window.
  linksIcons.replaceChildren(...permanentLinks().map((link) => {
    const icon = Object.assign(document.createElement('a'), { href: link.url, target: '_blank', rel: 'noopener', className: 'link-icon', title: link.title })
    icon.setAttribute('aria-label', link.title)
    icon.innerHTML = link.icon
    return icon
  }))

  const rows = links.map((link, index) => {
    const row = el('div', 'link-row')
    const edit = el('button', 'icon-btn', '✎')
    edit.type = 'button'
    edit.title = t.linkEditBtn
    edit.setAttribute('aria-label', t.linkEditBtn)
    edit.dataset.edit = String(index)
    const remove = el('button', 'icon-btn', '×')
    remove.type = 'button'
    remove.title = t.linkRemove
    remove.setAttribute('aria-label', t.linkRemove)
    remove.dataset.remove = String(index)
    const up = el('button', 'icon-btn', '↑')
    up.type = 'button'
    up.title = t.linkUp
    up.setAttribute('aria-label', t.linkUp)
    up.disabled = index === 0
    up.dataset.index = String(index)
    up.dataset.step = '-1'
    const down = el('button', 'icon-btn', '↓')
    down.type = 'button'
    down.title = t.linkDown
    down.setAttribute('aria-label', t.linkDown)
    down.disabled = index === links.length - 1
    down.dataset.index = String(index)
    down.dataset.step = '1'
    const actions = el('div', 'link-actions')
    actions.append(up, down, edit, remove)
    row.append(linkAnchor(link, true), actions)
    return row
  })
  linksList.replaceChildren(...(rows.length ? rows : [el('p', 'zones-empty', t.linksEmpty)]))
  const ownRows = links.map((link) => {
    const row = Object.assign(document.createElement('a'), { href: link.url, target: '_blank', rel: 'noopener', className: 'own-link' })
    row.append(link.title)
    if (link.description) row.append(el('span', 'own-desc', link.description))
    return row
  })
  linksOwnBox.replaceChildren(...(ownRows.length ? ownRows : [el('p', 'zones-empty', t.linksEmpty)]))

  const full = links.length >= LINK_LIMIT && editing === null
  limitCount('link-name', links.length, LINK_LIMIT)
  linkName.disabled = full
  linkUrl.disabled = full
  linkDesc.disabled = full
  linkSave.disabled = full
}

const resetLinkForm = () => {
  editing = null
  linkForm.reset()
  linkFormTitle.textContent = t.linkAdd
  linkSave.textContent = t.linkSave
  linkCancel.hidden = true
  linkMsg.textContent = ''
  renderLinks()
}

linkForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // A bare host such as example.com gets https:// in front of it.
  let url = linkUrl.value.trim()
  if (url && !/^[a-z][a-z0-9+.-]*:\/\//i.test(url)) url = `https://${url}`
  if (!safeUrl(url) || isPermanent(url)) {
    linkMsg.textContent = t.linkInvalid
    return
  }
  const link = {
    title: linkName.value.trim() || hostOf(url),
    url,
    description: linkDesc.value.trim().slice(0, 120),
  }
  if (editing !== null) links[editing] = link
  else if (links.length < LINK_LIMIT) links = [...links, link]
  saveLinks()
  resetLinkForm()
})

linkCancel.addEventListener('click', resetLinkForm)

linksList.addEventListener('click', (e) => {
  const { edit, remove, index, step } = e.target.dataset
  if (step !== undefined) {
    const next = Number(index) + Number(step)
    const moved = [...links]
    ;[moved[Number(index)], moved[next]] = [moved[next], moved[Number(index)]]
    links = moved
    saveLinks()
    if (editing !== null) resetLinkForm()
    renderLinks()
  } else if (edit !== undefined) {
    const link = links[Number(edit)]
    editing = Number(edit)
    linkName.value = link.title
    linkUrl.value = link.url
    linkDesc.value = link.description || ''
    linkFormTitle.textContent = t.linkEdit
    linkSave.textContent = t.linkSave
    linkCancel.hidden = false
    renderLinks()
    linkName.focus()
  } else if (remove !== undefined) {
    links = links.filter((_, index) => index !== Number(remove))
    saveLinks()
    if (editing !== null) resetLinkForm()
    renderLinks()
  }
})

const openLinks = () => {
  linksWindow.hidden = false
  linksWindow.querySelector('.settings-panel').focus()
}
const closeLinks = () => { linksWindow.hidden = true; linksButton.focus() }
document.getElementById('links-window-close').addEventListener('click', closeLinks)
linksWindow.addEventListener('click', (e) => { if (e.target === linksWindow) closeLinks() })
document.getElementById('links-manage').addEventListener('click', () => {
  linksWindow.hidden = true
  openManage('links')
})
linksButton.addEventListener('click', () => {
  if (!linksOwn) return window.open(permanentLinks()[0].url, '_blank', 'noopener')
  openLinks()
})

// The links button can be switched off in settings; the window closes with it.
settingsFields.links.addEventListener('change', () => {
  linksOn = settingsFields.links.checked
  writeKey('linksOn', linksOn ? 'on' : 'off')
  if (!linksOn && manageTab === 'links' && !manageWindow.hidden) closeManage()
  if (!linksOn && !linksWindow.hidden) closeLinks()
  renderLinks()
})
settingsFields.linksOwn.addEventListener('change', () => {
  linksOwn = settingsFields.linksOwn.checked
  writeKey('linksOwn', linksOwn ? 'on' : 'off')
  renderLinks()
})
renderLinks()

// AI shortcuts below the search bar. Five at most; the visitor can change, reorder or remove them.
const ASK_AI_LIMIT = 5
const askAiIcons = {
  meta: `<svg width="16" height="16" viewBox="0 0 1280 1280" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><ellipse cx="303" cy="366" rx="205" ry="135" transform="rotate(-8 303 366)"/><ellipse cx="644" cy="206" rx="185" ry="110" transform="rotate(-37 644 206)"/><ellipse cx="981" cy="372" rx="200" ry="140" transform="rotate(17 981 372)"/><ellipse cx="1061" cy="740" rx="200" ry="147" transform="rotate(-28 1061 740)"/><ellipse cx="825" cy="1033" rx="190" ry="150" transform="rotate(35 825 1033)"/><ellipse cx="450" cy="1028" rx="200" ry="137" transform="rotate(-6 450 1028)"/><ellipse cx="215" cy="732" rx="200" ry="150" transform="rotate(-51 215 732)"/></svg>`,
  kagi: `<svg width="16" height="16" viewBox="14 14 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M100.5 60C100.5 37.6325 82.3675 19.5 60 19.5C37.6325 19.5 19.5 37.6325 19.5 60C19.5 82.3675 37.6325 100.5 60 100.5C82.3675 100.5 100.5 82.3675 100.5 60ZM105.5 60C105.5 85.129 85.129 105.5 60 105.5C34.871 105.5 14.5 85.129 14.5 60C14.5 34.8711 34.871 14.5 60 14.5C85.1289 14.5 105.5 34.8711 105.5 60Z" fill="currentColor"/><path d="M88.4798 60.0002C88.4798 59.3131 88.4602 58.6685 88.4134 58.0695L88.4114 58.0481C87.9003 50.6849 84.5501 43.8072 79.0677 38.8654C73.5853 33.9239 66.3982 31.3035 59.0218 31.5568C51.6454 31.8103 44.6551 34.9177 39.5247 40.2238C34.3944 45.5301 31.5246 52.6214 31.5198 60.0022V60.0051C31.5183 60.7521 31.5475 61.4989 31.6068 62.2434L31.6761 62.9865V62.9895C32.3175 69.0449 34.8817 74.7354 38.9925 79.2277C43.1034 83.7202 48.5448 86.7785 54.5198 87.9533L55.1976 88.0774C56.7817 88.3485 58.3865 88.4841 59.9944 88.4807H60.0003C67.5534 88.4806 74.7971 85.4797 80.138 80.1389C85.479 74.7978 88.4798 67.5536 88.4798 60.0002ZM93.4798 60.0002C93.4798 68.8795 89.9527 77.3953 83.6741 83.674C77.3964 89.9517 68.8821 93.4786 60.0042 93.4797L60.0052 93.4807L60.0023 93.4797L60.0003 93.4807V93.4797C57.8371 93.484 55.6786 93.2767 53.556 92.8596H53.555C46.5319 91.4786 40.136 87.8841 35.304 82.6037C30.472 77.3232 27.4573 70.6338 26.7034 63.5158L26.7044 63.5149C26.5795 62.3459 26.5175 61.171 26.5198 59.9953C26.5263 51.3198 29.9006 42.9853 35.931 36.7483C41.9621 30.5106 50.1794 26.8576 58.8509 26.5598C67.5223 26.262 75.9705 29.3425 82.4153 35.1516C88.8603 40.9609 92.7988 49.0455 93.3997 57.7014H93.3988C93.457 58.4559 93.4798 59.228 93.4798 60.0002Z" fill="currentColor"/><path d="M32.9949 42.0264C41.0787 42.0264 46.0217 45.4338 50.4783 48.4297C54.8798 51.3886 58.8453 53.9824 65.5476 53.9824C70.5928 53.9824 73.9227 53.0468 76.8123 51.8525C78.312 51.2327 79.6721 50.5535 81.2136 49.8213C82.725 49.1034 84.3514 48.3653 86.2039 47.7383L87.8064 52.4736C86.2368 53.005 84.8221 53.643 83.3591 54.3379C81.9264 55.0184 80.3789 55.789 78.7224 56.4736C75.299 57.8885 71.3215 58.9824 65.5476 58.9824C57.233 58.9824 52.1805 55.5983 47.6892 52.5791C43.2531 49.597 39.4283 47.0264 32.9949 47.0264V42.0264Z" fill="currentColor"/><path d="M34.567 61.0186C42.6449 61.0214 47.5883 64.4261 52.0446 67.4209C56.448 70.3802 60.4131 72.9736 67.11 72.9736C72.155 72.9736 75.4865 72.0381 78.3805 70.8486C79.8841 70.2306 81.2437 69.5573 82.7906 68.8311C84.306 68.1196 85.9358 67.3899 87.7936 66.7764L89.3619 71.5244C87.7925 72.0427 86.3776 72.6701 84.9156 73.3564C83.4854 74.0279 81.9348 74.7938 80.2809 75.4736C76.8593 76.88 72.8839 77.9736 67.11 77.9736C58.8005 77.9736 53.7474 74.5901 49.2555 71.5713C44.8182 68.5892 40.9908 66.0176 34.5573 66.0176H34.5455C32.9655 66.0103 31.3885 66.1591 29.8375 66.4609L28.8824 61.5527C30.7519 61.189 32.6527 61.0105 34.5573 61.0186V61.0176C34.5586 61.0176 34.5599 61.0186 34.5612 61.0186C34.5634 61.0186 34.5657 61.0176 34.568 61.0176L34.567 61.0186Z" fill="currentColor"/></svg>`,
  lumo: `<svg width="16" height="16" viewBox="-0.5 -0.5 323 341" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M 52.5,-0.5 C 57.1667,-0.5 61.8333,-0.5 66.5,-0.5C 80.5677,8.71264 94.901,17.7126 109.5,26.5C 117.257,23.4688 125.257,21.4688 133.5,20.5C 142.306,19.5607 151.139,18.894 160,18.5C 169.523,18.9101 179.023,19.5768 188.5,20.5C 197.652,21.6628 206.485,23.9962 215,27.5C 229.513,18.0054 244.013,8.67206 258.5,-0.5C 263.167,-0.5 267.833,-0.5 272.5,-0.5C 278.89,2.22448 283.223,6.89115 285.5,13.5C 285.549,17.0781 286.215,20.4115 287.5,23.5C 287.5,23.8333 287.5,24.1667 287.5,24.5C 287.335,28.1817 287.501,31.8484 288,35.5C 288.232,36.7375 288.732,37.7375 289.5,38.5C 291.431,55.1832 293.597,71.8498 296,88.5C 310.046,108.485 318.879,130.485 322.5,154.5C 322.5,163.167 322.5,171.833 322.5,180.5C 318.205,205.321 305.538,224.821 284.5,239C 278.461,243.02 272.128,246.52 265.5,249.5C 265.167,249.5 264.833,249.5 264.5,249.5C 235.26,262.416 204.594,269.082 172.5,269.5C 163.5,269.5 154.5,269.5 145.5,269.5C 114.842,267.835 85.509,260.835 57.5,248.5C 57.5,247.833 57.1667,247.5 56.5,247.5C 33.7391,237.575 16.5725,221.575 5,199.5C 2.6729,193.172 0.839566,186.838 -0.5,180.5C -0.5,171.833 -0.5,163.167 -0.5,154.5C 0.166667,151.5 0.833333,148.5 1.5,145.5C 3.10161,141.761 4.10161,137.761 4.5,133.5C 9.47868,115.543 17.6453,99.2093 29,84.5C 30.0959,79.5348 30.9293,74.5348 31.5,69.5C 33.7479,60.0936 35.0813,50.427 35.5,40.5C 35.1936,37.6146 35.5269,34.9479 36.5,32.5C 37.889,27.7312 38.5557,22.7312 38.5,17.5C 39.8138,8.86401 44.4804,2.86401 52.5,-0.5 Z" fill="currentColor" opacity="1"/><path d="M 188.5,20.5 C 179.023,19.5768 169.523,18.9101 160,18.5C 151.139,18.894 142.306,19.5607 133.5,20.5C 151.833,16.5 170.167,16.5 188.5,20.5 Z" fill="currentColor" opacity="0.184"/><path d="M 285.5,13.5 C 287.011,16.5443 287.678,19.8776 287.5,23.5C 286.215,20.4115 285.549,17.0781 285.5,13.5 Z" fill="currentColor" opacity="0.196"/><path d="M 38.5,17.5 C 38.5557,22.7312 37.889,27.7312 36.5,32.5C 36.4443,27.2688 37.111,22.2688 38.5,17.5 Z" fill="currentColor" opacity="0.627"/><path d="M 54.5,31.5 C 62.1857,33.3427 69.1857,36.8427 75.5,42C 66.8044,48.017 58.4711,54.517 50.5,61.5C 49.3452,58.5541 49.1786,55.5541 50,52.5C 50.6109,45.2155 52.1109,38.2155 54.5,31.5 Z" fill="currentColor" opacity="1"/><path d="M 261.5,31.5 C 265.509,30.6857 268.176,32.1857 269.5,36C 270.261,43.0306 271.261,50.0306 272.5,57C 272.167,58.5 271.833,60 271.5,61.5C 263.451,54.7829 255.117,48.4496 246.5,42.5C 251.352,38.5798 256.352,34.9131 261.5,31.5 Z" fill="currentColor" opacity="1"/><path d="M 287.5,24.5 C 288.521,28.9804 289.187,33.647 289.5,38.5C 288.732,37.7375 288.232,36.7375 288,35.5C 287.501,31.8484 287.335,28.1817 287.5,24.5 Z" fill="currentColor" opacity="1"/><path d="M 35.5,40.5 C 35.0813,50.427 33.7479,60.0936 31.5,69.5C 32.2748,59.6208 33.6082,49.9541 35.5,40.5 Z" fill="currentColor" opacity="1"/><path d="M 120.5,136.5 C 105.579,113.209 84.2456,103.042 56.5,106C 31.7076,113.052 19.7076,129.552 20.5,155.5C 14.4913,125.392 26.4913,106.225 56.5,98C 80.8138,95.6537 100.314,104.154 115,123.5C 117.403,127.635 119.237,131.968 120.5,136.5 Z" fill="currentColor" opacity="1"/><path d="M 272.5,154.5 C 272.889,129.065 260.889,112.898 236.5,106C 209.295,102.94 188.295,112.773 173.5,135.5C 178.732,119.762 189.066,108.595 204.5,102C 228.663,92.8306 249.497,97.664 267,116.5C 275.167,128.45 277,141.117 272.5,154.5 Z" fill="currentColor" opacity="1"/><path d="M 79.5,123.5 C 78.0567,125.621 77.0567,127.954 76.5,130.5C 76.4759,134.973 78.6426,137.307 83,137.5C 84.8784,137.304 86.7117,136.971 88.5,136.5C 88.5,136.833 88.5,137.167 88.5,137.5C 89.3197,143.797 89.653,150.131 89.5,156.5C 88.7487,165.504 84.7487,172.671 77.5,178C 70.9888,179.874 65.8221,178.041 62,172.5C 53.6807,158.061 53.3473,143.395 61,128.5C 65.587,121.26 71.7537,119.594 79.5,123.5 Z" fill="currentColor" opacity="1"/><path d="M 232.5,123.5 C 228.529,126.855 227.696,130.855 230,135.5C 233.303,137.744 236.803,138.077 240.5,136.5C 241.159,139.455 241.492,142.455 241.5,145.5C 241.799,152.283 241.133,158.949 239.5,165.5C 236.708,175.136 230.374,179.302 220.5,178C 213.967,173.121 209.801,166.621 208,158.5C 205.757,146.48 208.09,135.48 215,125.5C 220.372,121.016 226.206,120.35 232.5,123.5 Z" fill="currentColor" opacity="1"/><path d="M 79.5,123.5 C 83.707,126.886 86.707,131.219 88.5,136.5C 86.7117,136.971 84.8784,137.304 83,137.5C 78.6426,137.307 76.4759,134.973 76.5,130.5C 77.0567,127.954 78.0567,125.621 79.5,123.5 Z" fill="currentColor" opacity="1"/><path d="M 232.5,123.5 C 236.417,126.988 239.083,131.321 240.5,136.5C 236.803,138.077 233.303,137.744 230,135.5C 227.696,130.855 228.529,126.855 232.5,123.5 Z" fill="currentColor" opacity="1"/><path d="M 4.5,133.5 C 4.10161,137.761 3.10161,141.761 1.5,145.5C 1.58413,141.163 2.58413,137.163 4.5,133.5 Z" fill="currentColor" opacity="0.545"/><path d="M 88.5,137.5 C 90.0392,140.865 90.7058,144.531 90.5,148.5C 90.4975,151.355 90.1641,154.022 89.5,156.5C 89.653,150.131 89.3197,143.797 88.5,137.5 Z" fill="currentColor" opacity="1"/><path d="M 120.5,138.5 C 121.6,140.277 122.434,142.277 123,144.5C 123.818,150.349 123.652,156.015 122.5,161.5C 122.868,153.713 122.202,146.046 120.5,138.5 Z" fill="currentColor" opacity="1"/><path d="M 241.5,145.5 C 242.648,149.981 242.815,154.648 242,159.5C 241.963,161.974 241.13,163.974 239.5,165.5C 241.133,158.949 241.799,152.283 241.5,145.5 Z" fill="currentColor" opacity="1"/><path d="M 199.5,194.5 C 208.718,196.273 218.051,196.94 227.5,196.5C 220.345,197.655 213.012,197.822 205.5,197C 203.277,196.434 201.277,195.6 199.5,194.5 Z" fill="currentColor" opacity="1"/><path d="M 57.5,248.5 C 85.509,260.835 114.842,267.835 145.5,269.5C 144.5,270.167 143.5,270.833 142.5,271.5C 137.601,272.952 133.267,275.452 129.5,279C 126.547,281.752 124.214,284.918 122.5,288.5C 100.833,288.5 79.1667,288.5 57.5,288.5C 57.5,275.167 57.5,261.833 57.5,248.5 Z" fill="currentColor" opacity="1"/><path d="M 264.5,249.5 C 264.5,262.5 264.5,275.5 264.5,288.5C 242.167,288.5 219.833,288.5 197.5,288.5C 191.927,278.584 183.594,272.584 172.5,270.5C 172.5,270.167 172.5,269.833 172.5,269.5C 204.594,269.082 235.26,262.416 264.5,249.5 Z" fill="currentColor" opacity="1"/><path d="M 145.5,269.5 C 154.5,269.5 163.5,269.5 172.5,269.5C 172.5,269.833 172.5,270.167 172.5,270.5C 169.167,270.5 165.833,270.5 162.5,270.5C 155.798,270.336 149.131,270.669 142.5,271.5C 143.5,270.833 144.5,270.167 145.5,269.5 Z" fill="currentColor" opacity="1"/><path d="M 162.5,270.5 C 165.833,270.5 169.167,270.5 172.5,270.5C 183.594,272.584 191.927,278.584 197.5,288.5C 197.5,289.167 197.833,289.5 198.5,289.5C 205.9,311.182 199.566,327.349 179.5,338C 177.26,338.977 174.927,339.477 172.5,339.5C 168.818,339.665 165.152,339.499 161.5,339C 182.176,331.833 190.676,317.333 187,295.5C 182.64,283.307 174.473,274.974 162.5,270.5 Z" fill="currentColor" opacity="1"/><path d="M 162.5,270.5 C 174.473,274.974 182.64,283.307 187,295.5C 190.676,317.333 182.176,331.833 161.5,339C 165.152,339.499 168.818,339.665 172.5,339.5C 172.5,339.833 172.5,340.167 172.5,340.5C 164.167,340.5 155.833,340.5 147.5,340.5C 122.176,332.188 113.51,315.188 121.5,289.5C 122.167,289.5 122.5,289.167 122.5,288.5C 124.214,284.918 126.547,281.752 129.5,279C 133.267,275.452 137.601,272.952 142.5,271.5C 149.131,270.669 155.798,270.336 162.5,270.5 Z" fill="currentColor" opacity="1"/><path d="M 56.5,247.5 C 57.1667,247.5 57.5,247.833 57.5,248.5C 57.5,261.833 57.5,275.167 57.5,288.5C 79.1667,288.5 100.833,288.5 122.5,288.5C 122.5,289.167 122.167,289.5 121.5,289.5C 99.8333,289.5 78.1667,289.5 56.5,289.5C 56.5,275.5 56.5,261.5 56.5,247.5 Z" fill="currentColor" opacity="0.576"/><path d="M 264.5,249.5 C 264.833,249.5 265.167,249.5 265.5,249.5C 265.5,262.833 265.5,276.167 265.5,289.5C 243.167,289.5 220.833,289.5 198.5,289.5C 197.833,289.5 197.5,289.167 197.5,288.5C 219.833,288.5 242.167,288.5 264.5,288.5C 264.5,275.5 264.5,262.5 264.5,249.5 Z" fill="currentColor" opacity="0.576"/><path d="M 148.5,289.5 C 155.648,287.705 160.815,290.039 164,296.5C 164.964,301.244 163.631,305.244 160,308.5C 159.667,311.833 159.333,315.167 159,318.5C 155.829,323.414 152.163,323.747 148,319.5C 147.667,315.833 147.333,312.167 147,308.5C 140.768,301.625 141.268,295.292 148.5,289.5 Z" fill="currentColor" opacity="1"/></svg>`,
  "claude": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" fill-rule=\"evenodd\" aria-hidden=\"true\"><path d=\"M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z\"></svg>",
  "chatgpt": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" fill-rule=\"evenodd\" aria-hidden=\"true\"><path d=\"M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z\"></svg>",
  "grok": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" fill-rule=\"evenodd\" aria-hidden=\"true\"><path d=\"M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815\"></svg>",
  "duck": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 .984C18.083.984 23.016 5.916 23.016 12S18.084 23.016 12 23.016.984 18.084.984 12C.984 5.917 5.916.984 12 .984zm0 .938C6.434 1.922 1.922 6.434 1.922 12c0 4.437 2.867 8.205 6.85 9.55-.237-.82-.776-2.753-1.6-6.052-1.184-4.741-2.064-8.606 2.379-9.813.047-.011.064-.064.03-.093-.514-.467-1.382-.548-2.233-.38a.06.06 0 0 1-.07-.058c0-.011 0-.023.011-.035.205-.286.572-.507.822-.64a1.843 1.843 0 0 0-.607-.335c-.059-.022-.059-.12-.006-.144.006-.006.012-.012.024-.012 1.749-.233 3.586.292 4.49 1.448.011.011.023.017.035.023 2.968.635 3.509 4.837 3.328 5.998a9.607 9.607 0 0 0 2.346-.576c.746-.286 1.008-.222 1.101-.053.1.193-.018.513-.28.81-.496.567-1.393 1.01-2.974 1.137-.546.044-1.029.024-1.445.006-.789-.035-1.339-.059-1.633.39-.192.298-.041.998 1.487 1.22 1.09.157 2.078.047 2.798-.034.643-.07 1.073-.118 1.172.069.21.402-.996 1.207-3.066 1.224-.158 0-.315-.006-.467-.011-1.283-.065-2.227-.414-2.816-.735a.094.094 0 0 1-.035-.017c-.105-.059-.31.045-.188.267.07.134.444.478 1.004.776-.058.466.087 1.184.338 2l.088-.016c.041-.009.087-.019.134-.025.507-.082.775.012.926.175.717-.536 1.913-1.294 2.03-1.154.583.694.66 2.332.53 2.99-.004.012-.017.024-.04.035-.274.117-1.783-.296-1.783-.511-.059-1.075-.26-1.173-.493-1.225h-.156c.006.006.012.018.018.03l.052.12c.093.257.24 1.063.13 1.26-.112.199-.835.297-1.284.303-.443.006-.543-.158-.637-.408-.07-.204-.103-.675-.103-.95a.857.857 0 0 1 .012-.216c-.134.058-.333.193-.397.281-.017.262-.017.682.123 1.149.07.221-1.518 1.164-1.74.99-.227-.181-.634-1.952-.459-2.67-.187.017-.338.075-.42.191-.367.508.093 2.933.582 3.248.257.169 1.54-.553 2.176-1.095.105.145.305.158.553.158.326-.012.782-.06 1.103-.158.192.45.423.972.613 1.388 4.47-1.032 7.803-5.037 7.803-9.82 0-5.566-4.512-10.078-10.078-10.078zm1.791 5.646c-.42 0-.678.146-.795.332-.023.047.047.094.094.07.14-.075.357-.161.701-.156.328.006.516.09.67.159l.023.01c.041.017.088-.03.059-.065-.134-.18-.332-.35-.752-.35zm-5.078.198a1.24 1.24 0 0 0-.522.082c-.454.169-.67.526-.67.76 0 .051.112.057.141.011.081-.123.21-.31.617-.478.408-.17.73-.146.951-.094.047.012.083-.041.041-.07a.989.989 0 0 0-.558-.211zm5.434 1.423a.651.651 0 0 0-.655.647.652.652 0 0 0 1.307 0 .646.646 0 0 0-.652-.647zm.283.262h.008a.17.17 0 0 1 .17.17c0 .093-.077.17-.17.17a.17.17 0 0 1-.17-.17c0-.09.072-.165.162-.17zm-5.358.076a.752.752 0 0 0-.758.758c0 .42.338.758.758.758s.758-.337.758-.758a.756.756 0 0 0-.758-.758zm.328.303h.01c.112 0 .2.089.2.2 0 .11-.088.197-.2.197a.195.195 0 0 1-.197-.198c0-.107.082-.194.187-.199z\"/></svg>"
}
const defaultAskAi = [
  { key: 'claude', title: 'Claude', url: 'https://claude.ai/' },
  { key: 'chatgpt', title: 'ChatGPT', url: 'https://chatgpt.com/' },
  { key: 'grok', title: 'Grok', url: 'https://grok.com/' },
  { key: 'duck', title: 'Duck.ai', url: 'https://duck.ai/' },
]
// Services that can be picked from the list in the AI form; the built-in ones keep their icon.
const aiCatalog = [
  ...defaultAskAi,
  { key: 'lumo', title: 'Lumo', url: 'https://lumo.proton.me/' },
  { key: 'kagi', title: 'Kagi', url: 'https://assistant.kagi.com/' },
  { key: 'meta', title: 'Meta AI', url: 'https://www.meta.ai/' },
]
let askAiList = defaultAskAi.map((item) => ({ ...item }))
try {
  const saved = JSON.parse(localStorage.getItem('askAiList') || 'null')
  if (Array.isArray(saved)) askAiList = saved.filter((item) => item && typeof item.title === 'string' && safeUrl(item.url)).slice(0, ASK_AI_LIMIT)
} catch {}
const askAiRow = document.getElementById('ask-ai-list')
const aiList = document.getElementById('ai-list')
const aiForm = document.getElementById('ai-form')
const aiName = document.getElementById('ai-name')
const aiUrl = document.getElementById('ai-url')
const aiMsg = document.getElementById('ai-msg')
const aiCatalogBox = document.getElementById('ai-catalog')

const saveAskAi = () => {
  writeKey('askAiList', JSON.stringify(askAiList))
  renderAskAi()
}

const aiButton = (label, glyph, onClick, disabled = false) => {
  const button = Object.assign(document.createElement('button'), { type: 'button', textContent: glyph, disabled })
  button.setAttribute('aria-label', label)
  button.title = label
  button.addEventListener('click', onClick)
  return button
}

// At the limit the add form is greyed out and says why; editing an existing shortcut stays possible.
const syncAiLimit = () => {
  const full = askAiList.length >= ASK_AI_LIMIT && aiEditing === null
  limitCount('ai-name', askAiList.length, ASK_AI_LIMIT)
  aiName.disabled = full
  aiUrl.disabled = full
  renderAiCatalog()
  document.getElementById('ai-save').disabled = full
}
// The site's own icon, at the address browsers use for it; a site without one shows the name instead.
const faviconOf = (url) => {
  try { return `${new URL(url).origin}/favicon.ico` } catch { return '' }
}
// Looks for the site's icon once when a shortcut is added; the answer is kept, so later page loads do not ask again.
const checkIconOnce = (url) => {
  const probe = new Image()
  const keep = (ok) => {
    askAiList = askAiList.map((item) => (item.key === '' && item.url === url && item.icon === undefined ? { ...item, icon: ok } : item))
    saveAskAi()
  }
  probe.onload = () => keep(true)
  probe.onerror = () => keep(false)
  probe.src = faviconOf(url)
}

// The built-in icon, or the site's icon for a custom shortcut; null when there is none to show.
const askAiIconNode = (item) => {
  if (askAiIcons[item.key]) {
    const svg = el('span', 'ai-icon')
    svg.innerHTML = askAiIcons[item.key]
    return svg
  }
  const icon = item.icon === false ? '' : faviconOf(item.url)
  if (!icon) return null
  const img = Object.assign(document.createElement('img'), { src: icon, alt: '', width: 18, height: 18, className: 'ai-icon' })
  img.onerror = () => img.remove()
  return img
}
// The providers as a checklist: a tick adds the service to the bar, a second tick removes it. Five at most, with custom shortcuts.
const renderAiCatalog = () => {
  const full = askAiList.length >= ASK_AI_LIMIT
  aiCatalogBox.replaceChildren(...aiCatalog.map((service) => {
    const ticked = askAiList.some((item) => normalizeUrl(item.url) === normalizeUrl(service.url))
    const box = Object.assign(document.createElement('input'), { type: 'checkbox', checked: ticked, disabled: aiEditing !== null || (!ticked && full) })
    box.addEventListener('change', () => {
      if (box.checked) {
        if (askAiList.length >= ASK_AI_LIMIT) { box.checked = false; aiMsg.textContent = limitText(askAiList.length, ASK_AI_LIMIT).text; return }
        askAiList = [...askAiList, { key: service.key, title: service.title, url: service.url }]
        if (!service.key) checkIconOnce(service.url)
      } else {
        askAiList = askAiList.filter((item) => normalizeUrl(item.url) !== normalizeUrl(service.url))
      }
      saveAskAi()
    })
    const label = el('label', 'service-pick')
    label.append(box)
    const icon = askAiIconNode(service)
    if (icon) label.append(icon)
    label.append(el('span', '', service.title))
    return label
  }))
}
const renderAskAi = () => {
  askAi.hidden = !askaiOn
  askAiRow.hidden = askAiList.length === 0
  syncAiLimit()
  renderAiCatalog()
  askAiRow.replaceChildren(...askAiList.map((item) => {
    const link = Object.assign(document.createElement('a'), { href: item.url })
    if (aiNewTab) { link.target = '_blank'; link.rel = 'noopener' }
    link.title = item.title
    link.setAttribute('aria-label', item.title)
    if (askAiIcons[item.key]) link.innerHTML = askAiIcons[item.key]
    else {
      // A custom shortcut shows the site's icon; if there is none, its name stays.
      const icon = item.icon === false ? '' : faviconOf(item.url)
      if (icon) {
        const img = Object.assign(document.createElement('img'), { src: icon, alt: '', width: 18, height: 18, className: 'ai-icon' })
        img.onerror = () => { link.textContent = item.title }
        link.append(img)
      } else link.textContent = item.title
    }
    const li = document.createElement('li')
    li.append(link)
    return li
  }))
  aiList.replaceChildren(...askAiList.map((item, index) => {
    const row = document.createElement('li')
    // The same icon as in the row above the search bar, so the list shows what the visitor sees.
    const icon = askAiIconNode(item)
    if (icon) row.append(icon)
    row.append(el('span', '', item.title))
    const move = (step) => () => {
      const next = [...askAiList]
      ;[next[index], next[index + step]] = [next[index + step], next[index]]
      askAiList = next
      saveAskAi()
    }
    row.append(
      aiButton(t.aiUp, '↑', move(-1), index === 0),
      aiButton(t.aiDown, '↓', move(1), index === askAiList.length - 1),
      aiButton(t.aiEdit, '✎', () => startAiEdit(index)),
      aiButton(t.aiRemove, '×', () => { askAiList = askAiList.filter((_, i) => i !== index); if (aiEditing === index) resetAiForm(); saveAskAi() }),
    )
    return row
  }))
}

let aiEditing = null
const resetAiForm = () => {
  aiEditing = null
  aiForm.reset()
  document.getElementById('ai-form-title').textContent = t.aiAddTitle
  document.getElementById('ai-cancel').hidden = true
  aiMsg.textContent = ''
  syncAiLimit()
}
const startAiEdit = (index) => {
  const item = askAiList[index]
  aiEditing = index
  aiName.value = item.title
  aiUrl.value = item.url
  document.getElementById('ai-form-title').textContent = t.aiEditTitle
  document.getElementById('ai-cancel').hidden = false
  aiMsg.textContent = ''
  renderAskAi()
  aiName.focus()
}
document.getElementById('ai-cancel').addEventListener('click', resetAiForm)
aiForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // A bare host such as example.com gets https:// in front of it.
  let url = aiUrl.value.trim()
  if (url && !/^[a-z][a-z0-9+.-]*:\/\//i.test(url)) url = `https://${url}`
  if (!safeUrl(url)) { aiMsg.textContent = t.aiInvalid; return }
  const title = aiName.value.trim() || hostOf(url)
  const known = aiCatalog.find((service) => normalizeUrl(service.url) === normalizeUrl(url))
  const clash = askAiList.some((item, i) => i !== aiEditing && normalizeUrl(item.url) === normalizeUrl(url))
  if (clash) { aiMsg.textContent = t.aiDuplicate; return }
  let checked = null
  if (aiEditing !== null) {
    const before = askAiList[aiEditing]
    // A new address may have another icon, so it is checked again.
    const changed = before.key === '' && before.url !== url
    askAiList = askAiList.map((item, i) => (i === aiEditing ? { ...item, key: known ? known.key : item.key, title, url, ...(changed ? { icon: undefined } : {}) } : item))
    if (changed) checked = url
  } else {
    if (askAiList.length >= ASK_AI_LIMIT) { aiMsg.textContent = limitText(askAiList.length, ASK_AI_LIMIT).text; return }
    askAiList = [...askAiList, { key: known ? known.key : '', title, url }]
    if (!known) checked = url
  }
  resetAiForm()
  saveAskAi()
  if (checked) checkIconOnce(checked)
})


renderAskAi()
root.toggleAttribute('data-quote-off', !quoteOn)
applySettingsText()
syncLangSelects()
updateWeatherHint()
renderIp()
if (weatherOn) weatherButton.textContent = t.loading
else showIdle()
if (weatherOn) showWeather()


// A new quote every six hours, so the same one stays put for that window.
const quoteText = document.getElementById('quote-text')
const quoteBy = document.getElementById('quote-by')
const quotes = window.QUOTES
const quoteLang = pageLang
const translated = quotes[quoteLang] || []
const quoteList = quotes.en.map((q, i) => translated[i] || q)

// Wikipedia in the browser's language; English when there is no edition for it.
const wikiLang = ['nl', 'de', 'fr', 'es', 'zh'].includes(quoteLang) ? quoteLang : 'en'
// Clicking the quote steps to the next one; the six-hour rotation keeps going from there.
let quoteOffset = 0
const showQuote = () => {
  const sixHours = Math.floor(Date.now() / (6 * 3600 * 1000))
  const current = quoteList[(sixHours + quoteOffset) % quoteList.length]
  quoteText.textContent = `“${current.text}”`
  quoteBy.textContent = current.by
}
showQuote()
setInterval(showQuote, 60000)
document.getElementById('quote').addEventListener('click', () => {
  quoteOffset += 1
  showQuote()
})

const showTheme = () => {
  const stored = root.dataset.theme || 'auto'
  modeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.themeValue === stored))
  })
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.themeValue
    if (value === 'auto') {
      delete root.dataset.theme
      try { localStorage.removeItem('theme') } catch {}
    } else {
      root.dataset.theme = value
      try { localStorage.setItem('theme', value) } catch {}
    }
    showTheme()
  })
})
showTheme()

window.onload = () => {
  document.getElementsByTagName('body')[0].removeAttribute('class')
}

// Background: a cycle of wallpapers. The button steps through 'none' and every wallpaper switched on in
// Data beheren.
const wallpaper = document.getElementById('wallpaper')
const wallpaperToggle = document.getElementById('wallpaper-toggle')
const wallpaperThumb = wallpaperToggle.querySelector('span')
// Local copies in three sizes, so a phone does not download the largest one.
const wallpaperWidths = [800, 1280, 2000]
const wantedWidth = window.innerWidth * (window.devicePixelRatio || 1)
const wallpaperWidth = wallpaperWidths.find((w) => w >= wantedWidth) || wallpaperWidths[wallpaperWidths.length - 1]
// Each photo is a base name: assets/<base>-800.jpg, -1280.jpg and -2000.jpg, plus assets/<base>-thumb.jpg.
const wallpapers = [
  { id: 'photo', base: 'wallpaper', name: 'wallPhoto', on: true, by: { name: 'Dave Hoefler', url: 'https://unsplash.com/@iamthedave' } },
  { id: 'dunes', base: 'wallpaper-dunes', name: 'wallDunes', on: true, by: { name: 'John Fowler', url: 'https://unsplash.com/@wildhoney' } },
  { id: 'mountains', base: 'wallpaper-mountains', name: 'wallMountains', on: true, by: { name: 'Paul Earle', url: 'https://unsplash.com/@paulearlephotography' } },
].map((item) => ({ ...item, src: `assets/${item.base}-${wallpaperWidth}.jpg`, thumb: `assets/${item.base}-thumb.jpg` }))
// Switched on or off in Data beheren; a wallpaper without a saved switch keeps its default.
let wallpaperSwitches = {}
try { wallpaperSwitches = JSON.parse(localStorage.getItem('wallpaperEnabled') || '{}') || {} } catch {}
const isOn = (item) => (item.id in wallpaperSwitches ? Boolean(wallpaperSwitches[item.id]) : item.on)
const findWallpaper = (id) => wallpapers.find((item) => item.id === id) || null
const labelOf = (item) => t[item.name]
const paintOf = (item) => `url("${item.src}")`
let wallpaperChoice = 'photo'
let wallpaperOn = true

const applyWallpaper = (choice) => {
  const item = findWallpaper(choice)
  wallpaper.style.backgroundImage = item ? paintOf(item) : ''
  wallpaperThumb.style.backgroundImage = item ? `url("${item.thumb}")` : ''
  root.toggleAttribute('data-wallpaper-on', Boolean(item))
  wallpaperToggle.setAttribute('aria-pressed', String(Boolean(item)))
  wallpaperToggle.title = t.wallNext
  wallpaperToggle.setAttribute('aria-label', `${t.wallpaperToggle}: ${item ? labelOf(item) : t.wallNone}`)
  wallpaperOn = Boolean(item)
}
// A saved choice is a wallpaper id or 'none'; the old 'on' and 'off' still mean the photo and none.
try {
  const saved = localStorage.getItem('wallpaper')
  if (saved === 'off') wallpaperChoice = 'none'
  else if (saved === 'on') wallpaperChoice = 'photo'
  else if (saved) wallpaperChoice = saved
} catch {}
if (wallpaperChoice !== 'none' && !(findWallpaper(wallpaperChoice) && isOn(findWallpaper(wallpaperChoice)))) wallpaperChoice = 'none'
applyWallpaper(wallpaperChoice)

const setWallpaper = (choice) => {
  wallpaperChoice = choice
  applyWallpaper(choice)
  writeKey('wallpaper', choice)
  settingsFields.wallpaper.checked = wallpaperOn
}
// Each press goes to the next one switched on, and then back to none.
const nextChoice = () => {
  const order = ['none', ...wallpapers.filter(isOn).map((item) => item.id)]
  return order[(order.indexOf(wallpaperChoice) + 1) % order.length]
}
wallpaperToggle.addEventListener('click', () => setWallpaper(nextChoice()))

// The list in Data beheren: a swatch, the name and a switch for each wallpaper.
const wallpaperList = document.getElementById('wallpaper-list')
const renderWallpapers = () => {
  wallpaperList.replaceChildren(...wallpapers.map((item) => {
    const row = el('div', 'wallpaper-row')
    const swatch = el('span', 'wallpaper-swatch')
    swatch.style.backgroundImage = `url("${item.thumb}")`
    // The bigger preview shows on hover; it is set here so the image loads only when the row is in use.
    swatch.style.setProperty('--preview', `url("${item.src}")`)
    const box = Object.assign(document.createElement('input'), { type: 'checkbox', checked: isOn(item) })
    box.dataset.wallpaper = item.id
    const switchLabel = el('label', 'wallpaper-switch')
    switchLabel.append(box, ` ${t.wallOn}`)
    const names = el('div', 'wallpaper-names')
    names.append(el('span', 'wallpaper-name', labelOf(item)))
    const credit = el('a', 'wallpaper-credit', `${t.wallBy} ${item.by.name}`)
    Object.assign(credit, { href: item.by.url, target: '_blank', rel: 'noopener' })
    names.append(credit)
    row.append(swatch, names, switchLabel)
    return row
  }))
}
wallpaperList.addEventListener('change', (e) => {
  const id = e.target.dataset.wallpaper
  if (!id) return
  wallpaperSwitches[id] = e.target.checked
  writeKey('wallpaperEnabled', JSON.stringify(wallpaperSwitches))
  if (!e.target.checked && wallpaperChoice === id) setWallpaper('none')
})

// The wallpaper button itself can be hidden in settings; the wallpaper keeps its last state.
let wallpaperButtonOn = true
try {
  const saved = localStorage.getItem('wallpaperButton')
  if (saved) wallpaperButtonOn = saved === 'on'
} catch {}
wallpaperToggle.hidden = !wallpaperButtonOn

// Background tint: a hue from the slider; zero keeps the neutral monochrome look.
const hueSlider = document.getElementById('hue')

// The colour button can be hidden in settings: the background is then neutral, and the button is hidden.
let tintOn = readFlag('tint', true)
// The slider's middle (180) is the neutral background; the ends are the colours. Storage keeps the colour
// hue, so the middle is hue 0 and the slider value is the hue turned by 180 degrees.
const hueOf = (slider) => (Number(slider) + 180) % 360
const sliderOf = (hue) => (Number(hue) + 180) % 360
const applyHue = (value) => {
  const slider = Number(value)
  const hue = hueOf(slider)
  const neutral = slider === 180
  hueSlider.value = slider
  hueSlider.hidden = !tintOn
  tintCycle.hidden = !tintOn
  const colour = !neutral && tintOn ? `hsl(${hue} 40% 55%)` : 'var(--color-fg-2)'
  tintCycle.style.setProperty('--dot', colour)
  tintCycle.style.setProperty('--swatch', colour)
  if (!neutral && tintOn) {
    root.dataset.tint = ''
    root.style.setProperty('--hue', hue)
  } else {
    delete root.dataset.tint
    root.style.removeProperty('--hue')
  }
}

try { applyHue(sliderOf(localStorage.getItem('hue') || 0)) } catch { applyHue(180) }
// One step to the next colour; the page button and the Advanced button both do this.
const nextColour = () => {
  const index = Math.max(TINT_STEPS.indexOf(hueOf(hueSlider.value)), 0)
  const next = TINT_STEPS[(index + 1) % TINT_STEPS.length]
  applyHue(sliderOf(next))
  try { localStorage.setItem('hue', String(next)) } catch {}
}
tintCycle.addEventListener('click', nextColour)

// Settings: the tint on or off. The chosen hue is kept for when it is switched back on.
settingsFields.tint.addEventListener('change', () => {
  tintOn = settingsFields.tint.checked
  writeKey('tint', tintOn ? 'on' : 'off')
  applyHue(hueSlider.value)
})

hueSlider.addEventListener('input', () => {
  applyHue(hueSlider.value)
  try { localStorage.setItem('hue', String(hueOf(hueSlider.value))) } catch {}
})

// A one-time hint for a first visit: it points to the settings, and only shows while nothing is stored yet.
// It goes for good on the first click, the first ? key, or when the settings open.
const firstHint = document.getElementById('first-hint')
const hideFirstHint = () => {
  if (firstHint.hidden) return
  firstHint.hidden = true
  try { localStorage.setItem('hintSeen', '1') } catch {}
}
const isFirstVisit = () => {
  try {
    if (localStorage.getItem('hintSeen')) return false
    return Object.keys(localStorage).every((key) => key === 'lang')
  } catch { return false }
}
if (isFirstVisit()) firstHint.hidden = false
document.getElementById('first-hint-close').addEventListener('click', hideFirstHint)
document.addEventListener('click', hideFirstHint)
document.addEventListener('keydown', (e) => { if (e.key === '?') hideFirstHint() })

// The quick start: opened from the first-visit card, the basic settings or Help. Closing it counts as seen.
const quickstart = document.getElementById('quickstart')
const openQuickstart = (event) => {
  if (event) event.preventDefault()
  hideFirstHint()
  quickstart.hidden = false
  quickstart.querySelector('.settings-panel').focus()
}
const closeQuickstart = () => {
  if (quickstart.hidden) return
  quickstart.hidden = true
  try { localStorage.setItem('hintSeen', '1') } catch {}
}
document.getElementById('first-hint-quick').addEventListener('click', openQuickstart)
document.getElementById('quickstart-open').addEventListener('click', openQuickstart)
document.getElementById('help-quickstart').addEventListener('click', openQuickstart)
document.getElementById('quickstart-close').addEventListener('click', closeQuickstart)
document.getElementById('quickstart-done').addEventListener('click', closeQuickstart)
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeQuickstart() })
