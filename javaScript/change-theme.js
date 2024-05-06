// document.getElementById('darkTheme').addEventListener('click', toggleDarkTheme);
// document.getElementById('lightTheme').addEventListener('click', toggleLightTheme);
// // Функция для переключения на темную тему
// function toggleDarkTheme() {
//   document.documentElement.style.setProperty('--body-color', '#000');
//   document.documentElement.style.setProperty('--text-color', '#fff');
//   document.documentElement.style.setProperty('--hover-color', '#fff');
// }

// // Функция для переключения на светлую тему
// function toggleLightTheme() {
//   document.documentElement.style.setProperty('--body-color', '#fff');
//   document.documentElement.style.setProperty('--text-color', '#000');
//   document.documentElement.style.setProperty('--hover-color', '#000');
// }
// const toChange=(isCheched)=>
// {
//   if(toChange)
//   {
//     document.body.setAttribute('dark','');
//   }
//   else{
//     document.body.removeAttribute('dark')
//   }
// }
function setDarkTheme() {
  document.body.setAttribute('dark', '');
}

function setLightTheme() {
  document.body.removeAttribute('dark');
}

document.getElementById('darkTheme').addEventListener('click', setDarkTheme);
document.getElementById('lightTheme').addEventListener('click', setLightTheme);