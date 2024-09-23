function rep(func, sec) {
    setTimeout(() => {
        document.body.replaceChild(func, document.querySelector('div') || document.querySelector('code'));
    }, sec * 1000);
}