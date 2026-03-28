const fs = require('fs');

const data = {
  flights: [
    { type: "去程", flightNo: "AK1510", airline: "AirAsia", departure: {time: "12:00", airport: "TPE 桃園(第1航廈)"}, arrival: {time: "15:20", airport: "FUK 福岡(國際線)"}, baggage: "計重制 20kg" },
    { type: "回程", flightNo: "AK1511", airline: "AirAsia", departure: {time: "16:20", airport: "FUK 福岡(國際線)"}, arrival: {time: "17:50", airport: "TPE 桃園(第1航廈)"}, baggage: "計重制 20kg" }
  ],
  transport: { rentalCar: { reservationNo: "09944856900", time: "2026/04/07 08:30 - 2026/04/09 18:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%88%E3%83%A8%E3%82%BF%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%AB%E3%83%BC+%E5%8D%9A%E5%A4%9A%E9%A7%85%E6%9D%B1%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E5%BA%97", location: "トヨタレンタカー 博多駅東インター店" } },
  hotels: [
    { id: "webase", name: "WeBase Hakata", nights: 1, checkInDate: "2026/04/04", checkOutDate: "2026/04/05", checkInTime: "16:00", checkOutTime: "11:00", location: "福岡 中洲川端", roomType: "雙層床私人房 (4人用)", meal: "含早餐 07:00-09:30" },
    { id: "croom", name: "博多祇園櫛田神社前西鐵克魯姆酒店", nights: 2, checkInDate: "2026/04/05", checkOutDate: "2026/04/07", checkInTime: "15:00", checkOutTime: "11:00", location: "福岡", roomType: "住宅雙人房 (帶洗衣機與小廚房)", meal: "無早餐 06:30-10:00" },
    { id: "daiwa", name: "大和ROYNET飯店 熊本銀座通PREMIER", nights: 2, checkInDate: "2026/04/07", checkOutDate: "2026/04/09", checkInTime: "14:00", checkOutTime: "11:00", location: "熊本 花畑町", roomType: "豪華特大床房", meal: "無早餐 06:30-10:00" },
    { id: "oriental", name: "福岡天神東方快捷酒店", nights: 2, checkInDate: "2026/04/09", checkOutDate: "2026/04/11", checkInTime: "15:00", checkOutTime: "11:00", location: "福岡 天神", roomType: "標準大床房", meal: "含早餐 07:00-10:30" }
  ],
  itinerary: [
    {
      day: 1, date: "2026/04/04 (六)", title: "抵達福岡與博多",
      activities: [
        { time: "12:00-15:20", desc: "TPE 👉 FUK", type: "flight", details: "搭乘 AK1510 前往福岡國際機場 T1" },
        { time: "15:40-16:20", desc: "前往住宿與 Check-in", type: "hotel", details: "從福岡國際機場前往 WeBase Hakata 辦理入住手續" },
        { time: "16:40-18:30", desc: "傍晚市區觀光", type: "poi", tags: ["#散步", "#購物"], details: "選項 A：JR博多站前廣場\n選項 B：阪急百貨買明太子、番薯籤" },
        { time: "18:30-20:00", desc: "晚餐", type: "food", tags: ["#晚餐", "#隨意安排"], details: "晚餐未定，可在車站周遭解決" },
        { time: "20:00-22:00", desc: "休息 @ WeBase Hakata", type: "hotel", tags: [], details: "" }
      ]
    },
    {
      day: 2, date: "2026/04/05 (日)", title: "威士忌與天神屋台",
      activities: [
        { time: "07:00-09:30", desc: "早餐時間", type: "food", details: "享用 WeBase Hakata 包含的早餐" },
        { time: "10:00-12:00", desc: "更換住宿", type: "transit", details: "C/O WeBase Hakata -> C/I 博多祇園櫛田神社前西鐵克魯姆酒店" },
        { time: "12:00-17:00", desc: "JWS FUKUOKA 2026 / 自由活動", type: "poi", tags: ["#威士忌", "#盛會"], details: "Japan Whisky Show Fukuoka 2026 威士忌展覽" },
        { time: "17:00-20:00", desc: "天神市區與屋台", type: "food", tags: ["#晚餐", "#福岡屋台"], details: "天神市區散策，尋找屋台體驗" },
        { time: "20:00-22:00", desc: "休息 @ 西鐵克魯姆酒店", type: "hotel", details: "" }
      ]
    },
    {
      day: 3, date: "2026/04/06 (一)", title: "門司港與跳島回憶",
      activities: [
        { time: "08:00-09:40", desc: "博多前往門司港", type: "transit", details: "旅館出發，搭乘JR由博多前往小倉，再轉乘至門司港" },
        { time: "09:40-10:40", desc: "乘船至唐戶市場", type: "transit", details: "搭乘聯絡船抵達下關唐戶市場" },
        { time: "10:40-13:30", desc: "唐戶市場海鮮與赤間神宮", type: "food", tags: ["#海鮮", "#午餐", "#神社"], details: "品嚐唐戶市場現流鮮魚，隨後參訪周遭的赤間神宮" },
        { time: "13:50-16:00", desc: "門司港懷舊區", type: "poi", tags: ["#復古", "#打卡"], details: "返回門司港觀光，參觀九州鐵道紀念館" },
        { time: "16:00-18:40", desc: "晚餐：燒咖哩", type: "food", tags: ["#特色美食"], details: "在門司港周圍或折返至小倉享用著名的燒咖哩" },
        { time: "19:00", desc: "返回福岡", type: "transit", details: "循原路線回博多" }
      ]
    },
    {
      day: 4, date: "2026/04/07 (二)", title: "南下熊本與太宰府",
      activities: [
        { time: "08:30-09:30", desc: "博多取車", type: "transit", details: "C/O 旅館，前往「トヨタレンタカー 博多駅東インター店」辦理租車出發" },
        { time: "10:00-12:00", desc: "太宰府天滿宫", type: "poi", tags: ["#神社", "#名勝"], details: "走訪福岡經典太宰府天滿宮" },
        { time: "12:15-13:15", desc: "基山 PA 休息", type: "food", tags: ["#午餐", "#休息站"], details: "在基山PA(下行)稍息並吃份午餐" },
        { time: "14:00-16:30", desc: "八女白壁區與福島八幡宮", type: "poi", tags: ["#街景", "#古蹟"], details: "視天氣情況（未定依天氣決定是否前往）拍攝古意盎然的茶都老街" },
        { time: "16:50-18:20", desc: "自駕前往熊本", type: "transit", details: "繼續南下駛入熊本市區" },
        { time: "19:00", desc: "入住大和ROYNET熊本", type: "hotel", details: "辦妥手續入住大和ROYNET飯店 熊本銀座通PREMIER" }
      ]
    },
    {
      day: 5, date: "2026/04/08 (三)", title: "阿蘇火山口與絕境",
      activities: [
        { time: "09:00-09:30", desc: "熊本出發", type: "transit", details: "本日為【☀️晴天主線路】。如遇雨天請參考下方雨備選項。" },
        { time: "09:30-10:00", desc: "新阿蘇大橋展望所", type: "poi", tags: ["#攝影", "#峽谷"], details: "停車拍攝峽谷地貌" },
        { time: "10:15-11:30", desc: "上色見熊野座神社", type: "poi", tags: ["#秘境", "#森林"], details: "《螢火之森》氛圍的神社參道" },
        { time: "11:45-12:45", desc: "道之驛 阿蘇望之鄉 Kugino", type: "food", tags: ["#休息站", "#伴手禮"], details: "休息與當地採買" },
        { time: "13:15-15:30", desc: "草千里之濱 & 阿蘇中岳火口", type: "poi", tags: ["#火山", "#絕景"], details: "親眼目睹火山口煙霧與草千里壯闊草原" },
        { time: "17:30-19:00", desc: "牛奶之路 (Milk Road)", type: "transit", tags: ["#自駕秘境"], details: "絕美山路駛回熊本市區" },
        { time: "⚠️ 備註", desc: "🌧️ 雨天備案", type: "rest", tags: ["#雨備"], details: "如遇雨天改走：蓮華院誕生寺奧之院 -> 玉名拉麵 (千龍or大輪) -> 花之香酒造 -> 菊水浪漫館 -> 櫻町熊本商場 (Sakura Machi)" }
      ]
    },
    {
      day: 6, date: "2026/04/09 (四)", title: "熊本城與櫻並木",
      activities: [
        { time: "08:30-09:30", desc: "C/O 與熊本城", type: "poi", tags: ["#名城"], details: "退房後探訪熊本城" },
        { time: "10:00-11:20", desc: "熊本樂器行巡禮", type: "poi", tags: ["#購物", "#吉他"], details: "樂器店巡禮行程" },
        { time: "11:30-14:00", desc: "前往 道の駅 うきは", type: "transit", tags: ["#休息站"], details: "北返回福岡縣範圍，逛九州熱門休息站" },
        { time: "14:15-15:00", desc: "浮羽稻荷神社", type: "poi", tags: ["#紅色鳥居隧道"], details: "拍攝山坡上的壯觀鳥居長廊" },
        { time: "15:15-15:50", desc: "流川櫻並木", type: "poi", tags: ["#賞櫻"], details: "春季名場景河畔賞櫻" },
        { time: "16:00-18:30", desc: "駕車返回博多還車", type: "transit", details: "至トヨタレンタカー 博多駅東インター店還車" },
        { time: "19:00-22:00", desc: "入住天神東方快捷", type: "hotel", details: "C/I 福岡天神東方快捷酒店" }
      ]
    },
    {
      day: 7, date: "2026/04/10 (五)", title: "福岡市內自由日",
      activities: [
        { time: "08:30-18:00", desc: "市區自由活動", type: "poi", details: "這段時間未定，可安排市區購物行程或休整" },
        { time: "19:00-22:00", desc: "市區與屋台", type: "food", tags: ["#美食", "#屋台"], details: "探索福岡市區天神等屋台" }
      ]
    },
    {
      day: 8, date: "2026/04/11 (六)", title: "準備歸途",
      activities: [
        { time: "08:00-09:30", desc: "早餐時光", type: "food", details: "享用酒店豐盛早餐" },
        { time: "09:30-10:00", desc: "C/O 退房", type: "hotel", details: "" },
        { time: "10:00-13:00", desc: "午餐及前往機場", type: "food", details: "最後市區午餐後前往福岡國際機場（而非桃園機場，應為前置筆誤）" },
        { time: "16:20-17:50", desc: "FUK 👉 TPE", type: "flight", details: "搭乘 AK1511 班機返台" },
        { time: "17:50", desc: "回到溫暖的家", type: "rest", details: "行程圓滿結束！" }
      ]
    }
  ],
  wallet: [
    { type: "flight", title: "去程電子機票 TPE -> FUK", subtitle: "航班: AK1510", data: "N/A", qrMode: false },
    { type: "flight", title: "回程電子機票 FUK -> TPE", subtitle: "航班: AK1511", data: "N/A", qrMode: false },
    { type: "car", title: "租車取車憑證", subtitle: "預約編號: 09944856900", data: "09944856900", qrMode: false }
  ],
  goshuin: [
    { id: "g1", name: "赤間神宮", checked: false },
    { id: "g2", name: "太宰府天滿宫", checked: false },
    { id: "g3", name: "福島八幡宮", checked: false },
    { id: "g4", name: "上色見熊野座神社", checked: false }
  ]
};

const output = 'const tripData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('C:\\\\Users\\\\USER\\\\.gemini\\\\antigravity\\\\scratch\\\\trip-planner-app\\\\data.js', output);
console.log('Done!');
