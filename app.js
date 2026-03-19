document.addEventListener('DOMContentLoaded', () => {
  // Navigation Routing
  const navBtns = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.view');
  
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const targetId = btn.getAttribute('data-target');
      views.forEach(v => v.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Countdown Logic
  const targetDate = new Date('2026-04-04T00:00:00').getTime();
  const cdEl = document.getElementById('countdown');
  const updateCd = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff < 0) { cdEl.innerText = "旅途愉快！"; return; }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    cdEl.innerText = `${days} 天`;
  };
  setInterval(updateCd, 1000 * 60 * 60 * 12);
  updateCd();

  // Populate Flights
  const flist = document.getElementById('flights-list');
  tripData.flights.forEach(f => {
    flist.innerHTML += `
      <div class="glass-card">
        <div class="info-row">
          <span class="info-label">${f.type} - ${f.flightNo}</span>
          <span class="badge" style="font-size:10px;">${f.airline}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin: 16px 0;">
          <div style="text-align:left;">
            <div style="font-size:20px; font-weight:700;">${f.departure.time}</div>
            <div style="font-size:12px; color:var(--text-muted); max-width:80px;">${f.departure.airport}</div>
          </div>
          <div><i class="ph ph-airplane-right" style="font-size:24px; color:var(--accent-color);"></i></div>
          <div style="text-align:right;">
            <div style="font-size:20px; font-weight:700;">${f.arrival.time}</div>
            <div style="font-size:12px; color:var(--text-muted); max-width:80px;">${f.arrival.airport}</div>
          </div>
        </div>
        <div class="info-row" style="margin-top:16px; font-size:12px;">
          <span class="info-label">行李規定</span><span class="info-val">${f.baggage}</span>
        </div>
      </div>
    `;
  });

  // Populate Car
  const clist = document.getElementById('car-list');
  const c = tripData.transport.rentalCar;
  clist.innerHTML = `
    <div class="glass-card">
      <div class="info-row"><span class="info-label">預約編號</span><span class="info-val" style="color:var(--accent-color);">${c.reservationNo}</span></div>
      <div class="info-row"><span class="info-label">租車時間</span><span class="info-val">${c.time}</span></div>
      <div class="info-row"><span class="info-label">取車地址</span><span class="info-val" style="font-size:13px;">${c.location}</span></div>
    </div>
  `;

  // Populate Hotels
  const hlist = document.getElementById('hotels-list');
  tripData.hotels.forEach(h => {
    hlist.innerHTML += `
      <div class="glass-card">
        <div style="font-size:18px; font-weight:700; margin-bottom:8px;">${h.name}</div>
        <div class="info-row"><span class="info-label">日期</span><span class="info-val">${h.checkInDate} (${h.nights}晚)</span></div>
        <div class="info-row"><span class="info-label">時間 (In/Out)</span><span class="info-val">${h.checkInTime} / ${h.checkOutTime}</span></div>
        <div class="info-row"><span class="info-label">房型</span><span class="info-val" style="font-size:13px;">${h.roomType}</span></div>
        <div class="info-row"><span class="info-label">附餐</span><span class="info-val" style="font-size:13px;">${h.meal}</span></div>
        <div class="info-row" style="margin-top:12px;">
          <span class="info-label">地區</span>
          <span class="info-val" style="color:var(--accent-color);"><i class="ph ph-map-pin"></i> ${h.location}</span>
        </div>
      </div>
    `;
  });

  // Populate Itinerary
  const ilist = document.getElementById('itinerary-list');
  tripData.itinerary.forEach(day => {
    const title = document.createElement('h3');
    title.className = 'section-title';
    title.style.marginLeft = '-16px';
    title.style.marginTop = '32px';
    title.innerText = `Day ${day.day} - ${day.date}`;
    ilist.appendChild(title);

    day.activities.forEach(act => {
      let icon = 'ph-map-pin';
      if(act.type === 'flight') icon = 'ph-airplane-tilt';
      if(act.type === 'hotel' || act.type === 'rest') icon = 'ph-bed';
      if(act.type === 'food') icon = 'ph-fork-knife';
      if(act.type === 'transit') icon = 'ph-train';

      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="time-badge">${act.time}</div>
        <div class="timeline-content">
          <div style="display:flex; align-items:center; gap:12px;">
            <i class="ph ${icon}" style="font-size:20px; color:var(--accent-color);"></i>
            <span style="line-height:1.4;">${act.desc}</span>
          </div>
        </div>
      `;
      ilist.appendChild(item);
    });
  });
});
