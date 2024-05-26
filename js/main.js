var btn = document.getElementById("btn");
var output = document.getElementById("output");
var quotes = [
    " “Be yourself; everyone else is already taken. ― Oscar Wilde” ",

    ' "Two things are infinite: the universe and human stupidity; and I"m not sure about the universe. ― Albert Einstein',

    " “A room without books is like a body without a soul. ― Marcus Tullius Cicero",

    " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch ",

    "  “You've gotta dance like there's nobody watching Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”― William W. Purkey  ",

    "  “You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss   ",

    "If you tell the truth, you don't have to remember anything.― Mark Twain",

    "A friend is someone who knows all about you and still loves you.― Elbert Hubbard",

    "To live is the rarest thing in the world. Most people exist, that is all.― Oscar Wilde",

    "You only live once, but if you do it right, once is enough.― Mae West",

    "Be the change that you wish to see in the world.― Mahatma Gandhi",

    " Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”― Albert Camus",

    " “Always forgive your enemies; nothing annoys them so much.”― Oscar Wilde ",

    "  “We accept the love we think we deserve.” ― Stephen Chbosky, The Perks of Being a Wallflower "

]

btn.addEventListener('click', function () {

    var randomquote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomquote;

})

/***********************************************************************************************************************************/
