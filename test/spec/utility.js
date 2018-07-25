function parseTextMessages(messages) {
  
  let textMessages = [];
  
  for(let i in messages) {
    if(messages[i].message === "text")
    textMessages.push(messages[i].text.text);
  }

  return textMessages;
}

function parseCards(messages) {
  
  let cards = [];
  
  for(let i in messages) {
    if(messages[i].message === "card")
    cards.push(messages[i].card.title);
  }

  return cards;
}

function parseQuickReplies(messages) {
  
  let quickReplies = [];
  
  for(let i in messages) {
    if(messages[i].message === "quickReplies") {
      quickReplies = messages[i].quickReplies.quickReplies.slice();
      break;
    }
  }

  return quickReplies;
}

module.exports = {
  parseTextMessages: parseTextMessages,
  parseCards: parseCards,
  parseQuickReplies: parseQuickReplies
}