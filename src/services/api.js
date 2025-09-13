const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function getAuthHeader() {
  try {
    const t = localStorage.getItem('fb_token');
    return t ? { 'Authorization': `Bearer ${t}` } : {};
  } catch { return {}; }
}

async function request(path,{method='GET',data,params}={}){
  const url=new URL(path,API_BASE);
  if(params) Object.entries(params).forEach(([k,v])=> v!=null && url.searchParams.set(k,v));
  const headers = { 'Content-Type':'application/json', ...getAuthHeader() };
  const res=await fetch(url.toString(),{ method, headers, body:data?JSON.stringify(data):undefined });
  if(!res.ok){
    if(res.status===401){ localStorage.removeItem('fb_token'); localStorage.removeItem('fb_user'); }
    const t=await res.text(); throw new Error(t||res.statusText);
  }
  return res.json();
}

export const api={ get:(p,o)=>request(p,{method:'GET',...(o||{})}), post:(p,d)=>request(p,{method:'POST',data:d}) };
