function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

for(let i=1;i<=3;i++){
    let id="div"+i;
    let elem=document.getElementById(id);
    text=elem.textContent;
    elem.textContent=truncate(text,7)
}