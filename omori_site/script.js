const gallery = [
    {
        image: 'img/pic1.webp',
        description: "МАРИ учит нас всех плести цветочные венки! ОМОРИ и КЕЛ держат тот, который МАРИ сделала для примера. Он вышел таким красивым..."
    },
    {
        image: 'img/pic2.webp',
        description: "ОМОРИ и КЕЛУ надоело делать венки и они куда-то убежали, а вот мы с ОБРИ очень быстро этому научились."
    },
    {
        image: 'img/pic3.webp',
        description: "ХИРО всё ещё доделывает свой венок. Ему понадобится ещё время, но он потихоньку справляется. Его упорство заслуживает уважения."
    },
    {
        image: 'img/pic4.webp',
        description: "Мы все кушаем арбузы. Такие сочные! У ОБРИ осталось несколько косточек на лице. Надо бы ей об этом сказать."
    },
    {
        image: 'img/pic5.webp',
        description: "КЕЛ пьёт молоко, его любимое! Я не буду к нему приближаться, а то он может забрызгать мою камеру."
    },
    {
        image: 'img/pic6.webp',
        description: "МАРИ попросила ХИРО сфотографировать нас. Все считают, что этот венок мне очень идёт."
    },
    {
        image: 'img/pic7.webp',
        description: "ХИРО наклонился для поцелуйчика! Похоже, КЕЛУ это не понравилось. Ах, братская любовь..."
    },
    {
        image: 'img/pic8.webp',
        description: "Сегодня мы устроили пикник! МАРИ решила всех сфотографировать. Скажите 'сыр'!"
    },
    {
        image: 'img/pic9.webp',
        description: "После еды уснули все, кроме ХИРО и МАРИ. Я тоже начинаю засыпать."
    },
    {
        image: 'img/pic10.webp',
        description: "КЕЛ говорит, что сфотографировал себя случайно, но мне в это слабо верится..."
    },
    {
        image: 'img/pic11.webp',
        description: "Кружок из наших ног! Сможете угадать, где чьи?"
    },
    {
        image: 'img/pic12.webp',
        description: "-"
    },
    {
        image: 'img/pic13.webp',
        description: "Мои лучшие друзья... КЕЛ, ОБРИ, ХИРО и ОМОРИ! Я всегда буду ими дорожить."
    },
    {
        image: 'img/pic14.webp',
        description: "Сегодня все помогали мне поливать мои растения! Обычно я слишком много говорю, когда речь заходит о растениях, так что я рад, что друзья меня выслушали."
    },
    {
        image: 'img/pic15.webp',
        description: "Мы нашли на СВАЛКЕ старый диван! На нём хватает места только для четверых, но я не возражаю. У меня и так самый лучший вид во всём мире!"
    },
    {
        image: 'img/pic16.webp',
        description: "Неожиданно для всех с дерева свалился паучок! ХИРО слишком НАПУГАН, чтобы на него смотреть."
    },
    {
        image: 'img/pic17.webp',
        description: "О, боже! О, боже! Нам посчастливилось раздобыть пять билетов на шоу 'ДУШЕЧКА В ПОИСКАХ СЕРДЕЦ'! Надеюсь, там не случится ничего неожиданного..."
    },
    {
        image: 'img/pic18.webp',
        description: "Мы в ПОСЛЕДНЕМ ШАНСЕ! КЕЛ продолжает проигрывать в автоматы. Ему бы научиться вовремя останавливаться."
    },
    {
        image: 'img/pic19.webp',
        description: "Зашли перекусить в ГОРЧИЧНУЮ ПОДЛОДКУ! КОМБО БЛЮДО - каждому!"
    },
    ]


let current_index = 0;

function showImage(index) {
    const photo = gallery[index];
    const img = document.getElementById("photo");
    const desc = document.getElementById("description");
    
    img.classList.remove('fade-in');

    img.src = photo.image;
    desc.textContent = photo.description;

    void img.offsetWidth;
    img.classList.add('fade-in');
}

function nextImage() {
    if (current_index === gallery.length - 1) {
        current_index = 0;
    } else {
        current_index++
    }
    showImage(current_index);
}

function prevImage() {
    if (current_index === 0) {
        current_index = gallery.length - 1;
    } else {
        current_index = current_index - 1
    }
    showImage(current_index);
}

window.onload = () => {
    showImage(current_index);
};