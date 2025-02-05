import { RootState } from "./store";

export const selectGameStatus = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.gameStatus;
    } else return undefined
}

export const selectDeck = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.deck;
    } else return undefined
}

export const selectCurrentCard = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.currentCard;
    } else return undefined
}

export const selectCurrentPlayer = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.currentPlayer;
    } else return undefined
}

export const selectRequirements = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.requirements;
    } else return undefined
}

export const selectModal = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.modalIsOpen;
    } else return undefined
}

export const selectHands = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.hands;
    } else return undefined
}

export const selectPlayerHand = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.hands[0]
    } else return undefined
}


export const selectCardsFlow = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow;
    } else return undefined
};

export const selectWinner = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.winner;
    } else return undefined 
};

export const selectPlayersNumber = (state: RootState) => {
    if (state.cardsFlow !== 'idle') {
        return state.cardsFlow.playersNumber;
    } else return undefined 
};

