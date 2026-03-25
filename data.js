const tripData = {
    flights: [
    { type: "去程", flightNo: "BR106", airline: "長榮航空", departure: {time: "08:10", airport: "TPE 桃園(第2航廈)"}, arrival: {time: "11:15", airport: "FUK 福岡(國際線)"}, baggage: "計重制 23kg" },
    { type: "回程", flightNo: "BR105", airline: "長榮航空", departure: {time: "12:15", airport: "FUK 福岡(國際線)"}, arrival: {time: "13:50", airport: "TPE 桃園(第2航廈)"}, baggage: "計重制 23kg" }
  ],
  transport: { rentalCar: { reservationNo: "RC-888999", time: "2026/04/07 10:00 - 2026/04/09 18:00", mapUrl: "", location: "博多車站前營業所" } },

  hotels: [
    {
      id: "webase",
      name: "WeBase Hakata",
      nights: 1,
      checkInDate: "2026/04/04",
      checkOutDate: "2026/04/05",
      checkInTime: "16:00",
      checkOutTime: "11:00",
      location: "福岡 中洲川端",
      mapUrl: "https://maps.apple.com/?q=WeBase+Hakata",
      roomType: "雙層床私人房 (4人用)",
      meal: "含早餐 07:00-09:30"
    },
    {
      id: "croom",
      name: "博多祇園西鐵克魯姆酒店",
      nights: 2,
      checkInDate: "2026/04/05",
      checkOutDate: "2026/04/07",
      checkInTime: "15:00",
      checkOutTime: "11:00",
      location: "福岡 櫛田神社前",
      mapUrl: "https://maps.apple.com/?q=Nishitetsu+Hotel+CROOM+Hakata+Gion+Kushida+Shrine",
      roomType: "住宅雙人房 (帶洗衣機與小廚房)",
      meal: "無早餐 06:30-10:00 (可加購)"
    },
    {
      id: "daiwa",
      name: "大和魯內酒店熊本銀座通PREMIER",
      nights: 2,
      checkInDate: "2026/04/07",
      checkOutDate: "2026/04/09",
      checkInTime: "14:00",
      checkOutTime: "11:00",
      location: "熊本 花畑町",
      mapUrl: "https://maps.apple.com/?q=Daiwa+Roynet+Hotel+Kumamoto",
      roomType: "豪華特大床房",
      meal: "無早餐 06:30-10:00 (可加購)"
    },
    {
      id: "oriental",
      name: "福岡天神東方快捷酒店",
      nights: 2,
      checkInDate: "2026/04/09",
      checkOutDate: "2026/04/11",
      checkInTime: "15:00",
      checkOutTime: "11:00",
      location: "福岡 天神",
      mapUrl: "https://maps.apple.com/?q=Hotel+Oriental+Express+Fukuoka+Tenjin",
      roomType: "標準大床房",
      meal: "無早餐 06:30-10:00 (可加購)"
    }
  ],
  itinerary: [
    {
      day: 1,
      date: "2026/04/04 (六)",
      title: "抵達福岡與博多微醺之夜",
      activities: [
        { time: "下午", desc: "抵達福岡", type: "hotel", details: "抵達飯店辦理入住，稍作休息。" },
        { time: "17:00-18:30", desc: "梅酒祭 (JR 博多站前)", type: "poi", tags: ["#祭典", "#梅酒"], details: "剛好趕上站前的梅酒祭活動，初步品嚐九州各地的梅酒風味。" },
        { time: "19:30", desc: "晚餐：博多在地料理", type: "food", tags: ["#晚餐", "#美食"], details: "找一家質感居酒屋，享受博多名物水炊鍋或明太子料理。" }
      ]
    },
    {
      day: 2,
      date: "2026/04/05 (日)",
      title: "威士忌盛事與博多散策",
      activities: [
        { time: "09:30-16:30", desc: "Fukuoka Whisky Stories 2026", type: "poi", tags: ["#威士忌", "#盛會"], details: "到下午集合前，我的行程都是參加這場年度威士忌盛會，與在地代理商及職人交流（地點通常在博多車站附近）。" },
        { time: "16:30-17:00", desc: "下午集合", type: "transit", details: "與旅伴會合，準備接下來的行程。" },
        { time: "17:00-18:30", desc: "攝影：博多運河城或那珂川", type: "poi", tags: ["#攝影", "#水景"], details: "拍攝都市水景與華燈初上的氛圍。" },
        { time: "晚上", desc: "晚餐：博多屋台體驗", type: "food", tags: ["#晚餐", "#屋台"], details: "中洲或天神屋台，體驗福岡特有的路邊攤職人精神。" }
      ]
    },
    {
      day: 3,
      date: "2026/04/06 (一)",
      title: "糸島海風與酒造巡禮",
      activities: [
        { time: "10:00-12:30", desc: "櫻井二見浦", type: "poi", tags: ["#攝影", "#絕景"], details: "純白鳥居與夫婦岩。建議使用 ND 濾鏡進行海浪長曝。" },
        { time: "12:30-14:00", desc: "午餐：糸島海鮮堂", type: "food", tags: ["#午餐", "#海鮮丼"], details: "正對海景享用極鮮海鮮丼。" },
        { time: "14:30-16:00", desc: "杉能舍 (Suginoya) 酒造", type: "poi", tags: ["#酒造", "#精釀"], details: "150年歷史酒造，採購在地精釀啤酒與清酒，參觀古樸建築。" },
        { time: "17:00", desc: "櫻井神社", type: "poi", tags: ["#神社", "#朱印"], details: "收集御朱印，欣賞細緻的神社木造工藝。" }
      ]
    },
    {
      day: 4,
      date: "2026/04/07 (二)",
      title: "自駕南下－古都、茶鄉與職人魂",
      activities: [
        { time: "09:00", desc: "博多取車出發", type: "transit", details: "開始自駕南下" },
        { time: "10:00-12:00", desc: "太宰府天滿宫", type: "poi", tags: ["#神社", "#朱印", "#建築"], details: "拍攝藤本壯介設計的「臨時本殿」，收集御朱印。" },
        { time: "12:15-13:15", desc: "休息站：基山 PA (下行)", type: "food", tags: ["#午餐", "#休息站"], details: "九州最大規模休息站，享用肉烏龍麵。" },
        { time: "14:15-15:30", desc: "八女中央大茶園", type: "poi", tags: ["#攝影", "#絕景"], details: "拍攝 4 月「新綠地毯」般的幾何茶田大景。" },
        { time: "15:45-17:00", desc: "八女白壁通 & 福島八幡宮", type: "poi", tags: ["#老街", "#酒造", "#朱印"], details: "收集著名的「剪紙御朱印」，走訪「繁桝」等百年酒造。" },
        { time: "19:00", desc: "抵達：熊本市區入住", type: "hotel", details: "入住熊本住宿" }
      ]
    },
    {
      day: 5,
      date: "2026/04/08 (三)",
      title: "阿蘇壯闊大景－靈境與火山",
      activities: [
        { time: "09:30-10:00", desc: "新阿蘇大橋", type: "poi", tags: ["#攝影", "#絕景"], details: "停車拍攝峽谷地貌。" },
        { time: "10:15-11:30", desc: "上色見熊野座神社", type: "poi", tags: ["#秘境", "#攝影", "#神社"], details: "拍攝杉林間的苔蘚石燈籠參道（《螢火之森》氛圍）。" },
        { time: "11:45-12:45", desc: "休息：阿蘇望之鄉 Kugino", type: "poi", tags: ["#休息站", "#伴手禮"], details: "南阿蘇最美休息站，補給阿蘇精釀啤酒。" },
        { time: "13:15-15:30", desc: "草千里之濱 & 午餐", type: "poi", tags: ["#午餐", "#火山", "#攝影"], details: "拍攝火山倒影，享用赤牛丼。" },
        { time: "15:45-17:00", desc: "阿蘇中岳火口", type: "poi", tags: ["#火山", "#絕景"], details: "親眼目睹活火山口的震撼煙霧。" },
        { time: "晚上", desc: "晚餐：熊本馬肉料理 & 球磨燒酎", type: "food", tags: ["#晚餐", "#熊本特色"], details: "推薦： 菅乃屋或在地居酒屋。" }
      ]
    },
    {
      day: 6,
      date: "2026/04/09 (四)",
      title: "北上博多－神社隧道與回程還車",
      activities: [
        { time: "09:30-11:30", desc: "熊本城探索", type: "poi", tags: ["#古城", "#攝影"], details: "拍攝「武者返」石垣建築美學。" },
        { time: "11:30-13:00", desc: "離開熊本往北行駛", type: "transit", details: "北上前往浮羽" },
        { time: "13:00-14:00", desc: "休息：道之驛 浮羽", type: "poi", tags: ["#休息站", "#伴手禮"], details: "連續多年九州第一休息站，採購果實酒與地酒。" },
        { time: "14:15-15:30", desc: "浮羽稻荷神社", type: "poi", tags: ["#攝影", "#神社", "#絕景"], details: "拍攝山坡上的 91 座紅色鳥居隧道與平原大景。" },
        { time: "16:15-17:00", desc: "休息：基山 PA (上行)", type: "food", tags: ["#點心", "#休息站"], details: "買份現烤梅枝餅。" },
        { time: "18:30-19:00", desc: "博多車站還車", type: "transit", details: "加滿油後準時還車，結束自駕行程。" }
      ]
    },
    {
      day: 7,
      date: "2026/04/10 (五)",
      title: "糸島海景 · 咖啡悠活",
      activities: [
        { time: "10:00", desc: "搭乘地下鐵/巴士前往糸島", type: "transit", duration: "1h", tags: [], mapUrl: "" },
        { time: "11:00-12:30", desc: "櫻井二見浦 夫婦岩", type: "poi", tags: ["#海景", "#打卡"], details: "海中白色鳥居，絕美打卡點。", mapUrl: "https://maps.apple.com/?q=Sakurai+Futamigaura" },
        { time: "12:30-14:00", desc: "午餐：海邊咖啡廳 (Sunset Cafe)", type: "food", tags: ["#海景午餐", "#咖啡"], details: "享受海景與悠閒午餐。", mapUrl: "" },
        { time: "14:30-16:00", desc: "棕櫚樹鞦韆 / 雜貨店巡禮", type: "poi", tags: ["#散步", "#拍照"], mapUrl: "" },
        { time: "16:00-17:00", desc: "返回天神市區", type: "transit", duration: "1h", mapUrl: "" },
        { time: "17:00-19:30", desc: "天神地下街 / 博多運河城 購物", type: "poi", tags: ["#購物", "#伴手禮"], mapUrl: "https://maps.apple.com/?q=Tenjin+Underground+Mall" },
        { time: "19:30-21:30", desc: "晚餐：和牛燒肉 (肉一 或 多牛)", type: "food", tags: ["#美食", "#燒肉"], details: "高CP值和牛燒肉，需排隊。", mapUrl: "https://maps.apple.com/?q=Yakiniku+Nikuichi" },
        { time: "22:00", desc: "休息 @ 福岡天神東方快捷酒店", type: "hotel", mapUrl: "https://maps.apple.com/?q=Hotel+Oriental+Express+Fukuoka+Tenjin" }
      ]
    },
    {
      day: 8,
      date: "2026/04/11 (六)",
      title: "最後採買 · 滿載而歸",
      activities: [
        { time: "09:00", desc: "悠閒早餐 & 整理行李", type: "rest", tags: [], mapUrl: "" },
        { time: "10:30-12:30", desc: "市區最後衝刺購買伴手禮 (努努雞、明太子)", type: "poi", tags: ["#購物", "#伴手禮"], details: "不可錯過的福岡代表伴手禮。", mapUrl: "https://maps.apple.com/?q=Hakata+Station" },
        { time: "13:00", desc: "前往福岡機場", type: "transit", tags: [], mapUrl: "https://maps.apple.com/?q=Fukuoka+Airport" },
        { time: "13:30-15:00", desc: "機場報到 & 免稅店最後採買", type: "poi", tags: ["#機場", "#免稅"], mapUrl: "" },
        { time: "16:00", desc: "搭機返台", type: "flight", tags: ["#回程", "#飛行"], mapUrl: "" },
        { time: "17:30", desc: "抵達溫暖的家", type: "poi", tags: [], mapUrl: "" }
      ]
    }
  ],
    wallet: [
    { type: "flight", title: "去程電子機票 TPE -> FUK", subtitle: "航班: BR106", data: "*** 已隱藏 ***", qrMode: false },
    { type: "flight", title: "回程電子機票 FUK -> TPE", subtitle: "航班: BR105", data: "*** 已隱藏 ***", qrMode: false },
    { type: "car", title: "租車取車憑證", subtitle: "預約編號: RC-888999", data: "RC-888999", qrMode: false }
  ],
  goshuin: [
    { id: "g1", name: "櫛田神社 (博多)", checked: false },
    { id: "g2", name: "太宰府天滿宮", checked: false },
    { id: "g3", name: "熊本城加藤神社", checked: false },
    { id: "g4", name: "阿蘇神社", checked: false }
  ]
};
