//<![CDATA[
class Token {

    constructor(tokenInstance) {
        this.props = tokenInstance;
    }

    setup() {
        window.onConfirm = function() {
            let objectToSign = {};
            objectToSign.name = document.getElementById("userName").innerText;
            objectToSign.email = document.getElementById("email").innerText;
            objectToSign.time = document.getElementById("preferredTime").innerText;
            let that = this;
            web3.personal.sign({ data: objectToSign }, function(err, data) {
                if(err) {
                    document.getElementById("status").innerText = "Error " + err;
                } else {
                    that.sendSignedDataToServer(data);
                }
                //if user clicks again, make them go back
                window.onConfirm = function() {
                    window.close();
                }
            })
        }
    }

    sendSignedDataToServer(signedData) {
        //TODO
    }

    render() {
        return`
        <div class="ui container">
          <div class="ui segment">
          <img src="data:image/jpeg;base64,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">
          <span><bold><h3>Book a time with <strong>${this.props.name}</strong></h3></bold></span>
          <input id="userName" placeholder="your name">
          <input id="email" placeholder="your email">
          <input id="preferedTime" type="date" placeholder="Preferred time">
          <p id="status"></p>
          </div>
        </div>`;
    }
}

web3.tokens.dataChanged = (oldTokens, updatedTokens, tokenCardId) => {
    const currentTokenInstance = updatedTokens.currentInstance;
    let token = new Token(currentTokenInstance);
    document.getElementById(tokenCardId).innerHTML = token.render();
    token.setup();
};

//]]>
