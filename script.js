let score = JSON.parse(localStorage.getItem('score'));
        //if score is null, we can't get values from local storage.
        // that's why score initialize by zero.
        if(score === null){
            score = {
                wins : 0,
                losses : 0,
                ties : 0
            };
        }
        //displaying scores with wins, losses, ties.
        updateScoreElement();

        //picking player moves, compare it with computer moves
        //and store the result into local storage by converting the scores into string.
        function playGame(playerMove) {
            const computerMove = pickComputerMove();

            let result = ``;
            if (playerMove === `paper`) {

                if (computerMove === `rock`) {
                    result = `You win`;
                }
                else if (computerMove === `paper`) {
                    result = `Tie`;
                }
                else if (computerMove === `scissors`) {
                    result = `You Lose`;
                }
            }
            else if (playerMove === `rock`) {
                if (computerMove === `rock`) {
                    result = `Tie`;
                }
                else if (computerMove === `paper`) {
                    result = `You Lose`;
                }
                else if (computerMove === `scissors`) {
                    result = `You win`;
                }

            }
            else if (playerMove === `scissors`) {
                if (computerMove === `rock`) {
                    result = `You Lose`;
                }
                else if (computerMove === `paper`) {
                    result = `You win`;
                }
                else if (computerMove === `scissors`) {
                    result = `Tie`;
                }
            }
            
            if(result === 'You Lose'){
                score.losses += 1;
            } else if(result === 'You win'){
                score.wins += 1;
            } else if(result === 'Tie'){
                score.ties += 1;
            }
            //stringify convert the score values which are in number into string
            //localstorage stores only strings.
            localStorage.setItem('score', JSON.stringify(score));
            //updating the scores.
            updateScoreElement();
            //storing result into (js-result) class element.
            document.querySelector('.js-result').innerHTML = result;
            // document.querySelector('#js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;

            //storing emojis according to computer, player moves.
            let computerEmoji = '';
            let playerEmoji = '';
            switch(computerMove){
                case 'rock' : computerEmoji = '✊';
                            break;
                case 'paper' : computerEmoji = '🖐️';
                            break;
                case 'scissors' : computerEmoji = '✌️';
            }
            switch(playerMove){
                case 'rock' : playerEmoji = '✊';
                            break;
                case 'paper' : playerEmoji = '🖐️';
                            break;
                case 'scissors' : playerEmoji = '✌️';
            }
            //displaying the picked moves in (js-moves) id element.
            document.querySelector('#js-moves').innerHTML = `You ${playerEmoji} - ${computerEmoji} Computer`;
        }

        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        //computer moves
        function pickComputerMove() {
            const randomNumber = Math.random();
            let computerMove = ``;
            // let computerEmoji =``;
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = `rock`;
                // computerEmoji = `✊`;
            }
            else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = `paper`;
                // computerEmoji = `🖐️`;
            }
            else if (randomNumber >= 2 / 3 && randomNumber < 3) {
                computerMove = `scissors`;
                // computerEmoji = `✌️`;
            }
            return computerMove;
            // return computerEmoji;
        }