document.addEventListener('DOMContentLoaded', function () {
    const ta = new TweenTextAnimation('.tween-animate-title');
    ta.animate();
});


class TextAnimation {
    constructor(el) {
        this.DOM = {}; // 初期化。DOMはHTML解析後のオブジェクトである。
        this.DOM.el = document.querySelector(el); // div.tween-animate-titleを格納
        this.chars = this.DOM.el.innerHTML.trim().split(""); // テキストが1文字ずつ分割された文字だけが配列として格納されている
        // ↑this.charsに格納されるのは配列ですね。これはDOMから生成しているだけで、this.charsに格納された時点では配列に代わっているため、DOMではありません。.split("")を呼んだ時点でDOM→配列に変換されています。
        this.DOM.el.innerHTML = this._splitText(); // _splitText()で分割されたHTMLの記述が全て格納されている
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}

class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el); // superで継承元のconstructorの記述を継承
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
        // ↑this.DOM.charsには.charというクラスが付いているHTML要素を取得したものが格納されています。
    }
    
    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c ,i) => {
            gsap.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            });
        });
    }
}