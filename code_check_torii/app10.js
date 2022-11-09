const quiz = [
    {
        question: 'デザインの4原則「近接」「整列」「強弱」、残り1つは次の内どれ？',
        answers: [
            '集約',
            '反復',
            '余白',
            '点在'
        ],
        correct: '反復'
    },{
        question: 'UNIQLOのロゴを作成したデザイナーは誰か？',
        answers: [
            '佐藤卓',
            '佐藤オオキ',
            '佐藤可士和',
            '吉田ユニ'
        ],
        correct: '佐藤可士和'
    },{
        question: '表参道ヒルズの設計者は誰か？',
        answers: [
            '安藤 忠雄',
            '谷口 吉生',
            '隈 研吾',
            '丹下 健三'
        ],
        correct: '安藤 忠雄'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 問題文と解答をセットする
const setUpQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    for (let buttonIndex = 0; buttonIndex < buttonLength; buttonIndex++) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    }
}
setUpQuiz();

// 正誤判定＆次へ進む
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setUpQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

// クリックイベント
for (let handlerIndex = 0; handlerIndex < buttonLength; handlerIndex++) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
}