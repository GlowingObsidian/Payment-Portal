function cardspace(){
    var carddigit = document.getElementById('cardno').value;
    if(carddigit.length==4 || carddigit.length==9 || carddigit.length==14){
        document.getElementById('cardno').value=carddigit+'-'
        document.getElementById('cardno').max=1;
    }

    if(carddigit.length>=7){
        document.getElementById("cardicon").style.visibility= "visible";
        if(carddigit.charAt(0)==='3'){
            document.getElementById("cardicon").className = "fa fa-cc-amex";
        }
        else if(carddigit.charAt(0)==='4'){
            document.getElementById("cardicon").className = "fa fa-cc-visa";
        }
        else if(carddigit.charAt(0)==='5'){
            document.getElementById("cardicon").className = "fa fa-cc-mastercard"
        }
        else{
            document.getElementById("cardicon").style.visibility = "hidden";
        }
    }
    if(carddigit.length<7){
        document.getElementById("cardicon").style.visibility = "hidden";
    }
}

function addSlash(){
    var exp = document.getElementById('expiry').value;
    if(exp.length==2){
        document.getElementById('expiry').value=exp+'/'
        document.getElementById('expiry').max=1;
    }
}

