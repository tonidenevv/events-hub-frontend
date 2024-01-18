const shouldHideOverflow = (shouldHide) => {
    if (shouldHide) return document.body.classList.add('overflow-hidden');

    return document.body.classList.remove('overflow-hidden');
}

export default shouldHideOverflow;