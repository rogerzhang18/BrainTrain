/**
 PageNavigation.js
 description:    Controls the screen flow.
 authors:        Kabir Cahill, Kent Huang, Luke Lee, Eric Lin, Roger Zhang
 */

/**
 * Shows and hides HTML elements.
 * @param idShow the id of the element to show
 * @param idHide the id of the element to hide
 */
function showHide(idShow, idHide) {
    $(idHide).hide();
    $(idShow).show();
}

/**
 * Shows the between-level menu screen and progresses to the next level if the user was successful.
 * @param levelComplete
 */
function levelProgress(levelComplete) {
    if (levelComplete) {
        showHide('#level-screen', '#playContainer');
        level++;
        if (level % 5 == 0) {
            difficultyTier++;
            if (difficultyTier == 2){
                numberOfTrains++;
            }
        }
    } else {
        showHide('#level-screen-fail', '#playContainer');
    }
}

/**
 * Shows the game over screen.
 */
function gameOver(){
    showHide('#gameover','#playContainer')
}