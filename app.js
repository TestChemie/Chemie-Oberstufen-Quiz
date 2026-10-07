(function(){
 'use strict';
 const $=id=>document.getElementById(id),data=window.QUIZ_DATA,E=window.QuizEngine;
 if(!data||!Array.isArray(data.questions)||!data.questions.length||!E){$('question').textContent='Die Fragen konnten nicht geladen werden.';$('notice').textContent='Bitte prüfe, ob questions.js, engine.js und app.js zusammen mit index.html im selben Ordner liegen.';$('notice').hidden=false;return;}
 const questions=data.questions,byId=new Map(questions.map(q=>[q.id,q])),key='wissensraum-v1-'+data.version;
 const number=n=>n.toLocaleString('de-DE');
 let history={},session=null,storageAvailable=true;
 try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved&&typeof saved.history==='object'&&saved.history){for(const [id,h] of Object.entries(saved.history)){if(byId.has(id)&&h&&typeof h.correct==='boolean')history[id]={correct:h.correct};}session=E.validateSession(saved.session,byId);}}catch(_){storageAvailable=false;}
 function save(){try{localStorage.setItem(key,JSON.stringify({history,session}));storageAvailable=true;}catch(_){storageAvailable=false;}storageNote();}
 function storageNote(){$('storage-note').textContent=storageAvailable?'Wird nur in diesem Browser gespeichert.':'Der Browser erlaubt keine Speicherung. Dein Fortschritt gilt nur für diese geöffnete Seite.';}
 $('total-header').textContent=number(questions.length);
 const semesters=data.categorySemesters||{};
 const categories=[...new Set(questions.map(q=>q.category))].sort((a,b)=>(semesters[a]||5)-(semesters[b]||5)||a.localeCompare(b,'de'));
 for(const c of categories){const o=document.createElement('option');o.value=c;o.textContent=c+(semesters[c]?' · Halbjahr '+semesters[c]:'')+' · '+number(questions.filter(q=>q.category===c).length);$('category').append(o);}
 const p=document.createElement('p');p.textContent=data.summary;$('dataset-info').append(p);
 function stats(){const vals=Object.values(history);$('seen').textContent=number(vals.length);$('mastered').textContent=number(vals.filter(x=>x.correct).length);$('mistakes').textContent=number(vals.filter(x=>!x.correct).length);}
 function notify(text){$('notice').textContent=text;$('notice').hidden=!text;}
 function start(ids){let selected;if(ids){selected=E.diverse(ids.map(id=>byId.get(id))).map(q=>q.id);}else{const eligible=E.pool(questions,history,$('category').value,$('filter').value,$('level').value,$('kind').value);const size=$('length').value;selected=$('category').value==='all'&&size!=='all'?E.balanced(eligible,Number(size)).map(q=>q.id):E.diverse(eligible).map(q=>q.id);if(size!=='all')selected=selected.slice(0,Number(size));}
  if(!selected.length){notify('In dieser Auswahl gibt es gerade keine Fragen. Wähle ein anderes Thema oder „Gemischt lernen“.');return;}
  session={ids:selected,index:0,results:[],mode:$('mode').value,category:$('category').value,filter:$('filter').value,length:$('length').value,level:$('level').value,kind:$('kind').value};notify('');save();render();
 }
 function current(){return byId.get(session.ids[session.index]);}
 function revealAnswer(result){const q=current(),isText=session.mode==='text'||!q.options;const correct=result.correct;
  $('feedback').hidden=false;$('feedback').classList.toggle('wrong',!correct);
  $('feedback-title').textContent=correct?(result.override?'✓ Als richtig gewertet':'✓ Richtig!'):(result.revealed?'↗ Noch etwas dazugelernt':'✕ Falsch');
  $('feedback-text').textContent=correct?'Die richtige Antwort lautet:':(result.revealed?'Merke dir die richtige Antwort:':isText?'Deine Eingabe stimmt mit keiner hinterlegten Lösung überein. Die richtige Antwort lautet:':'Die richtige Antwort lautet:');
  $('solution').textContent=q.answers[0];$('override').hidden=!isText||correct||result.revealed;
  $('answer-actions-placeholder')?.remove();$('check').disabled=true;$('reveal').disabled=true;$('reveal').hidden=true;$('answer').disabled=true;
  for(const label of $('choice-list').querySelectorAll('label')){const input=label.querySelector('input');input.disabled=true;const val=input.value;label.classList.toggle('correct',q.answers.includes(val));label.classList.toggle('incorrect',val===result.input&&!correct);}
  $('explanation').hidden=false;$('explanation-text').textContent=q.category+' · '+(q.level==='E'?'Grundlagen':q.level)+'\n'+(q.explanation||'');
  $('source-links').replaceChildren();for(const link of q.sources||[]){if(!/^https:\/\//.test(link.url))continue;const a=document.createElement('a');a.href=link.url;a.textContent=link.label;a.target='_blank';a.rel='noopener noreferrer';$('source-links').append(a);}
  $('source-note').textContent=q.sourceNote||'Eigenständig formulierte Chemie-Übungsaufgabe.';
  $('next-row').hidden=false;$('next').textContent=session.index===session.ids.length-1?'Runde abschließen →':'Nächste Frage →';
  $('feedback').scrollIntoView({block:'nearest'});
 }
 function render(focus=false){stats();storageNote();const finished=session.index>=session.ids.length;const answered=session.results.length;
  $('round-label').textContent='Lernrunde · '+number(session.ids.length)+' Fragen';$('round-score').textContent=number(session.results.filter(r=>r.correct).length)+' richtig';$('round-progress').max=session.ids.length;$('round-progress').value=answered;
  $('quiz-card').hidden=finished;$('complete').hidden=!finished;
  if(finished){const correct=session.results.filter(r=>r.correct).length;$('complete-result').textContent=`${number(correct)} von ${number(session.ids.length)} Fragen richtig (${Math.round(correct/session.ids.length*100)} %). Dein Fortschritt ist ${storageAvailable?'gespeichert':'für diese Sitzung erfasst'}.`;$('repeat').disabled=session.results.every(r=>r.correct);if(focus)$('complete-title').focus();return;}
  const q=current(),result=session.results[session.index];$('topic').textContent='Chemie · Oberstufe';$('subtopic').textContent='';$('subtopic').hidden=true;$('question').textContent=q.question;$('number').textContent=number(session.index+1)+' / '+number(session.ids.length);
  const isText=session.mode==='text'||!q.options;$('text-answer').hidden=!isText;$('choices').hidden=isText;$('choice-list').replaceChildren();
  $('matching-note').textContent=q.numeric?'Zahl in der gefragten Einheit eingeben (Einheit optional). Komma oder Punkt sind erlaubt. Beachte die Rundung.':'Abgleich mit der hinterlegten Antwort; keine KI-Bewertung. Bei chemischen Formeln zählt die Groß- und Kleinschreibung. Gleichwertige Formulierungen kannst du nachträglich als richtig markieren.';
  if(!isText){const options=E.shuffle(q.options);for(const [i,opt] of options.entries()){const label=document.createElement('label');label.className='choice';const input=document.createElement('input');input.type='radio';input.name='choice';input.value=opt;input.checked=result?.input===opt;input.addEventListener('change',()=>{$('check').disabled=false;});const letter=document.createElement('span');letter.className='choice-letter';letter.textContent=String.fromCharCode(65+i);letter.setAttribute('aria-hidden','true');const text=document.createElement('span');text.textContent=opt;label.append(input,letter,text);$('choice-list').append(label);}}
  $('answer').value=result?.input||'';$('answer').disabled=false;$('check').disabled=true;$('reveal').disabled=false;$('reveal').hidden=false;$('feedback').hidden=true;$('next-row').hidden=true;$('explanation').hidden=true;$('explanation').open=false;
  if(result)revealAnswer(result);if(focus)$('question').focus();
 }
 function submit(revealed=false){if(session.index>=session.ids.length||session.results[session.index])return;const q=current(),isText=session.mode==='text'||!q.options;const input=revealed?'':isText?$('answer').value.trim():$('choice-list').querySelector('input:checked')?.value||'';if(!revealed&&!input)return;
  const correct=!revealed&&(isText?E.answerMatches(input,q):q.answers.includes(input));const result={id:q.id,input,correct,revealed};session.results.push(result);history[q.id]={correct};save();revealAnswer(result);stats();$('round-score').textContent=number(session.results.filter(r=>r.correct).length)+' richtig';$('round-progress').value=session.results.length;
 }
 $('answer').addEventListener('input',()=>{$('check').disabled=!$('answer').value.trim();});
 $('answer-form').addEventListener('submit',e=>{e.preventDefault();submit();});$('reveal').addEventListener('click',()=>submit(true));
 $('next').addEventListener('click',()=>{if(!session.results[session.index])return;session.index++;save();render(true);});
 $('settings').addEventListener('submit',e=>{e.preventDefault();start();});$('again').addEventListener('click',()=>start());
 $('repeat').addEventListener('click',()=>start(session.results.filter(r=>!r.correct).map(r=>r.id)));
 $('override').addEventListener('click',()=>{const r=session.results[session.index];if(!r||r.correct)return;r.correct=true;r.override=true;history[r.id]={correct:true};save();render();});
 $('reset').addEventListener('click',()=>{history={};session=null;try{localStorage.removeItem(key);}catch(_){}$('category').value='all';$('filter').value='all';$('level').value='all';$('kind').value='all';$('reset').closest('details').open=false;start();notify('Dein lokaler Fortschritt wurde zurückgesetzt.');});
 if(session){if(['all','E','gA','eA'].includes(session.level))$('level').value=session.level;if(['all','Verständnis','Rechenvariante'].includes(session.kind))$('kind').value=session.kind;if(['all',...categories].includes(session.category))$('category').value=session.category;if(['all','unseen','wrong'].includes(session.filter))$('filter').value=session.filter;if(['10','20','50','all'].includes(session.length))$('length').value=session.length;$('mode').value=session.mode==='text'?'text':'choice';render();}else start();
})();
