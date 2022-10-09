const quotes = [
	{
		qoute: "The world is full of suffering but it is also full of people overcoming it.",
		author: "Helen Keller",
	},
	{
		qoute: "Each of us visits this Earth involuntarily, and without an invitation. For me, it is enough to wonder at the secrets.",
		author: "Albert Einstein",
	},
	{
		qoute: "Love isn't a decision. It's a feeling. If we could decide who we loved, it would be much simpler, but much less magical.",
		author: "Trey Parker",
	},
	{
		qoute: "People say that life is the thing, but I prefer reading.",
		author: "Logan Pearsall Smith",
	},
	{
		qoute: "Words are the physicians of the mind diseased",
		author: "Aeschylus",
	},
	{
		qoute: "Love all, trust a few. Do wrong to none.",
		author: "William Shakespeare",
	},
	{
		qoute: "One doesn't have a sense of humor. It has you.",
		author: "Larry Gelbart",
	},
	{
		qoute: "Study without desire spoils the memory, and it retains nothing that it takes in.",
		author: "Leonardo da Vinci",
	},
	{
		qoute: "If suffer we must, let's suffer on the heights.",
		author: "Saadi",
	},
	{
		qoute: "Everyone in the world is constantly fighting an internal battle. A battle between what the brain knows is right and what the heart knows it wants.",
		author: "Oprah Winfrey",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const index = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[index];

quote.innerText = todaysQuote.qoute;
author.innerText = todaysQuote.author;
