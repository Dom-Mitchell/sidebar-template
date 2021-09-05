import './style.css'

// Need to change into
const themeMap: any = {
  dark: 'light',
  light: 'solar',
  solar: 'dark',
}

const theme = localStorage.getItem('theme')
const bodyClass = document.body.classList
theme && bodyClass.add(theme)

// Change the theme on a button click
function toggleTheme() {
  const current = localStorage.getItem('theme') as string
  const next = themeMap[current]

  bodyClass.replace(current, next)
  localStorage.setItem('theme', next)
}

document.getElementById('themeButton').onclick = toggleTheme
