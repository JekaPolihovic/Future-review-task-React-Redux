export function cutString(text, limit) {
  let lastSpace;
  text = text.trim();
  if (text.length <= limit) return text;
  text = text.slice(0, limit); // тут отрезать по лимиту
  lastSpace = text.lastIndexOf(" ");
  if (lastSpace > 0) {
    // нашлась граница слов, ещё укорачиваем
    text = text.substr(0, lastSpace);
  }
  return text;
}

