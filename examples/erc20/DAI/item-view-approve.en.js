//<![CDATA[
class Token {

    constructor(token, card) {
        this.token = token;
        this.card = card;
        this.time = this.formatTimeStamp(this.card.timestamp.date);
    }

    formatTimeStamp(time) {
        let a = new Date(time);
        let hours = a.getHours();
        let minutes = a.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    render() {
        return`
        <div>
            <div class="container">
                <div class="logo">
                    <img src="data:image/png;base64,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">
                </div>
                <div class="info">
                    DAI<br/>
                    <div class="time">${this.time}</div>
                </div>
                <div class="title">
                    Enabling <strong>Aave</strong>
                </div>
                <div class="subtitle">
                    to Aave
                </div>
            </div>
        </div>
`;
    }
}

web3.tokens.dataChanged = (oldTokens, updated, tokenIdCard) => {
    document.getElementById(tokenIdCard).innerHTML = new Token(updated.token, updated.card).render();
};
//]]>
