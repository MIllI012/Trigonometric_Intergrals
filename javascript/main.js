const current_color = {0 : 'dark', 1 : 'light'};
let set = 0;

window.addEventListener('auxclick', () => {
    if (Object.values(current_color)[set] === 'dark') {
        document.querySelector('body').style.backgroundColor = '#ddd';
        document.querySelector('body').style.color = '#1e1f22';
        document.querySelectorAll('b').forEach(b => {b.style.color = '#eaa000'})
        document.querySelectorAll('.squ').forEach(squ => {squ.style.backgroundColor = '#eaa000'})
        set++;
    }
    else {
        document.querySelector('body').style.backgroundColor = '#1e1f22';
        document.querySelector('body').style.color = '#ddd';
        document.querySelectorAll('b').forEach(b => {b.style.color = '#aaf'})
        document.querySelectorAll('.squ').forEach(squ => {squ.style.backgroundColor = '#aaf'})
        set--;
    }
})