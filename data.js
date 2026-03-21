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
      title: "博多千年傳承與古城祭典",
      activities: [
        { time: "16:00-16:30", desc: "離開機場，搭乘地鐵至中洲川端站，入住 WeBase Hakata", type: "transit", duration: "30m", details: "預計 16:00 離開機場，搭乘地鐵僅 9 分鐘 即可抵達「中洲川端站」。\n入住 WeBase Hakata，這間飯店以巨大的貓咪裝置藝術聞名，非常適合第一站合照。" },
        { time: "17:00-18:30", desc: "博多舊市街散策 (東長寺、承天寺通、博多千年門)", type: "poi", mapUrl: "https://maps.apple.com/?q=Tochoji+Temple", duration: "1.5h", tags: ["#散步", "#攝影"], details: "東長寺：步行 10 分鐘即可抵達。這裡有日本最大的木造福岡大佛及紅色的五重塔。與東京淺草寺的擁擠不同，這裡更多了一份肅穆與禪意。\n承天寺通與千年門：穿過象徵古城入口的「博多千年門」，漫步在石板路上。這裡是烏龍麵與蕎麥麵的發源地，古色古香的街道非常適合拍攝具有層次感的街景。" },
        { time: "18:30-20:30", desc: "晚餐：博多牛腸鍋大山 / 9sWonder CRAFTBEER", type: "food", mapUrl: "https://maps.apple.com/?q=もつ鍋おおやま", duration: "2h", tags: ["#美食", "#精釀啤酒"], details: "內臟鍋（Motsunabe）是福岡的靈魂，與東京常見的精緻和食不同，這種豪邁且充滿蒜味的鍋物能瞬間拉近與這座城市的距離。\n搭配：帶著朋友們去 9sWonder CRAFTBEER HAKATA 喝一杯在地精釀。" },
        { time: "20:30-22:00", desc: "[二選一] 中洲屋台街 & 唐吉訶德散步", type: "poi", mapUrl: "https://maps.apple.com/?q=Nakasu+Yatai", duration: "1.5h", tags: ["#屋台", "#購物"], details: "中洲屋台街：沿著那珂川散步，拍攝經典的霓虹燈倒影。\n購物：驚安殿堂唐吉訶德 (中洲店) 就在步行距離內，適合第一晚補齊所有自駕前所需的雜物或零食。" },
        { time: "20:30-22:00", desc: "[二選一] 2026福岡城櫻花祭 (夜櫻點燈)", type: "poi", mapUrl: "https://maps.apple.com/?q=Fukuoka+Castle+Ruins", duration: "1.5h", tags: ["#櫻花", "#攝影"], details: "祭典資訊：2026 年預計於 3/25 - 4/5 舉行。\n搭乘地鐵至「赤坂站」步行 5 分鐘。這不是東京目黑川那種都市水道櫻花，而是古城遺跡、石牆與 1000 株櫻花的結合。\n攝影推薦：拍攝櫻花燈光在古城護城河中的倒影，光影效果極佳，是東京難以見到的壯闊景觀。" },
        { time: "22:00", desc: "休息 @ WeBase Hakata", type: "rest" }
      ]
    },
    {
      day: 2,
      date: "2026/04/05 (日)",
      title: "博多/天神 雙路線與夜櫻祭典",
      activities: [
        { time: "09:30-17:30", desc: "[路線A] 歷史與朱印: 櫛田神社 -> 東長寺 -> 吉塚鰻魚屋 -> 傳統工藝館", type: "poi", mapUrl: "https://maps.apple.com/?q=Kushida+Shrine", duration: "8h", tags: ["#朱印", "#歷史"], details: "專為想深度了解博多、感受「非東京」古都氛圍的人設計，地點高度集中，步行即可。\n09:30 櫛田神社：博多的守護神，收集御朱印的首選。這裡有巨大的「飾山笠」常設展示，非常有震撼力。\n10:30 東長寺：就在櫛田神社附近。擁有全日本最大的木造「福岡大佛」，五重塔在櫻花襯托下是絕佳攝影點。\n11:30 午餐 博多老舖美食：推薦「吉塚鰻魚屋」，一家有 150 年歷史的名店。或去承天寺附近尋找烏龍麵發源地的古老麵店。\n13:30 博多傳統工藝館/川端通商店街：可吹冷氣休息，看精緻的博多人形與織物，或尋找小點心。\n15:30 咖啡廳休息：找間精品咖啡 (如 Cafe Miel) 休息等待集合。" },
        { time: "09:30-17:30", desc: "[路線B] 潮流與血拚: 博多車站 -> 運河城 -> 天神大名 -> 精釀啤酒", type: "poi", mapUrl: "https://maps.apple.com/?q=Canal+City+Hakata", duration: "8h", tags: ["#購物", "#潮牌"], details: "專為喜歡休閒、逛街、尋找區域限定品牌的人設計。\n09:30 博多車站探索：頂樓的「鐵道神社」視野極佳，可以俯瞰整個博多灣與飛機起降。\n11:30 博多運河城午餐：有巨型商場與音樂噴泉秀。午餐可去「拉麵競技場」品嚐全日本各地的風拉麵。\n14:00 天神區域：喝杯新鮮在地精釀，逛天神地下街或「大名」巷弄。大名區有許多古著店與潮流選物店，氣氛非常放鬆。\n16:30 搭公車或地鐵回祇園/中洲準備集合。" },
        { time: "17:30", desc: "飯店或指定餐廳集合", type: "transit" },
        { time: "18:00-20:00", desc: "晚餐：雞肉火鍋 (水炊鍋)", type: "food", duration: "2h", tags: ["#美食", "#聚餐"], details: "慶祝酒展順利 & 旅伴重聚。清爽的雞肉火鍋非常適合在下午喝完威士忌後暖胃，且啤酒也非常好喝。" },
        { time: "20:00-22:00", desc: "壓軸：舞鶴公園 (福岡城跡) 賞夜櫻", type: "poi", mapUrl: "https://maps.apple.com/?q=Maizuru+Park", duration: "2h", tags: ["#夜櫻", "#祭典"], details: "從祇園站搭地鐵至「赤坂站」約 6 分鐘。\n這是櫻花祭最後一晚的重頭戲。古城石牆配上五彩燈光與千株櫻花，空間比目黑川大得多，更有祭典的豪邁感，絕對令人驚艷。" },
        { time: "22:00", desc: "入住博多祇園西鐵克魯姆酒店", type: "hotel", mapUrl: "https://maps.apple.com/?q=Nishitetsu+Hotel+CROOM+Hakata+Gion" }
      ]
    },
    {
      day: 3,
      date: "2026/04/06 (一)",
      title: "糸島海風與酒造漫步",
      activities: [
        { time: "09:30-10:30", desc: "出發前往糸島 (搭地鐵轉JR筑肥線)", type: "transit", duration: "1h", details: "從博多或天神搭乘地鐵直通 JR 筑肥線。" },
        { time: "10:30-12:30", desc: "櫻井二見浦：純白鳥居與夫婦岩 (海浪長曝)", type: "poi", mapUrl: "https://maps.apple.com/?q=Sakurai+Futamigaura", duration: "2h", tags: ["#絕景", "#攝影"], details: "從「九大學研都市站」轉乘巴士。這裡有矗立在海中的純白鳥居與夫婦岩。\n攝影點：建議使用減光鏡（ND）進行海浪長曝，純白鳥居在藍海背景下極具張力，是東京見不到的絕景。" },
        { time: "12:30-14:00", desc: "海景午餐：糸島海鮮堂 (特選海鮮丼)", type: "food", duration: "1.5h", tags: ["#海鮮", "#海景"], details: "這家店擁有海景第一排的視野，正對二見浦夫婦岩。招牌是「特選海鮮丼」，食材皆為糸島產。糸島因為地利之便，海鮮的新鮮度完全不輸築地，且價格親民。" },
        { time: "14:00-15:30", desc: "杉能舍 (Suginoya) 酒造 (地酒、精釀啤酒)", type: "poi", duration: "1.5h", tags: ["#酒造", "#伴手禮"], details: "步行或搭車前往擁有 150 年歷史的杉能舍酒造。他們不僅有傳統日本酒，更是福岡精釀啤酒先驅。\n必試：杉能舍麥酒 (Pale Ale 多次獲獎)、日本酒推薦「純米大吟釀 九州」(果香味重)。\n隱藏版：店內販售酒粕麵包與酒粕比薩，配新鮮啤酒是極品。" },
        { time: "15:30-17:30", desc: "文青選物店 / London Bus Cafe 看海咖啡", type: "poi", duration: "2h", tags: ["#咖啡", "#海風"], details: "逛逛參道附近的文青選物店，或在 London Bus Cafe（紅色雙層巴士）點杯咖啡看海，享受悠閒。" },
        { time: "18:00-20:00", desc: "返回博多 / 晚餐：信秀本店 (職人居酒屋 / 捲串)", type: "food", mapUrl: "https://maps.apple.com/?q=Nobuhide+Honten", duration: "2h", tags: ["#居酒屋", "#聚餐"], details: "博多傳奇居酒屋「信秀本店」。其「捲串」文化非常適合拍照，與東京烤雞肉串有很大區別。\n推薦：直接點「串燒拼盤」與「大杯生啤」。感受熱絡、大聲招呼的博多熱情氛圍。" },
        { time: "20:00", desc: "休息 @ 西鐵克魯姆酒店", type: "rest" }
      ]
    },
    {
      day: 4,
      date: "2026/04/07 (二)",
      title: "古都、新綠茶田與職人酒造之行",
      activities: [
        { time: "09:00-09:30", desc: "博多車站週邊取車 (租車自駕開始)", type: "transit", duration: "30m", details: "建議選擇 Toyota Rent-a-Car 或 Times，取車後直接上高速公路。" },
        { time: "10:00-12:00", desc: "太宰府天滿宫 (藤本壯介臨時本殿)", type: "poi", mapUrl: "https://maps.apple.com/?q=Dazaifu+Tenmangu", duration: "2h", tags: ["#朱印", "#建築"], details: "此時人潮剛開始聚集。建議拍攝藤本壯介設計的「臨時本殿」，其頂部的森林植栽與春季新綠非常契合。在此收集第一枚御朱印。" },
        { time: "12:15-13:15", desc: "基山 PA 休息站午餐 (肉烏龍麵)", type: "food", duration: "1h", details: "九州最大規模休息站。在此享用簡單午餐（推薦：肉烏龍麵），並可買到福岡與佐賀交界的各種特色伴手禮。" },
        { time: "14:00-15:00", desc: "八女中央大茶園 (攝影：新綠茶田幾何)", type: "poi", mapUrl: "https://maps.apple.com/?q=Yame+Central+Tea+Garden", duration: "1h", tags: ["#攝影", "#絕景"], details: "4月初是新茶長出嫩芽最翠綠的時刻。這比深綠色的夏季更具通透感。\n攝影：站在展望台可拍出幾何形狀的綠色地毯大景，視野可遠眺至有明海。" },
        { time: "15:15-16:00", desc: "福島八幡宫 (特殊剪紙御朱印)", type: "poi", mapUrl: "https://maps.apple.com/?q=Fukushima+Hachimangu", duration: "45m", tags: ["#朱印", "#藝術"], details: "這神社以極其華麗的剪紙御朱印聞名。4月通常有春季限定花卉款式，是朱印愛好者必收藝術品。" },
        { time: "16:00-17:00", desc: "八女白壁通 & 酒造巡禮 (繁桝 / 喜多屋)", type: "poi", mapUrl: "https://maps.apple.com/?q=Yame+Shirakabe", duration: "1h", tags: ["#酒造", "#老街"], details: "白壁老街的古樸建築非常適合街拍。身為酒商，可以尋找 4 月限定的「春酒（Haru-zake）」。喜多屋曾獲 IWC 冠軍，釀造工藝非常值得考察。" },
        { time: "17:00-18:30", desc: "驅車前往熊本市", type: "transit", duration: "1.5h", details: "從八女 IC 上高速公路前往熊本。這段路程約 1 小時，可欣賞夕陽下的九州田園。" },
        { time: "19:00-21:00", desc: "晚餐：熊本在地味 (馬肉料理 / 阿蘇啤酒)", type: "food", duration: "2h", tags: ["#美食", "#熊本特色"], details: "除了馬肉，一定要試試球磨燒酎與在地精釀「阿蘇啤酒」。" },
        { time: "21:00", desc: "入住大和魯內酒店熊本銀座通PREMIER", type: "hotel", mapUrl: "https://maps.apple.com/?q=Daiwa+Roynet+Hotel+Kumamoto" }
      ]
    },
    {
      day: 5,
      date: "2026/04/08 (三)",
      title: "阿蘇靈境與火山絕景自駕線",
      activities: [
        { time: "08:30", desc: "熊本市區出發", type: "transit", details: "從飯店取車，沿國道 57 號向東行駛。" },
        { time: "09:30-10:00", desc: "新阿蘇大橋展望所 (黑川峽谷地貌)", type: "poi", mapUrl: "https://maps.apple.com/?q=Shin-Aso+Ohashi+Bridge", duration: "30m", tags: ["#絕景", "#攝影"], details: "可以停車在「新阿蘇大橋展望所」，拍攝黑川峽谷的震撼地貌。這是一座壯觀的峽谷大橋。" },
        { time: "10:15-11:30", desc: "上色見熊野座神社 (森林系神祕神社)", type: "poi", mapUrl: "https://maps.apple.com/?q=Kamishikimi+Kumanoza+Shrine", duration: "1h 15m", tags: ["#秘境", "#朱印"], details: "神祕的森林神社，沿著 100 多座苔蘚石燈籠向上走，捕捉光影灑在杉林間的空靈感（非常適合長曝）。" },
        { time: "11:45-12:45", desc: "道之驛 阿蘇望之鄉 (阿蘇五岳全景 / 精釀啤酒)", type: "poi", mapUrl: "https://maps.apple.com/?q=Michi-no-Eki+Asobo-no-Sato+Kugino", duration: "1h", tags: ["#休息站", "#伴手禮"], details: "擁有壯觀的阿蘇五岳全景。大型休息站，這裡的販賣部可以買到「阿蘇在地精釀啤酒 (Aso Beer)」與新鮮水果酒。" },
        { time: "13:15-14:30", desc: "午餐：草千里區域 (赤牛丼)", type: "food", mapUrl: "https://maps.apple.com/?q=Kusasenri", duration: "1h 15m", tags: ["#美食", "#阿蘇特色"], details: "推薦在草千里景觀餐廳或草千里咖啡烘焙所用餐。必吃阿蘇特產「赤牛丼 (Akaushi Don)」。" },
        { time: "14:30-16:30", desc: "草千里之濱 與 阿蘇中岳火口 / 米塚", type: "poi", mapUrl: "https://maps.apple.com/?q=Mount+Aso", duration: "2h", tags: ["#火山", "#攝影"], details: "拍攝火山口噴發的白煙、草千里的湖泊倒影。開車路經時會看到渾圓可愛的「米塚 (Komezuka)」。" },
        { time: "16:45-17:45", desc: "阿蘇神社 (水基巡禮古街散步)", type: "poi", mapUrl: "https://maps.apple.com/?q=Aso+Shrine", duration: "1h", tags: ["#古蹟", "#朱印"], details: "參拜壯麗的樓門，並在神社前的「水基巡禮」古街散步拍照。" },
        { time: "18:00", desc: "回程：阿蘇牛奶之路 (Milk Road) 絕景大道夕陽", type: "transit", mapUrl: "https://maps.apple.com/?q=Milk+Road+Aso", tags: ["#自駕", "#夕陽"], details: "沿著阿蘇外輪山的稜線開車，在夕陽下俯瞰整座阿蘇火山盆地，景觀極度壯闊。" },
        { time: "19:30", desc: "回到熊本市區與休息 @ 大和魯內酒店", type: "hotel" }
      ]
    },
    {
      day: 6,
      date: "2026/04/09 (四)",
      title: "九州自駕：建築、神社與地酒之旅",
      activities: [
        { time: "09:00-11:00", desc: "熊本城 (天守閣與武者返石垣)", type: "poi", mapUrl: "https://maps.apple.com/?q=Kumamoto+Castle", duration: "2h", tags: ["#古城", "#攝影"], details: "欣賞戰後重建的宏偉天守閣與著名的「武者返」石垣（極具線條美感的建築攝影題材）。" },
        { time: "11:00-13:00", desc: "開車：熊本 -> 浮羽", type: "transit", duration: "2h", details: "沿九州自動車道北上，轉向大分自動車道。" },
        { time: "13:00-14:00", desc: "午餐：道之驛 浮羽 (筑後清酒/果實酒考察)", type: "food", mapUrl: "https://maps.apple.com/?q=Michi-no-Eki+Ukiha", duration: "1h", tags: ["#午餐", "#地產地銷"], details: "連續多年蟬聯九州第一的休息站。身為酒商，可以觀察其「地產地銷」的商業模式。這裡有非常豐富的福岡筑後地區清酒與特產果實酒（如柿子酒、葡萄酒）。農協 (JA) 與在地酒造合作開發適合年輕市場的輕量化果實酒，可提供選品靈感。" },
        { time: "14:15-15:30", desc: "浮羽稻荷神社 (91座紅色鳥居絕景)", type: "poi", mapUrl: "https://maps.apple.com/?q=Ukiha+Inari+Shrine", duration: "1h 15m", tags: ["#絕景", "#攝影"], details: "91 座紅色鳥居沿山脊延伸。從山頂往下拍，鳥居隧道會與下方的田園城鎮交疊，是絕佳的廣角或長焦壓縮攝影點。\n攝影器材建議：使用減光鏡 (ND) 進行長曝光捕捉雲流，或大光圈定焦鏡拍出鳥居堆疊的深邃感。" },
        { time: "15:30-16:15", desc: "開車：浮羽 -> 基山", type: "transit", duration: "45m" },
        { time: "16:15-17:00", desc: "休息：基山 PA (梅枝餅午茶)", type: "food", duration: "45m", details: "進入博多前的最後大型樞紐。這裡的梅枝餅（梅ヶ枝餅）非常有名，可以當作午茶。" },
        { time: "17:00-18:00", desc: "開車：基山 -> 博多車站", type: "transit", duration: "1h", details: "注意：這段路程接近下班時間，進入博多市區（都市高速）會非常擁擠，車流量會變大，建議預留緩衝提早出發。" },
        { time: "18:00-19:00", desc: "市區加油、還車", type: "transit", duration: "1h", details: "完成 3 天的九州自駕壯遊。" },
        { time: "19:00", desc: "入住福岡天神東方快捷酒店", type: "hotel", mapUrl: "https://maps.apple.com/?q=Hotel+Oriental+Express+Fukuoka+Tenjin" }
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