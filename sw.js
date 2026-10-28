// GabaritouIF: cache simples para abrir offline
const CACHE='gabaritouif-v1';
const SHELL=['./','index.html','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET')return;
  const isShell=u.origin===location.origin;
  const isLib=u.hostname==='www.gstatic.com'&&u.pathname.startsWith('/firebasejs/')||u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(!isShell&&!isLib)return;
  if(isShell){
    // rede primeiro (pega atualizações), cache se offline
    e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
  }else{
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return res})));
  }
});
