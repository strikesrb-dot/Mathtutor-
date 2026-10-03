// Fake YouTube IFrame API for testing.
window.__players = [];
window.YT = { Player: function (el, opts) {
  const self = this; window.__players.push(self);
  const div = typeof el === 'string' ? document.getElementById(el) : el;
  const f = document.createElement('div'); f.className = 'fake-yt'; f.style.cssText = 'position:absolute;inset:0;background:#223;color:#fff;display:grid;place-items:center';
  f.textContent = 'FAKE VIDEO ' + opts.videoId; div.replaceWith(f);
  let state = 5, t = (opts.playerVars && opts.playerVars.start) || 0, rate = 1; const dur = window.__ytDur || 120;
  self.vid = opts.videoId;
  const iv = setInterval(() => { if (state === 1) { t += rate; if (t >= dur) { t = dur; state = 0; } } }, 1000);
  self.getPlayerState = () => state; self.getCurrentTime = () => t; self.getDuration = () => dur;
  self.playVideo = () => { state = 1; }; self.pauseVideo = () => { if (state === 1) state = 2; };
  self.seekTo = (s) => { t = s; }; self.getPlaybackRate = () => rate;
  self.setPlaybackRate = (r) => { rate = r; };
  self.destroy = () => { clearInterval(iv); };
  setTimeout(() => opts.events && opts.events.onReady && opts.events.onReady({ target: self }), 10);
}};
setTimeout(() => window.onYouTubeIframeAPIReady && window.onYouTubeIframeAPIReady(), 0);
