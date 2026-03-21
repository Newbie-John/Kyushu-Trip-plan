[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$content = Get-Content "c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\data.js" -Encoding UTF8 -Raw

$flightsStr = @"
  flights: [
    { type: "去程", flightNo: "BR106", airline: "長榮航空", departure: {time: "08:10", airport: "TPE 桃園(第2航廈)"}, arrival: {time: "11:15", airport: "FUK 福岡(國際線)"}, baggage: "計重制 23kg" },
    { type: "回程", flightNo: "BR105", airline: "長榮航空", departure: {time: "12:15", airport: "FUK 福岡(國際線)"}, arrival: {time: "13:50", airport: "TPE 桃園(第2航廈)"}, baggage: "計重制 23kg" }
  ],
  transport: { rentalCar: { reservationNo: "RC-888999", time: "2026/04/07 10:00 - 2026/04/09 18:00", mapUrl: "", location: "博多車站前營業所" } },
"@

$content = $content -replace '(?m)^\s*flights:\s*\[\],\s*//.*', $flightsStr

$walletStr = @"
  wallet: [
    { type: "flight", title: "去程電子機票 TPE -> FUK", subtitle: "航班: BR106", data: "BR106-QR-12345", qrMode: true },
    { type: "flight", title: "回程電子機票 FUK -> TPE", subtitle: "航班: BR105", data: "BR105-QR-67890", qrMode: true },
    { type: "car", title: "租車取車憑證", subtitle: "預約編號: RC-888999", data: "RC-888999", qrMode: false }
  ],
"@

$content = $content -replace '(?m)^\s*wallet:\s*\[\],\s*//.*', $walletStr

$daysStr = @"
      ]
    },
    {
      day: 7,
      date: "2026/04/10 (五)",
      title: "糸島海景 · 咖啡悠活",
      activities: [
        { time: "10:00", desc: "搭乘地下鐵/巴士前往糸島", type: "transit", duration: "1h" },
        { time: "11:00-12:30", desc: "櫻井二見浦 夫婦岩", type: "poi", tags: ["#海景", "#打卡"], details: "海中白色鳥居，絕美打卡點。" },
        { time: "12:30-14:00", desc: "午餐：海邊咖啡廳 (Sunset Cafe)", type: "food", tags: ["#海景午餐", "#咖啡"], details: "享受海景與悠閒午餐。" },
        { time: "14:30-16:00", desc: "棕櫚樹鞦韆 / 雜貨店巡禮", type: "poi", tags: ["#散步", "#拍照"] },
        { time: "16:00-17:00", desc: "返回天神市區", type: "transit", duration: "1h" },
        { time: "17:00-19:30", desc: "天神地下街 / 博多運河城 購物", type: "poi", tags: ["#購物", "#伴手禮"] },
        { time: "19:30-21:30", desc: "晚餐：和牛燒肉 (肉一 或 多牛)", type: "food", tags: ["#美食", "#燒肉"], details: "高CP值和牛燒肉，需排隊。" },
        { time: "22:00", desc: "休息 @ 福岡天神東方快捷酒店", type: "hotel" }
      ]
    },
    {
      day: 8,
      date: "2026/04/11 (六)",
      title: "最後採買 · 滿載而歸",
      activities: [
        { time: "09:00", desc: "悠閒早餐 & 整理行李", type: "rest" },
        { time: "10:30-12:30", desc: "市區最後衝刺購買伴手禮 (努努雞、明太子)", type: "poi", tags: ["#購物", "#伴手禮"], details: "不可錯過的福岡代表伴手禮。" },
        { time: "13:00", desc: "前往福岡機場", type: "transit" },
        { time: "13:30-15:00", desc: "機場報到 & 免稅店最後採買", type: "poi", tags: ["#機場", "#免稅"] },
        { time: "16:00", desc: "搭機返台", type: "flight", tags: ["#回程", "#飛行"] },
        { time: "17:30", desc: "抵達溫暖的家", type: "poi" }
      ]
    }
  ],
"@

$content = $content -replace '(?m)^\s*\]\s*\n\s*\}\s*\n\s*\]\,', $daysStr

$utf8NoBom = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllText("c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\data.js", $content, $utf8NoBom)
Write-Output "Patch Successful"
