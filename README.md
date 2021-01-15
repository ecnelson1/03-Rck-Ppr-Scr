# 03-Rck-Ppr-Scr plan
HTML elements:
user pick option
    -radio inputs inside labels
sections to display
    -user feedback messages
    -wins
    -loss
    -total matches
    -reset counter
button for
    -storing user selection
    -creating and storing computer choice
    -comparing user selection to computer choice
    -displaying appropriate feedback message
    -incrementing appropriate win/loss value on display
    -increment total matches on display
second button for
    -zeroing win/loss/total matches values
    -incrementing reset counter value on display 

Stretch goal add betting: 
    -HTML: 

    display div - user money display
    input - for bet amount
    display for bet outcome

    -js:

    get the dom elements
    get the bet amount from input
    determine win/loss
        - if win multiply by two then add back to money
        - if loss subtract bet amount from user money
    set display for bet outcome 

