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
  if (tripData.flights && tripData.flights.length > 0) {
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
  } else {
    flist.innerHTML = '<div style="text-align:center; padding:16px; color:var(--text-muted); font-size:14px;"><i class="ph ph-shield-check"></i> 基於隱私保護，機票資訊已隱藏</div>';
  }

  // Populate Car
  const clist = document.getElementById('car-list');
  const c = tripData.transport.rentalCar;
  let resNoHtml = c.reservationNo ? `<div class="info-row"><span class="info-label">預約編號</span><span class="info-val" style="color:var(--accent-color);">${c.reservationNo}</span></div>` : '';
  clist.innerHTML = `
    <div class="glass-card">
      ${resNoHtml}
      <div class="info-row"><span class="info-label">租車時間</span><span class="info-val">${c.time}</span></div>
      <div class="info-row"><span class="info-label">取車地址</span><span class="info-val" style="font-size:13px;">
        ${c.mapUrl ? `<a href="${c.mapUrl}" target="_blank" style="color:var(--accent-color); text-decoration:none;"><i class="ph ph-map-pin"></i> ${c.location}</a>` : c.location}
      </span></div>
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
          <span class="info-val" style="color:var(--accent-color);">
            ${h.mapUrl ? `<a href="${h.mapUrl}" target="_blank" style="color:inherit; text-decoration:none;"><i class="ph ph-map-pin"></i> ${h.location}</a>` : `<i class="ph ph-map-pin"></i> ${h.location}`}
          </span>
        </div>
      </div>
    `;
  });

  // Populate Itinerary
  const ilist = document.getElementById('itinerary-list');
  tripData.itinerary.forEach((day, index) => {
    const btn = document.createElement('button');
    btn.className = 'accordion-btn';
    if (index === 0) btn.classList.add('active');
    btn.innerHTML = `Day ${day.day} - ${day.date} <i class="ph ph-caret-down"></i>`;
    
    const content = document.createElement('div');
    content.className = 'accordion-content timeline';
    if (index === 0) content.classList.add('open');

    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      content.classList.toggle('open');
    });

    ilist.appendChild(btn);

    day.activities.forEach(act => {
      let icon = 'ph-map-pin';
      if(act.type === 'flight') icon = 'ph-airplane-tilt';
      if(act.type === 'hotel' || act.type === 'rest') icon = 'ph-bed';
      if(act.type === 'food') icon = 'ph-fork-knife';
      if(act.type === 'transit') icon = 'ph-train';

      const item = document.createElement('div');
      item.className = 'timeline-item';
      
      let mapLinkHtml = '';
      if(act.mapUrl) {
         mapLinkHtml = `<a href="${act.mapUrl}" target="_blank" class="badge" style="background:var(--glass-bg); color:var(--accent-color); border:1px solid var(--accent-color); text-decoration:none; display:inline-flex; align-items:center; gap:4px; padding:4px 8px;"><i class="ph ph-map-pin"></i> 導航</a>`;
      }
      
      let durHtml = act.duration ? `<div style="font-size:12px; color:var(--text-muted); margin-top:4px;"><i class="ph ph-clock"></i> ${act.duration}</div>` : '';
      
      let tagsHtml = '';
      if(act.tags) {
        tagsHtml = '<div style="margin-top:8px; display:flex; gap:6px; flex-wrap:wrap;">' + act.tags.map(t => `<span class="badge" style="background:rgba(255,255,255,0.1); color:var(--text-muted); border:1px solid var(--glass-border); font-size:10px;">${t}</span>`).join('') + '</div>';
      }

      let detailsHtml = '';
      if(act.details) {
        detailsHtml = `<div style="white-space: pre-wrap; margin-top: 12px; font-size: 13px; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent-color); line-height: 1.6;">${act.details}</div>`;
      }

      item.innerHTML = `
        <div class="time-badge">${act.time}</div>
        <div class="timeline-content">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div style="display:flex; align-items:flex-start; gap:12px; flex:1;">
              <i class="ph ${icon}" style="font-size:20px; color:var(--accent-color); margin-top:2px;"></i>
              <div style="flex:1;">
                <div style="line-height:1.4; font-weight:600;">${act.desc}</div>
                ${tagsHtml}
                ${durHtml}
                ${detailsHtml}
              </div>
            </div>
            ${mapLinkHtml}
          </div>
        </div>
      `;
      content.appendChild(item);
    });
    ilist.appendChild(content);
  });

  // Populate Wallet
  const wlist = document.getElementById('wallet-list');
  if(tripData.wallet && tripData.wallet.length > 0 && wlist) {
    tripData.wallet.forEach(w => {
      let icon = 'ph-ticket';
      if(w.type === 'flight') icon = 'ph-airplane-tilt';
      if(w.type === 'car') icon = 'ph-car';

      let dataHtml = w.qrMode 
        ? `<div style="text-align:center; margin:16px 0; padding:16px; background:white; border-radius:12px;">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${w.data}" width="150" height="150" alt="QR" style="mix-blend-mode: multiply;">
           </div>`
        : `<div style="margin:16px 0; padding:16px; background:var(--glass-bg); border-radius:12px; font-family:monospace; text-align:center; font-size:18px; letter-spacing:2px; color:var(--accent-color);">${w.data}</div>`;

      wlist.innerHTML += `
        <div class="glass-card">
          <div class="info-row">
            <span class="info-label" style="display:flex; align-items:center; gap:6px; font-size:16px; color:var(--text-main); font-weight:600;"><i class="ph ${icon}"></i> ${w.title}</span>
          </div>
          <div style="font-size:14px; color:var(--text-muted); margin-bottom:12px;">${w.subtitle}</div>
          ${dataHtml}
        </div>
      `;
    });
  } else if (wlist) {
    wlist.innerHTML = `
      <div class="glass-card" style="text-align:center; padding:32px 16px;">
        <i class="ph ph-shield-check" style="font-size:48px; color:var(--accent-color); margin-bottom:16px; filter:drop-shadow(0 0 10px rgba(255,51,102,0.4));"></i>
        <h3 style="font-size:18px; margin-bottom:8px;">隱私保護模式</h3>
        <p style="font-size:14px; color:var(--text-muted); line-height:1.5;">為了避免行程洩露與個人票卷遭盜用，電子票卷、登機套票與預約編號已從此介面中隱藏。</p>
      </div>
    `;
  }

  // Populate Goshuin
  const gList = document.getElementById('goshuin-list');
  if(tripData.goshuin && gList) {
    const savedGoshuin = JSON.parse(localStorage.getItem('goshuinProgress') || '{}');
    
    const renderGoshuin = () => {
      gList.innerHTML = '';
      tripData.goshuin.forEach(g => {
        let isChecked = savedGoshuin[g.id] || false;
        let icon = isChecked ? 'ph-check-circle' : 'ph-circle';
        let cls = isChecked ? 'check-item checked' : 'check-item';
        
        const div = document.createElement('div');
        div.className = cls;
        div.innerHTML = `<i class="ph ${icon}"></i><span>${g.name}</span>`;
        div.onclick = () => {
          savedGoshuin[g.id] = !savedGoshuin[g.id];
          localStorage.setItem('goshuinProgress', JSON.stringify(savedGoshuin));
          renderGoshuin();
        };
        gList.appendChild(div);
      });
    };
    renderGoshuin();
  }

  // Populate Notes
  window.renderNotes = () => {
    const nList = document.getElementById('notes-list');
    if(!nList) return;
    const notes = JSON.parse(localStorage.getItem('photoNotes') || '[]');
    nList.innerHTML = '';
    if(notes.length === 0) {
      nList.innerHTML = `<div style="text-align:center; color:var(--text-muted); font-size:14px; margin-top:24px;">尚無筆記</div>`;
    }
    notes.forEach((n) => {
      nList.innerHTML += `
        <div class="glass-card">
          <div style="font-weight:600; font-size:16px; margin-bottom:8px; color:var(--accent-color);">${n.title}</div>
          <div style="font-size:14px; line-height:1.5; white-space:pre-wrap;">${n.body}</div>
          <div style="font-size:10px; color:var(--text-muted); margin-top:12px; text-align:right;">${n.date}</div>
        </div>
      `;
    });
  };
  if(document.getElementById('notes-list')) {
    window.renderNotes();
  }

  // Currency Converter
  const jpyInput = document.getElementById('jpy-input');
  const twdOutput = document.getElementById('twd-output');
  if(jpyInput && twdOutput) {
    jpyInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if(isNaN(val)) twdOutput.innerText = '-- TWD';
      else twdOutput.innerText = Math.round(val * 0.201).toLocaleString() + ' TWD';
    });
  }

  // Expense Tracker
  window.renderExpenses = () => {
    const eList = document.getElementById('exp-list');
    const eTotal = document.getElementById('exp-total');
    if(!eList || !eTotal) return;
    const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    eList.innerHTML = '';
    let total = 0;
    expenses.forEach((e) => {
      total += parseFloat(e.amt) || 0;
      let icon = 'ph-coin';
      if(e.cat === '飲食') icon = 'ph-fork-knife';
      if(e.cat === '交通') icon = 'ph-train';
      if(e.cat === '門票') icon = 'ph-ticket';
      if(e.cat === '購物/酒') icon = 'ph-shopping-bag';
      
      eList.innerHTML += `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:var(--glass-bg); border:1px solid var(--glass-border); border-radius:8px; margin-bottom:8px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <i class="ph ${icon}" style="color:var(--accent-color);"></i>
            <span>${e.cat}</span>
          </div>
          <div style="font-weight:600;">¥ ${parseFloat(e.amt).toLocaleString()}</div>
        </div>
      `;
    });
    eTotal.innerText = '¥ ' + total.toLocaleString();
  };
  if(document.getElementById('exp-list')) {
    window.renderExpenses();
  }

  // Populate Checklist
  const prepList = document.getElementById('preparation-list');
  if (prepList) {
    const prepItems = [
      { id: "p1", name: "護照 (確認效期跨過行程大於6個月)" },
      { id: "p2", name: "台灣駕照日文譯本 (雙證件自駕必備!)" },
      { id: "p3", name: "台灣駕照正本 (雙證件自駕必備!)" },
      { id: "p4", name: "Visit Japan Web 及電子機票儲存" },
      { id: "p5", name: "日幣現金 / 可刷實體信用卡" },
      { id: "p6", name: "春季薄外套、防風外套 (春季溫差大必備)" },
      { id: "p7", name: "好穿的休閒排汗便鞋" },
      { id: "p8", name: "太陽眼鏡及防曬用品 (自駕防西曬必備)" },
      { id: "p9", name: "常備藥品、個人保健品" }
    ];
    const savedPrep = JSON.parse(localStorage.getItem('preparationProgress') || '{}');
    
    const renderPrep = () => {
      prepList.innerHTML = '';
      prepItems.forEach(p => {
        let isChecked = savedPrep[p.id] || false;
        let icon = isChecked ? 'ph-check-square' : 'ph-square';
        let cls = isChecked ? 'check-item checked' : 'check-item';
        
        const div = document.createElement('div');
        div.className = cls;
        div.style.padding = '12px';
        div.onclick = () => {
          savedPrep[p.id] = !savedPrep[p.id];
          localStorage.setItem('preparationProgress', JSON.stringify(savedPrep));
          renderPrep();
        };
        div.innerHTML = `<i class="ph ${icon}" style="font-size:20px; transition: color 0.2s; color: ${isChecked ? 'var(--accent-color)' : 'var(--text-muted)'}; margin-right: 12px; margin-bottom: 0;"></i><span>${p.name}</span>`;
        prepList.appendChild(div);
      });
    };
    renderPrep();
  }
});

// Global Window Functions for Modals
window.openNoteModal = () => {
  document.getElementById('note-title').value = '';
  document.getElementById('note-body').value = '';
  document.getElementById('note-modal').style.display = 'flex';
};
window.closeNoteModal = () => {
  document.getElementById('note-modal').style.display = 'none';
};
window.saveNote = () => {
  const title = document.getElementById('note-title').value.trim();
  const body = document.getElementById('note-body').value.trim();
  if(!title || !body) { alert("請輸入標題與內容"); return; }
  
  const notes = JSON.parse(localStorage.getItem('photoNotes') || '[]');
  notes.unshift({
    title, body, date: new Date().toLocaleString()
  });
  localStorage.setItem('photoNotes', JSON.stringify(notes));
  window.closeNoteModal();
  if(window.renderNotes) window.renderNotes();
};

window.addExpense = () => {
  const cat = document.getElementById('exp-cat').value;
  const amt = document.getElementById('exp-amt').value;
  if(!amt || amt <= 0) { alert("請輸入有效金額"); return; }
  
  const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
  expenses.unshift({ cat, amt, date: new Date().getTime() });
  localStorage.setItem('expenses', JSON.stringify(expenses));
  
  document.getElementById('exp-amt').value = '';
  if(window.renderExpenses) window.renderExpenses();
};

window.showBigText = (text) => {
  document.getElementById('bigtext-content').innerText = text;
  document.getElementById('bigtext-modal').style.display = 'flex';
};
window.closeBigText = () => {
  document.getElementById('bigtext-modal').style.display = 'none';
};
