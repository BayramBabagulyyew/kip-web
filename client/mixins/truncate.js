export const  truncateHtml = (html, maxLength)=> {
  const div = document.createElement('div');
  div.innerHTML = html || '';
  const text = div.textContent || div.innerText || '';
  if (text.length <= maxLength) return html;
  return text.substring(0, maxLength) + '...';
}