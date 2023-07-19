// Прокрутка при клике
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        /* if(burger.classList.contains('active')) {
            document.body.classList.remove('no-scroll');
            button.classList.remove('active');
            menu.classList.remove('active');
        } */

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


// Кнопка "читать далее"
const textElement = document.querySelector('#text-about')
const textBtn = document.querySelector('#button')

textBtn.onclick = function() {
    textElement.innerHTML = `
        <p class="about__text">За последний год я проделал большую работу в области фронт-энд разработки. Я разрабатываю веб-страницы, уделяя особое внимание их адаптивности, чтобы они хорошо выглядели и функционировали на любых устройствах - будь то на компьютере, планшете или смартфоне.</p>
        <p class="about__text">На протяжении своей карьеры я приобрел обширные знания в области HTML, CSS и JavaScript, включая использование современных фреймворков и библиотек, таких как React и Vue.js. Я также разрабатываю административные панели, которые позволяют клиентам управлять содержимым своих веб-сайтов.</p>
        <p class="about__text">Я предоставляю своим клиентам полный цикл разработки веб-сайтов - от концепции и дизайна до разработки и развертывания. Я готов работать как с частными клиентами, так и с компаниями, помогая им создать уникальные и привлекательные онлайн-проекты.</p>
        <p class="about__text">На моем портфолио вы найдете примеры моих работ и ознакомитесь с полным списком технологий, с которыми я работаю. Я всегда открыт для новых вызовов и готов сотрудничать с вами над вашим следующим проектом.</p>
    `
    textBtn.style.display = 'none'
}

// Modal //
const modalCall = document.querySelector("#modal")
const modalBtn = document.querySelector("#modal-btn")
const modalId = document.querySelector("#modal__dialog")
const modalClose = document.querySelector("#modal__close")

modalBtn.onclick = function() {
    modalCall.classList.add('show')
    body.classList.add('no-scroll')

    setTimeout(function() {
        modalId.style.transform = 'scale(1)'
    },200)
}

modalClose.onclick = function() {
    modalId.style.transform = 'scale(0)'
    
    setTimeout(function() {
        modalCall.classList.remove('show')
        body.classList.remove('no-scroll')
    },200)
}


// Burger //
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;

document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('nav--visible');
  });
});


