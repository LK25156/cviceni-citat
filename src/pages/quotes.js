export let listQuotes = ["Nikdy to nevzdávej", "Jdi za svými sny", "Myslím, tedy jsem."]
 
 
 export const randomQuote = (list) => {
     return `"${listQuotes[Math.floor(Math.random() * 3)]}"` 
 }
 
 export const moveToTop = (indexQuote) => {
     let valueQuote = listQuotes[indexQuote]
     listQuotes.splice(indexQuote, 1)
     listQuotes.unshift(valueQuote)
 }
