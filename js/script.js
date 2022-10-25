const hamLeft = document.querySelector('.hamLeft');
const hamRight = document.querySelector('.hamRight');

hamLeft.addEventListener('click', function () {
    hamLeft.classList.add('hidden')
    hamRight.classList.remove('hidden')
})
hamRight.addEventListener('click', function () {
    hamLeft.classList.remove('hidden')
    hamRight.classList.add('hidden')
})