const tripData = {
  flights: [
    { type: "去程", flightNo: "AK1510", airline: "AirAsia", departure: {time: "12:00", airport: "TPE 桃園(第1航廈)"}, arrival: {time: "15:20", airport: "FUK 福岡(國際線)"}, baggage: "計重制 20kg" },
    { type: "回程", flightNo: "AK1511", airline: "AirAsia", departure: {time: "16:20", airport: "FUK 福岡(國際線)"}, arrival: {time: "17:50", airport: "TPE 桃園(第1航廈)"}, baggage: "計重制 20kg" }
  ],
  transport: { rentalCar: { reservationNo: "09944856900", time: "2026/04/07 08:30 - 2026/04/09 18:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%88%E3%83%A8%E3%82%BF%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%AB%E3%83%BC+%E5%8D%9A%E5%A4%9A%E9%A7%85%E6%9D%B1%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E5%BA%97", location: "トヨタレンタカー 博多駅東インター店" } },
  hotels: [
    { id: "webase", name: "WeBase Hakata", nights: 1, checkInDate: "2026/04/04", checkOutDate: "2026/04/05", checkInTime: "16:00", checkOutTime: "11:00", location: "福岡 中洲川端", roomType: "雙層床私人房(4人用)", meal: "含早餐 07:00-09:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=WeBase+%E5%8D%9A%E5%A4%9A" },
    { id: "croom", name: "博多祇園櫛田神社前西鐵克魯姆酒店", nights: 2, checkInDate: "2026/04/05", checkOutDate: "2026/04/07", checkInTime: "15:00", checkOutTime: "11:00", location: "福岡 櫛田神社前", roomType: "住宅雙人房", meal: "無早餐 06:30-10:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%A5%BF%E9%89%84%E3%83%9B%E3%83%86%E3%83%AB+%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%A0%E5%8D%9A%E5%A4%9A%E7%A5%87%E5%9C%92+%E6%AB%9B%E7%94%B0%E7%A5%9E%E7%A4%BE%E5%89%8D" },
    { id: "daiwa", name: "大和ROYNET飯店熊本銀座通PREMIER", nights: 2, checkInDate: "2026/04/07", checkOutDate: "2026/04/09", checkInTime: "14:00", checkOutTime: "11:00", location: "熊本 花畑町", roomType: "豪華特大床房", meal: "無早餐 06:30-10:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%80%E3%82%A4%E3%83%AF%E3%83%AD%E3%82%A4%E3%83%8D%E3%83%83%E3%83%83%E3%83%88%E3%83%9B%E3%83%86%E3%83%AB%E7%86%8A%E6%9C%AC%E9%8A%80%E5%BA%A7%E9%80%9A%E3%82%8A" },
    { id: "oriental", name: "福岡天神東方快捷酒店", nights: 2, checkInDate: "2026/04/09", checkOutDate: "2026/04/11", checkInTime: "15:00", checkOutTime: "11:00", location: "福岡 天神", roomType: "標準大床房", meal: "含早餐 07:00-10:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9B%E3%83%86%E3%83%AB%E3%82%AA%E3%83%AA%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AC%E3%82%B9%E7%A6%8F%E5%B2%A1%E5%A4%A9%E7%A5%9E" }
  ],
  itinerary: [
    {
      day: 1, date: "2026/04/04 (六)", title: "抵達福岡與博多",
      activities: [
        { time: "12:00-15:20", desc: "TPE 👉 FUK 搭機", type: "flight", details: "搭乘 AK1510 前往福岡國際機場 T1" },
        { time: "15:40-16:20", desc: "前往住宿 Check-in", type: "hotel", details: "從機場搭車前往 WeBase Hakata 辦理入住手續" },
        { time: "16:40-18:30", desc: "傍晚市區觀光", type: "poi", tags: ["#散步", "#購物"], details: "選項 A：JR博多站前廣場\n選項 B：阪急百貨買明太子、番薯籤" },
        { time: "18:30-20:00", desc: "晚餐時間", type: "food", tags: ["#晚餐", "#隨意安排"], details: "晚餐未定，可在車站周遭解決" },
        { time: "20:00-22:00", desc: "歸宿休息", type: "hotel", tags: [], details: "返回 WeBase Hakata 休息" }
      ]
    },
    {
      day: 2, date: "2026/04/05 (日)", title: "威士忌特展與天神屋台",
      activities: [
        { time: "07:00-09:30", desc: "享用早餐", type: "food", details: "享用 WeBase Hakata 包含的日式/洋式早餐" },
        { time: "10:00-12:00", desc: "更換住宿旅館", type: "transit", details: "退房後，前往 西鐵克魯姆酒店 寄放行李或辦入住" },
        { time: "12:00-17:00", desc: "JWS FUKUOKA 2026", type: "poi", tags: ["#威士忌", "#盛會"], details: "參加 Japan Whisky Show Fukuoka 2026 威士忌展覽" },
        { time: "17:00-20:00", desc: "天神市區與屋台", type: "food", tags: ["#晚餐", "#福岡屋台"], details: "天神市區漫遊散步，並尋找屋台體驗" },
        { time: "20:00-22:00", desc: "休息 @ 西鐵克魯姆酒店", type: "hotel", details: "返回飯店休息" }
      ]
    },
    {
      day: 3, date: "2026/04/06 (一)", title: "門司港與跳島回憶",
      activities: [
        { time: "08:00-09:40", desc: "博多前往門司港", type: "transit", details: "搭乘JR前往小倉，再轉乘至門司港" },
        { time: "09:40-10:40", desc: "乘船至唐戶市場", type: "transit", details: "搭乘聯絡船前往本州下關的唐戶市場" },
        { time: "10:40-13:30", desc: "唐戶市場與赤間神宮", type: "food", tags: ["#海鮮", "#神社"], details: "品嚐現流海鮮，參訪赤間神宮" },
        { time: "13:50-16:00", desc: "門司港懷舊區", type: "poi", tags: ["#復古", "#打卡"], details: "返回門司港觀光，參觀「九州鐵道紀念館」" },
        { time: "16:00-18:40", desc: "晚餐：燒咖哩", type: "food", tags: ["#特色美食"], details: "門司港或折返小倉享用著名的燒咖哩" },
        { time: "19:00", desc: "返回福岡", type: "transit", details: "循原路線回博多" }
      ]
    },
    {
      day: 4, date: "2026/04/07 (二)", title: "自駕南下太宰府與熊本",
      activities: [
        { time: "08:30-09:30", desc: "前往取車", type: "transit", details: "前往「トヨタレンタカー 博多駅東インター店」辦理自駕手續" },
        { time: "10:00-12:00", desc: "太宰府天滿宫", type: "poi", tags: ["#神社", "#名勝"], details: "參拜福岡太宰府天滿宮，吃梅枝餅" },
        { time: "12:15-13:15", desc: "基山 PA 休息", type: "food", tags: ["#午餐", "#休息站"], details: "基山PA(下行)稍息並吃份午餐" },
        { time: "14:00-16:30", desc: "八女白壁區與福島八幡宮", type: "poi", tags: ["#街景", "#古蹟"], details: "拍攝古意盎然的茶都老街 (視天氣決定是否前往)" },
        { time: "16:50-18:20", desc: "自駕抵達熊本", type: "transit", details: "繼續南下駛入熊本市區" },
        { time: "19:00", desc: "入住大和ROYNET熊本", type: "hotel", details: "辦妥手續入住大和ROYNET飯店 熊本銀座通PREMIER" }
      ]
    },
    {
      day: 5, date: "2026/04/08 (三)", title: "阿蘇火山口與絕境",
      activities: [
        { time: "09:00-09:30", desc: "熊本出發", type: "transit", details: "【☀️晴天主要線路】" },
        { time: "09:30-10:00", desc: "新阿蘇大橋展望所", type: "poi", tags: ["#攝影", "#峽谷"], details: "停車拍攝壯闊斷層峽谷地貌" },
        { time: "10:15-11:30", desc: "上色見熊野座神社", type: "poi", tags: ["#秘境", "#森林"], details: "感受《螢火之森》純粹氛圍的階梯參道" },
        { time: "11:45-12:45", desc: "道之驛 阿蘇望之鄉 Kugino", type: "food", tags: ["#休息站", "#阿蘇牛"], details: "中途休息，採買當地物產" },
        { time: "13:15-15:30", desc: "草千里之濱 & 阿蘇中岳火口", type: "poi", tags: ["#火山", "#絕景"], details: "親眼目睹火山口煙霧與草千里壯闊草原" },
        { time: "17:30-19:00", desc: "走 牛奶之路 回程", type: "transit", tags: ["#自駕秘境"], details: "沿 Milk Road 絕美山稜線駛回熊本市區" },
        { time: "⚠️", desc: "🌧️ 雨天備案行程", type: "rest", tags: ["#雨備"], details: "如遇雨天改走：蓮華院誕生寺奧之院 -> 玉名拉麵 (千龍or大輪) -> 花之香酒造 -> 菊水浪漫館 -> 逛櫻町熊本市區 (Sakura Machi)" }
      ]
    },
    {
      day: 6, date: "2026/04/09 (四)", title: "名城、鳥居與歸途還車",
      activities: [
        { time: "08:30-10:00", desc: "熊本城探索", type: "poi", tags: ["#名城"], details: "退房後探訪修復中的熊本城" },
        { time: "10:00-11:20", desc: "樂器行巡禮", type: "poi", tags: ["#購物", "#吉他"], details: "熊本市區樂器行巡禮買伴手禮" },
        { time: "11:30-14:00", desc: "道の駅 うきは", type: "transit", tags: ["#休息站"], details: "驅車北返，逛九州知名道之驛休息站" },
        { time: "14:15-15:00", desc: "浮羽稻荷神社", type: "poi", tags: ["#紅色鳥居隧道"], details: "拍攝山坡上的壯觀鳥居長廊" },
        { time: "15:15-15:50", desc: "流川櫻並木", type: "poi", tags: ["#賞櫻"], details: "欣賞春季名場景的河畔櫻花林" },
        { time: "16:00-18:30", desc: "駛回博多還車", type: "transit", details: "至トヨタレンタカー 博多駅東インター店還車" },
        { time: "19:00-22:00", desc: "入住天神東方快捷", type: "hotel", details: "前往 福岡天神東方快捷酒店 辦妥手續並休息" }
      ]
    },
    {
      day: 7, date: "2026/04/10 (五)", title: "福岡市內自由與屋台",
      activities: [
        { time: "08:30-18:00", desc: "行程重點", type: "poi", details: "本日行程留白，可自由安排市區吃喝買" },
        { time: "19:00-22:00", desc: "福岡市區與屋台", type: "food", tags: ["#美食", "#屋台"], details: "探索福岡市區、體驗道地屋台文化" },
        { time: "22:00", desc: "回酒店休息", type: "rest", details: "為隔天回程整理行李" }
      ]
    },
    {
      day: 8, date: "2026/04/11 (六)", title: "機場採買與滿載而歸",
      activities: [
        { time: "08:00-09:30", desc: "早餐時光", type: "food", details: "享用 福岡天神東方快捷酒店 早餐" },
        { time: "09:30-10:00", desc: "退房", type: "hotel", details: "C/O 福岡天神東方快捷酒店" },
        { time: "10:00-13:00", desc: "前往機場與午餐", type: "transit", details: "市區午餐後前往福岡國際機場（而非桃園機場，應為原圖筆誤）" },
        { time: "16:20-17:50", desc: "FUK 👉 TPE 搭機", type: "flight", details: "搭乘 AK1511 班機返台，福岡國際機場 T1 -> 桃園國際機場 T1" },
        { time: "17:50", desc: "回到溫暖的家", type: "rest", details: "結束豐富的九州8日遊！" }
      ]
    }
  ],
  wallet: [
    { type: "flight", title: "去程機票 TPE ➔ FUK", subtitle: "起飛: 12:00 | 降落: 15:20", data: "AK1510", qrMode: false },
    { type: "flight", title: "回程機票 FUK ➔ TPE", subtitle: "起飛: 16:20 | 降落: 17:50", data: "AK1511", qrMode: false },
    { type: "car", title: "租車預約憑證", subtitle: "預約編號: 09944856900", data: "09944856900", qrMode: false }
  ],
  goshuin: [
    { id: "g1", name: "赤間神宮", checked: false },
    { id: "g2", name: "太宰府天滿宫", checked: false },
    { id: "g3", name: "福島八幡宮", checked: false },
    { id: "g4", name: "上色見熊野座神社", checked: false }
  ]
};
