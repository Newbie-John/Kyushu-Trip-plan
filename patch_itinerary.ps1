$path = "c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\data.js"
$content = Get-Content $path -Raw
$start = $content.IndexOf("    {`r`n      day: 1,")
if ($start -lt 0) { $start = $content.IndexOf("    {`n      day: 1,") }
$end = $content.IndexOf("    {`r`n      day: 7,")
if ($end -lt 0) { $end = $content.IndexOf("    {`n      day: 7,") }
$replacement = @"
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
        { time: "11:30-16:30", desc: "Fukuoka Whisky Stories 2026", type: "poi", tags: ["#威士忌", "#盛會"], details: "參加這場年度威士忌盛會，與在地代理商及職人交流（地點通常在博多車站附近）。" },
        { time: "17:00", desc: "攝影：博多運河城或那珂川", type: "poi", tags: ["#攝影", "#水景"], details: "拍攝都市水景與華燈初上的氛圍。" },
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
"@
$newContent = $content.Substring(0, $start) + $replacement + $content.Substring($end)
Set-Content -Path $path -Value $newContent -Encoding UTF8
Write-Host "Updated data.js"
