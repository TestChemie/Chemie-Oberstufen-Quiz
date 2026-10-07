(function(root){
  'use strict';
  function normalize(s){const months=['januar','februar','marz','april','mai','juni','juli','august','september','oktober','november','dezember'];return String(s).normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/ß/g,'ss').replace(/−/g,'-').replace(/\b(januar|februar|marz|april|mai|juni|juli|august|september|oktober|november|dezember)\b/g,m=>String(months.indexOf(m)+1)).replace(/\b(?:der|die|das|den|dem|des|ein|eine|einer|einem|einen|eines|im|in|am|an|von|aus|etwa|ungefahr|rund)\b/g,' ').replace(/[^a-z0-9-]+/g,' ').replace(/\b0+(\d)/g,'$1').replace(/\s+/g,' ').trim();}
  function matches(input,answers){const n=normalize(input);return n.length>0&&answers.some(a=>normalize(a)===n);}
  function chemistryText(s){return String(s).normalize('NFKC').replace(/[−–]/g,'-').replace(/\s+/g,' ').trim();}
  function answerMatches(input,q){
    if(q.numeric){
      const s=chemistryText(input), m=s.match(/^([+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:[eE][+-]?\d+)?)\s*(.*)$/);
      if(!m)return false;
      const unit=chemistryText(m[2]).replace(/\s/g,''), expected=chemistryText(q.numeric.unit).replace(/\s/g,'');
      if(unit&&unit!==expected)return false;
      const n=Number(m[1].replace(',','.'));
      return Number.isFinite(n)&&Math.abs(n-q.numeric.value)<=q.numeric.tolerance;
    }
    const clean=s=>{const t=chemistryText(s);return q.formula?t.replace(/\s/g,''):t.toLocaleLowerCase('de').replace(/[.!?]+$/,'');};
    const n=clean(input);return !!n&&q.answers.some(a=>clean(a)===n);
  }
  function shuffle(a,rng=Math.random){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
  function pool(questions,history,category,filter,level='all',kind='all'){return questions.filter(q=>(category==='all'||q.category===category)&&(level==='all'||(level==='gA'?q.level!=='eA':q.level===level))&&(kind==='all'||q.kind===kind)&&(filter==='all'||(filter==='unseen'?!history[q.id]:history[q.id]?.correct===false)));}
  function diverse(questions,count=questions.length){const groups=new Map();for(const q of shuffle(questions)){const key=q.practiceFamily||q.family||q.id;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(q);}const buckets=shuffle([...groups.values()]),result=[];while(result.length<count&&buckets.some(b=>b.length)){for(const b of buckets){if(b.length&&result.length<count)result.push(b.pop());}}return result;}
  function balanced(questions,count){const groups=new Map();for(const q of questions){if(!groups.has(q.category))groups.set(q.category,[]);groups.get(q.category).push(q);}const buckets=shuffle([...groups.values()].map(q=>diverse(q))),result=[];while(result.length<count&&buckets.some(b=>b.length)){for(const b of buckets){if(b.length&&result.length<count)result.push(b.shift());}}return shuffle(result);}
  function validateSession(s,byId){if(!s||!Array.isArray(s.ids)||!s.ids.length||new Set(s.ids).size!==s.ids.length||s.ids.some(id=>!byId.has(id))||!Number.isInteger(s.index)||s.index<0||s.index>s.ids.length||!Array.isArray(s.results)||s.results.length<s.index||s.results.length>s.index+1)return null;for(let i=0;i<s.results.length;i++){const r=s.results[i];if(!r||r.id!==s.ids[i]||typeof r.correct!=='boolean'||typeof r.input!=='string')return null;}return s;}
  const api={normalize,matches,answerMatches,shuffle,pool,diverse,balanced,validateSession};root.QuizEngine=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
