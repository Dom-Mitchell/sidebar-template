import './style.css'

// Need to change into something...
const themeMap: any = {
  dark: 'light',
  light: 'solar',
  solar: 'dark',
}

const newLocal = localStorage.getItem('theme')

if (newLocal) {
  console.log(newLocal)
} else {
  localStorage.setItem('theme', themeMap['solar'])

  console.log(localStorage.getItem('theme'))
}

// Works Mostly
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

// Got this to work
document.getElementById('themeButton')!.onclick = toggleTheme

// import './style.css'

// // Need to change into something...
// const themeMap: any = {
//   dark: 'light',
//   light: 'solar',
//   solar: 'dark',
// }

// // Juan Carlos Espinoza's Solution
// // const themeMap: { [key: string]: string } = {
// //   dark: 'light',
// //   light: 'solar',
// //   solar: 'dark',
// // }

// // const theme = localStorage.getItem('theme')
// // const bodyClass = document.body.classList
// // if (theme != null) {
// //   bodyClass.add(theme)
// // }

// // function toggleTheme() {
// //   const current = localStorage.getItem('theme')
// //   if (current != null) {
// //     const next = themeMap[current]

// //     bodyClass.replace(current, next)
// //     localStorage.setItem('theme', next)
// //   }
// // }

// // const themButtonElement = document.getElementById('themeButton')
// // if (themButtonElement != null) {
// //   themButtonElement.onclick = toggleTheme
// // }

// // Why do neither of these work!!??
// // let tmp
// // const theme =
// //   localStorage.getItem('theme') ||
// //   ((tmp = Object.keys(themeMap)[0]), localStorage.setItem('theme', tmp), tmp)
// // const bodyClass = document.body.classList
// // bodyClass.add(theme)

// // function toggleTheme() {
// //   const current = localStorage.getItem('theme') as string
// //   const next = themeMap[current]

// //   bodyClass.replace(current, next)
// //   localStorage.setItem('theme', next)
// // }

// // Works Mostly
// const theme = localStorage.getItem('theme')
// const bodyClass = document.body.classList
// theme && bodyClass.add(theme)

// if ((localStorage.getItem('theme') as string) == undefined || null) {
//   localStorage.setItem('theme', themeMap['light'])

//   console.log(localStorage.getItem('theme'))
// } else {
//   console.log(localStorage.getItem('theme'))
// }

// // Change the theme on a button click
// function toggleTheme() {
//   const current = localStorage.getItem('theme') as string
//   const next = themeMap[current]

//   bodyClass.replace(current, next)
//   localStorage.setItem('theme', next)
// }

// // Test Case that failed
// // const test = document.getElementById('themeButton')
// // if (test) {
// //   test.onclick = toggleTheme
// // }

// // Got this to work
// document.getElementById('themeButton')!.onclick = toggleTheme
