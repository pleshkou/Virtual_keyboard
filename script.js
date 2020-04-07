
let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.prepend(keyboard);

let input = document.createElement('textarea');
input.className = 'input';
input.wrap = 'soft';
input.cols = 55;
input.rows = 7;
document.body.prepend(input);
document.querySelector('.input').focus();


let keys = document.createElement('div');
keys.className = 'keyboard__keys';
keyboard.append(keys);

let info = document.createElement('p');
info.innerHTML = 'Клавиатура создана в операционной системе Linux.<br>Для переключения языка комбинация: левыe ctrl + shift.'
document.body.append(info);

const arrCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "IntlBackslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "OSLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"];
const breakPoints = ["Backspace", "Delete", "Enter", "ShiftRight", "ArrowRight"];
const doubleWidth = ["Backspace", "CapsLock", "Enter", "ShiftLeft"];
const wide = ["ControlLeft", "ControlRight", "Tab"];


localStorage.reg = localStorage.reg || '0';
let point = 0;


const bs = 'BackSp';
const tab = 'Tab';
const del = 'Del';
const caps = 'C.Lock';
const ent = 'Enter';
const shift = 'Shift';
const upAr = '▲';
const dnAr = '▼';
const lfAr = '◀';
const rhAr = '▶';



let rows = [['`', '~', 'ё', 'Ё'], ['1', '!', '1', '!'], ['2', '@', '2', '"'], ['3', '#', '3', '№'],
            ['4', '$', '4', ';'], ['5', '%', '5', '%'], ['6', '^', '6', ':'], ['7', '&', '7', '?'],
            ['8', '*', '8', '*'], ['9', '(', '9', '('], ['0', ')', '0', ')'], ['-', '_', '-', '_'], 
            ['=', '+', '=', '+'], [bs, bs, bs, bs], [tab, tab, tab, tab], ['q', 'Q', 'й', 'Й'], 
            ['w', 'W', 'ц', 'Ц'], ['e', 'E', 'у', 'У'], ['r', 'R', 'к', 'К'], ['t', 'T', 'е', 'Е'], 
            ['y', 'Y', 'н', 'Н'], ['u', 'U', 'г', 'Г'], ['i', 'I', 'ш', 'Ш'], ['o', 'O', 'щ', 'Щ'], 
            ['p', 'P', 'з', 'З'], ['[', '{', 'х', 'Х'], [']', '}', 'ъ', 'Ъ'], ['\\', '|', '\\', '/'], 
            [del, del, del, del], [caps, caps, caps, caps], ['a', 'A', 'ф', 'Ф'], ['s', 'S', 'ы', 'Ы'], 
            ['d', 'D', 'в', 'В'], ['f', 'F', 'а', 'А'], ['g', 'G', 'п', 'П'], ['h', 'H', 'р', 'Р'], 
            ['j', 'J', 'о', 'О'], ['k', 'K', 'л', 'Л'], ['l', 'L', 'д', 'Д'], [';', ':', 'ж', 'Ж'], 
            ["'", '"', 'э', 'Э'], [ent, ent, ent, ent], [shift, shift, shift, shift], ['\\', '|', '\\', '/'], 
            ['z', 'Z', 'я', 'Я'], ['x', 'X', 'ч', 'Ч'], ['c', 'C', 'с', 'С'], ['v', 'V', 'м', 'М'], 
            ['b', 'B', 'и', 'И'], ['n', 'N', 'т', 'Т'], ['m', 'M', 'ь', 'Ь'], [',', '<', 'б', 'Б'], 
            ['.', '>', 'ю', 'Ю'], ['/', '?', '.', ','], [upAr, upAr, upAr, upAr], [shift, shift, shift, shift], 
            ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 'Win', 'Win', 'Win'], ['Alt', 'Alt', 'Alt', 'Alt'], [' ', ' ', ' ', ' '], 
            ['Alt', 'Alt', 'Alt', 'Alt'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], [lfAr, lfAr, lfAr, lfAr], [dnAr, dnAr, dnAr, dnAr], [rhAr, rhAr, rhAr, rhAr] 
];

for (let i = 0; i < 65; i++) {addButton(i)};

function addButton(i) {
  let button = document.createElement('button');
  button.nodeType = 'button';
  button.classList.add('keyboard__key');
  if (doubleWidth.includes(arrCode[i])) {button.classList.add('keyboard_double')};
  if (wide.includes(arrCode[i])) {button.classList.add('keyboard_wide')};
  if (arrCode[i] == "Space") {button.classList.add('keyboard_space')};
  button.id = arrCode[i]; // "Backquote"
  button.value = rows[i].join('~*'); // "'`'~*'~'~*'ё'~*'Ё'"
  button.reg = localStorage.reg;
  button.innerHTML = button.value.split('~*')[button.reg];
  keys.append(button);
  if (breakPoints.includes(arrCode[i])) {addBreak()};
}

function addBreak() {
  let lineBreak = document.createElement('div');
  lineBreak.className = 'break';
  keys.append(lineBreak);
}

const ALLKEYS = document.querySelectorAll('.keyboard__key');

// Подсветка вирт. клавиш при нажатии реальных
document.addEventListener('keydown', event => {
  ALLKEYS.forEach(i => {
    if (i.id == event.code && i.id != 'CapsLock') {i.classList.add('keyboard_active')}
  })
})

//При отпускании подсветка убирается
document.addEventListener('keyup', event => {
  ALLKEYS.forEach(i => {
    if (i.id == event.code && i.id != 'CapsLock') {i.classList.remove('keyboard_active')}
  })
})


// Нажатие shift на физ. клаве изменяет вирт. клаву
document.addEventListener('keydown', event => {
  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
    ALLKEYS.forEach(i => {
      i.reg = [1, 0, 3, 2][+localStorage.reg];
      i.innerHTML = i.value.split('~*')[i.reg];
    })
  }
})

// Отпускаем shift
document.addEventListener('keyup', event => {
  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
    ALLKEYS.forEach(i => {
      i.reg = localStorage.reg;
      i.innerHTML = i.value.split('~*')[i.reg];
    })
  }
})

// CapsLock на физ. клаве
document.addEventListener('keydown', event => {
  if (event.code == 'CapsLock') {
    document.getElementById('CapsLock').classList.toggle('keyboard_active');
    ALLKEYS.forEach(i => {
      localStorage.reg = [1, 0, 3, 2][+localStorage.reg];
      i.reg = [1, 0, 3, 2][i.reg];
      i.innerHTML = i.value.split('~*')[i.reg];
    })
  }
})



// Переключение рус/англ по левым Ctrl+Shift на физ. клаве
document.addEventListener('keydown', event => {
  if (event.code == 'ShiftLeft' && document.getElementById('ControlLeft').classList.value.includes('keyboard_active') ||
      event.code == 'ControlLeft' && document.getElementById('ShiftLeft').classList.value.includes('keyboard_active')) {
        localStorage.reg = [2, 3, 0, 1][+localStorage.reg];
  }
})

//Жмем на вирт. клаву  и подсвечиваем
document.querySelector('.keyboard__keys').addEventListener('mousedown', el => {
  input.focus();
  if (el.target.id == 'Backspace') {
    point = getCursorPosition(input);
    if (point) {input.value = input.value.slice(0, point-1) + input.value.slice(point)};
    setCursorPosition(input, point);
    el.target.classList.add('keyboard_active');
  } else if (el.target.id == 'Delete') {
    point = getCursorPosition(input);
    input.value = input.value.slice(0, point) + input.value.slice(point+1);
    setCursorPosition(input, point+1);
    el.target.classList.add('keyboard_active');
  } else if (el.target.id == 'ArrowLeft') {
      point = getCursorPosition(input);
      setCursorPosition(input, point);
      el.target.classList.add('keyboard_active');
  } else if (el.target.id == 'ArrowRight') {
      point = getCursorPosition(input);
      setCursorPosition(input, point+2);
      el.target.classList.add('keyboard_active');
  } else if (el.target.id == 'ArrowUp') {
      point = getCursorPosition(input);
      if (point > input.cols -2) {
        point -= (input.cols-2);
        setCursorPosition(input, point);
        el.target.classList.add('keyboard_active');
      };
  } else if (el.target.id == 'ArrowDown') {
      point = getCursorPosition(input);
      point += (input.cols+0);
      setCursorPosition(input, point);
      el.target.classList.add('keyboard_active');
  } else if (el.target.id == 'Tab') {
      point = getCursorPosition(input);
      point += 3;
      setCursorPosition(input, point);
      el.target.classList.add('keyboard_active');
  } else if (el.target.id == 'Enter') {
      point = getCursorPosition(input);
      input.value = input.value.slice(0, point) + '\n' + input.value.slice(point);
      setCursorPosition(input, point + 2);
      el.target.classList.add('keyboard_active');
  } else if (el.target.id != 'CapsLock' && el.target.classList.contains('keyboard__key')) {
      el.target.classList.add('keyboard_active');
      input.value += el.target.innerHTML == '&amp;' ? '&' : '';
      input.value += el.target.innerHTML == '&lt;' ? '<' : '';
      input.value += el.target.innerHTML == '&gt;' ? '>' : '';
      input.value += el.target.innerHTML.length == 1 ? el.target.innerHTML : '';
    };
});

// Убираем подсветку при отпускании клавиши мыши
document.querySelector('.keyboard__keys').addEventListener('mouseup', el =>{
  input.focus();
  if (el.target.id != 'CapsLock') {
    ALLKEYS.forEach(i => {
      if (i.id == el.target.id) {i.classList.remove('keyboard_active')}
    })
  }
})

document.querySelector('.keyboard__keys').addEventListener('mousedown', el =>{
  input.focus();
  if (el.target.id == 'ShiftLeft' || el.target.id == 'ShiftRight') {
    ALLKEYS.forEach(i => {
      i.reg = [1, 0, 3, 2][+localStorage.reg];
      i.innerHTML = i.value.split('~*')[i.reg];
    })
  }
})
    // Отпускаем shift
document.querySelector('.keyboard__keys').addEventListener('mouseup', el =>{
  input.focus();
  if (el.target.id == 'ShiftLeft' || el.target.id == 'ShiftRight') {
    ALLKEYS.forEach(i => {
      i.reg = localStorage.reg;
      i.innerHTML = i.value.split('~*')[i.reg];
    })
  }
})


// CapsLock на вирт. клаве
document.querySelector('.keyboard__keys').addEventListener('mousedown', el => {
  console.log(el.target.id);
  if (el.target.id == 'CapsLock') {
    document.getElementById('CapsLock').classList.toggle('keyboard_active');
    localStorage.reg = [1, 0, 3, 2][+localStorage.reg];
    ALLKEYS.forEach(i => {
      i.reg = [1, 0, 3, 2][i.reg];
      i.innerHTML = i.value.split('~*')[i.reg];
    })
  }
})


function getCursorPosition(ctrl) {
    let CaretPos = 0;
    if ( document.selection ) {
        ctrl.focus ();
        let Sel = document.selection.createRange();
        Sel.moveStart ('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    } else if ( ctrl.selectionStart || ctrl.selectionStart == '0' ) {
        CaretPos = ctrl.selectionStart;
    }
    return CaretPos;
}

function setCursorPosition(input, pos) {
  if (pos) {input.selectionStart = input.selectionEnd = pos - 1};
}