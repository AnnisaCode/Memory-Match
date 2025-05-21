document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        { name: 'fries', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/french-fries-1238246_1280.jpg' },
        { name: 'cheeseburger', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/cheeseburger-1238248_1280.jpg' },
        { name: 'hotdog', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hotdog-1238247_1280.jpg' },
        { name: 'ice-cream', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/ice-cream-1238250_1280.jpg' },
        { name: 'milkshake', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/milkshake-1238251_1280.jpg' },
        { name: 'pizza', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/pizza-1238252_1280.jpg' },
        { name: 'fries', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/french-fries-1238246_1280.jpg' },
        { name: 'cheeseburger', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/cheeseburger-1238248_1280.jpg' },
        { name: 'hotdog', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hotdog-1238247_1280.jpg' },
        { name: 'ice-cream', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/ice-cream-1238250_1280.jpg' },
        { name: 'milkshake', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/milkshake-1238251_1280.jpg' },
        { name: 'pizza', img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/pizza-1238252_1280.jpg' }
    ];

    const gameBoard = document.getElementById('game-board');
    const winMessage = document.getElementById('win-message');
    let hasFlippedCard = false;
    let firstCard, secondCard;
    let lockBoard = false;
    let matchedPairs = 0;

    function shuffle() {
        cardsArray.sort(() => 0.5 - Math.random());
    }

    function createCard(item) {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.name = item.name;

        const frontImg = document.createElement('img');
        frontImg.className = 'front';
        frontImg.src = item.img;
        frontImg.alt = item.name;
        frontImg.setAttribute('draggable', 'false');

        const backImg = document.createElement('img');
        backImg.className = 'back';
        backImg.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
        backImg.alt = 'Card Back';
        backImg.setAttribute('draggable', 'false');

        card.appendChild(frontImg);
        card.appendChild(backImg);
        card.addEventListener('click', flipCard);
        return card;
    }

    function createBoard() {
        gameBoard.innerHTML = '';
        shuffle();
        cardsArray.forEach(item => {
            const card = createCard(item);
            gameBoard.appendChild(card);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;

        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        matchedPairs++;

        if (matchedPairs === cardsArray.length / 2) {
            winMessage.classList.remove('d-none');
            winMessage.classList.add('show');
        }

        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function restartGame() {
        matchedPairs = 0;
        winMessage.classList.add('d-none');
        winMessage.classList.remove('show');
        createBoard();
    }

    // Tambahkan tombol restart
    const restartBtn = document.createElement('button');
    restartBtn.className = 'btn btn-primary mb-3 mx-auto d-block';
    restartBtn.textContent = 'Restart Game';
    restartBtn.setAttribute('aria-label', 'Restart Game');
    restartBtn.addEventListener('click', restartGame);
    document.querySelector('.container').insertBefore(restartBtn, gameBoard);

    createBoard();
});
