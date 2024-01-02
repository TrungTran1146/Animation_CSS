
document.addEventListener('DOMContentLoaded', () => {

    const valueElm = document.querySelector('.value');
    document.addEventListener('scroll', () => {

        const scrollTop = document.body.scrollTop || document.scrollingElement.scrollTop;
        const scrollHeight = document.scrollingElement.scrollHeight;
        const clientHeight = document.scrollingElement.clientHeight;

        const percentage = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100)
        valueElm.style.width = percentage + "%";
        console.log(percentage);
    });
});


