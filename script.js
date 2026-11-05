function sendMsg(){
  let input=document.getElementById('userInput');
  let text=input.value.trim();
  if(!text) return;
  let box=document.getElementById('messages');
  box.innerHTML+=`<div class="msg user">${text}</div>`;
  input.value='';
  box.innerHTML+=`<div class="msg ai typing" id="typing">RenAi soch raha hai</div>`;
  box.scrollTop=box.scrollHeight;
  setTimeout(()=>{
    document.getElementById('typing').remove();
    let reply = getDemoReply(text);
    box.innerHTML+=`<div class="msg ai">${reply}</div>`;
    box.scrollTop=box.scrollHeight;
  },1200);
}
function getDemoReply(t){
  t=t.toLowerCase();
  if(t.includes('hello')||t.includes('hi')||t.includes('hii')||t.includes('hey')) return "Hello bhai! Main RenAi hu. One AI, Every Language, Whole World. Batao kya help karu?";
  if(t.includes('kaun')||t.includes('who are')) return "Main RenAi hu - ek International AI. Abhi main Demo Mode me hu. Jaldi hi full version aayega!";
  if(t.includes('hindi')) return "Haan bhai, mujhe Hindi aati hai. Tum Hindi me pucho, main Hindi me jawab dunga.";
  if(t.includes('language')||t.includes('bhasha')) return "Mujhe 100+ languages aati hai - Hindi, English, Spanish, French, Arabic, Japanese aur bhi bahut sari!";
  if(t.includes('photo')||t.includes('image')) return "RenAi Image jald aa raha hai! Abhi Demo me photo nahi bana sakta, lekin full version me bana dunga.";
  if(t.includes('paisa')||t.includes('price')||t.includes('free')) return "Abhi RenAi Demo FREE hai bhai. Full version bhi sasta rakhunga taaki sab use kar sake.";
  return "Nice sawal! Abhi main Demo Mode me hu, isliye short jawab de raha hu. Full RenAi me main iska detail jawab dunga. Aur kuch pucho?";
}
function changeLang(v){
  let box=document.getElementById('messages');
  let msgs={hi:"Hindi select ho gayi! Ab Hindi me pucho.",hinglish:"Hinglish on hai bhai! Ab Hinglish me baat karte hai.",es:"Spanish selected! Pregunta en español.",fr:"Français sélectionné!",ar:"تم اختيار العربية!",ja:"日本語が選択されました！",de:"Deutsch ausgewählt!",en:"English selected!"};
  box.innerHTML+=`<div class="msg ai">${msgs[v]||"Language changed!"}</div>`;
}
