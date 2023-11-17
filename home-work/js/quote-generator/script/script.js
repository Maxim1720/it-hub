const quoutes = [
  {
    author: "Albert Einstein",
    quotes: [
      {
        text: "Any intelligent fool can make things bigger, more complex, and \
            more violent. It takes a touch of genius -- and a lot of courage\
            -- to move in the opposite direction.",
      },
      {
        text: "Imagination is more important than knowledge.",
      },
      {
        text: "The only real valuable thing is intuition.",
      },
      {
        text: "Everything should be made as simple as possible, but not simpler.",
      },
      {
        text: "Common sense is the collection of prejudices acquired by age eighteen.",
      },
    ],
  },

  {
    author: "Zig Ziglar",
    quotes:[
        {
            text:"You don't have to be great to start, but you have to start to be great."
        },
        {
            text: "You don't have to be great to start, but you have to start to be great."
        },
        {
            text: "It was character that got us out of bed, commitment that moved us into action, \
            and discipline that enabled us to follow through."
        }
    ]
  }
];




const generateBtn = document.querySelector('.generator-btn');

generateBtn.addEventListener('click', (e)=>{
  const randomAuthor = quoutes[Math.floor(Math.random() * quoutes.length)];
  const randomQuote = randomAuthor.quotes[Math.floor(Math.random() * randomAuthor.quotes.length)];
  
  let textElement = document.querySelector('#text');
  let authorElement = document.querySelector('#author');

  textElement.innerHTML = randomQuote.text;
  authorElement.innerHTML = randomAuthor.author;
});

generateBtn.click();
