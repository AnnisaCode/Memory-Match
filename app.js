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

    function createBoard() {
        shuffle();
        cardsArray.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('memory-card');
            card.dataset.name = item.name;
            card.innerHTML = `
                <img class="front" src="${item.img}" alt="${item.name}">
                <img class="back" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="blank">
            `;
            card.addEventListener('click', flipCard);
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
        }

        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    createBoard();
});
