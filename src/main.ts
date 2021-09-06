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

if (localStorage.getItem('theme') == undefined) {
  localStorage.setItem('theme', themeMap['light'])

  console.log(localStorage.getItem('theme'))
} else {
  console.log(localStorage.getItem('theme'))
}

// Change the theme on a button click
function toggleTheme() {
  const current = localStorage.getItem('theme') as string
  const next = themeMap[current]

  bodyClass.replace(current, next)
  localStorage.setItem('theme', next)
}

// const test = document.getElementById('themeButton')
// if (test) {
//   test.onclick = toggleTheme
// }

// Need to make this work still
document.getElementById('themeButton')!.onclick = toggleTheme
// console.log(localStorage.getItem('theme'))
