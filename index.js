function writeCards(name, event){
    const returnMessage = [];
    for (let b = 0; b < name.length; b++){
        returnMessage.push(`Thank you, ${name[b]}, for the wonderful ${event} gift!`);
    }
    return returnMessage;
}

function countDown(number) {
    for(let a = number; a >= 0; a--)
    console.log(a);
}