$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

$workbook = $excel.Workbooks.Add()
$sheet = $workbook.Worksheets.Item(1)
$sheet.Name = 'Kyushu Locations'

$headers = @("地點性質", "店名 (漢字)", "地址", "Google 導航")
for ($i = 0; $i -lt $headers.Length; $i++) {
    $sheet.Cells.Item(1, $i + 1) = $headers[$i]
    $sheet.Cells.Item(1, $i + 1).Font.Bold = $true
    $sheet.Cells.Item(1, $i + 1).Interior.ColorIndex = 15
}

$locations = @(
    @("樂器店", "島村楽器 COCOSA熊本店", "熊本縣熊本市中央區下通1丁目3-8 COCOSA 3F", "https://www.google.com/maps/search/?api=1&query=%E5%B3%B6%E6%9D%91%E6%A5%BD%E5%99%A8+COCOSA%E7%86%8A%E6%9C%AC%E5%BA%97"),
    @("樂器店", "大谷楽器 (Otanigakki)", "熊本縣熊本市中央區上通町7-1", "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E8%B0%B7%E6%A5%BD%E5%99%A8+%E7%86%8A%E6%9C%AC%E4%B8%8A%E9%80%9A"),
    @("樂器店", "島村楽器 AMU PLAZA博多店", "福岡縣福岡市博多區博多駅中央街1-1 アミュプラザ博多 7F", "https://www.google.com/maps/search/?api=1&query=%E5%B3%B6%E6%9D%91%E6%A5%BD%E5%99%A8+%E3%82%A2%E3%83%9F%E3%83%A5%E3%83%97%E3%83%A9%E3%82%B6%E5%8D%9A%E5%A4%9A%E5%BA%97"),
    @("樂器店", "島村楽器 岩田屋福岡店", "福岡縣福岡市中央區天神2丁目5-35 岩田屋本店新館 7F", "https://www.google.com/maps/search/?api=1&query=%E5%B3%B6%E6%9D%91%E6%A5%BD%E5%99%A8+%E5%B2%A9%E7%94%B0%E5%B1%8B%E7%A6%8F%E5%B2%A1%E5%BA%97"),
    @("樂器店", "黒澤楽器 福岡ミーナ天神店", "福岡縣福岡市中央區天神4丁目3-8 ミーナ天神 8F", "https://www.google.com/maps/search/?api=1&query=%E3%82%AF%E3%83%AD%E3%82%B5%E3%83%AF%E6%A5%BD%E5%99%A8+%E7%A6%8F%E5%B2%A1%E3%83%9F%E3%83%BC%E3%83%8A%E5%A4%A9%E7%A5%9E%E5%BA%97"),
    @("樂器店", "石橋楽器 福岡パルコ店", "福岡縣福岡市中央區天神2丁目11-1 福岡パルコ 8F", "https://www.google.com/maps/search/?api=1&query=%E3%82%A4%E3%82%B7%E3%83%90%E3%82%B7%E6%A5%BD%E5%99%A8+%E7%A6%8F%E5%B2%A1%E3%83%91%E3%83%AB%E3%82%B3%E5%BA%97"),
    @("住宿", "大和ROYNET飯店 熊本銀座通店", "熊本縣熊本市中央區花畑町10-22", "https://www.google.com/maps/search/?api=1&query=%E3%83%80%E3%82%A4%E3%83%AF%E3%83%AD%E3%82%A4%E3%83%8D%E3%83%83%E3%83%83%E3%83%88%E3%83%9B%E3%83%86%E3%83%AB%E7%86%8A%E6%9C%AC%E9%8A%80%E5%BA%A7%E9%80%9A%E3%82%8A"),
    @("住宿", "博多祇園櫛田神社前西鐵克魯姆酒店", "福岡縣福岡市博多區祇園町6-30", "https://www.google.com/maps/search/?api=1&query=%E8%A5%BF%E9%89%84%E3%83%9B%E3%83%86%E3%83%AB+%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%A0%E5%8D%9A%E5%A4%9A%E7%A5%87%E5%9C%92+%E6%AB%9B%E7%94%B0%E7%A5%9E%E7%A4%BE%E5%89%8D"),
    @("住宿", "WeBase Hakata", "福岡縣福岡市博多區店屋町5-9", "https://www.google.com/maps/search/?api=1&query=WeBase+%E5%8D%9A%E5%A4%9A"),
    @("住宿", "福岡天神東方快捷酒店", "福岡縣福岡市中央區天神3丁目3-14", "https://www.google.com/maps/search/?api=1&query=%E3%83%9B%E3%83%86%E3%83%AB%E3%82%AA%E3%83%AA%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AC%E3%82%B9%E7%A6%8F%E5%B2%A1%E5%A4%A9%E7%A5%9E"),
    @("餐廳/美食", "麺屋一矢 (Ramen Isshi)", "福岡縣福岡市博多區中洲2-6-12 第5ラインビル 1F", "https://www.google.com/maps/search/?api=1&query=%E9%BA%BA%E5%B1%8B%E4%B8%80%E7%9F%A2+%E4%B8%AD%E6%B4%B2"),
    @("餐廳/美食", "BEERKICHI (ビアキチ)", "福岡縣福岡市中央區渡邊通5丁目14-21", "https://www.google.com/maps/search/?api=1&query=BEERKICHI+%E7%A6%8F%E5%B2%A1"),
    @("餐廳/美食", "もつ鍋一藤 (牛腸鍋一藤)", "福岡縣福岡市 (擁有多間分店，依行程選擇)", "https://www.google.com/maps/search/?api=1&query=%E3%82%82%E3%81%A4%E9%8D%8B%E4%B8%80%E8%97%A4+%E7%A6%8F%E5%B2%A1"),
    @("餐廳/美食", "もつ鍋おおやま (牛腸鍋大山)", "福岡縣福岡市 (擁有多間分店，依行程選擇)", "https://www.google.com/maps/search/?api=1&query=%E3%82%82%E3%81%A4%E9%8D%8B%E3%81%8A%E3%81%8A%E3%82%84%E3%81%BE+%E7%A6%8F%E5%B2%A1"),
    @("餐廳/美食", "珈琲美美 (Cafe Bimi)", "福岡縣福岡市中央區赤坂2-6-27", "https://www.google.com/maps/search/?api=1&query=%E7%8F%88%E7%90%B2%E7%BE%8E%E7%BE%8E"),
    @("餐廳/美食", "フルフル パンとワイン (Full Full)", "福岡縣內麵包與葡萄酒專門店", "https://www.google.com/maps/search/?api=1&query=%E3%83%95%E3%83%AB%E3%83%95%E3%83%AB+%E3%83%91%E3%83%B3%E3%81%A8%E3%83%AF%E3%82%A4%E3%83%B3+%E7%A6%8F%E5%B2%A1"),
    @("景點/神社", "中司孫太郎稲荷神社", "福岡縣福岡市博多區博多駅前1丁目 (附近)", "https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E5%8F%B8%E5%AD%AB%E5%A4%AA%E9%83%8E%E7%A8%B2%E8%8D%B7%E7%A5%9E%E7%A4%BE+%E7%A6%8F%E5%B2%A1"),
    @("購物/百貨", "博多阪急百貨", "福岡縣福岡市博多區博多駅中央街1-1", "https://www.google.com/maps/search/?api=1&query=%E5%8D%9A%E5%A4%9A%E9%98%AA%E6%80%A5"),
    @("購物/超市", "マックスバリュ (MaxValu Express 博多祇園店)", "福岡縣福岡市博多區祇園町7-20", "https://www.google.com/maps/search/?api=1&query=MaxValu+Express+%E5%8D%9A%E5%A4%9A%E7%A5%87%E5%9C%92%E5%BA%97"),
    @("購物/超市", "レガネットキュート (Reganet Cute 中洲川端店)", "福岡縣福岡市博多區上川端町8-23", "https://www.google.com/maps/search/?api=1&query=%E3%83%AC%E3%82%AC%E3%83%8D%E3%83%83%E3%83%88%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%88+%E4%B8%AD%E6%B4%B2%E5%B7%9D%E7%AB%AF%E5%BA%97"),
    @("購物/超市", "レガネット天神 (西鐵超市Reganet天神店)", "福岡縣福岡市中央區天神2-11-3 ソラリアステージ M3F", "https://www.google.com/maps/search/?api=1&query=%E3%83%AC%E3%82%AC%E3%83%8D%E3%83%83%E3%83%88%E5%A4%A9%E7%A5%9E"),
    @("交通", "桃園國際機場 (TPE) T1", "桃園市大園區航站南路15號", "https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4%E7%AC%AC%E4%B8%80%E8%88%AA%E5%BB%88"),
    @("交通", "福岡國際機場 (FUK) T1", "福岡県福岡市博多区下臼井778-1", "https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E5%B2%A1%E7%A9%BA%E6%B8%AF+%E5%9B%BD%E9%9A%9B%E7%B7%9A%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"),
    @("交通", "JR博多站", "福岡県福岡市博多区博多駅中央街1-1", "https://www.google.com/maps/search/?api=1&query=JR%E5%8D%9A%E5%A4%9A%E9%A7%85"),
    @("交通", "門司港駅", "福岡県北九州市門司区西海岸1丁目5-31", "https://www.google.com/maps/search/?api=1&query=%E9%96%80%E5%8F%B8%E6%B8%AF%E9%A7%85"),
    @("景點", "博多站前廣場", "福岡県福岡市博多区博多駅中央街1-1", "https://www.google.com/maps/search/?api=1&query=%E5%8D%9A%E5%A4%9A%E9%A7%85%E5%89%8D%E5%BA%83%E5%A0%B4"),
    @("景點", "唐戶市場", "山口県下関市唐戸町5-50", "https://www.google.com/maps/search/?api=1&query=%E5%94%90%E6%88%B8%E5%B8%82%E5%A0%B4"),
    @("景點", "赤間神宮", "山口県下関市阿弥陀寺町4-1", "https://www.google.com/maps/search/?api=1&query=%E8%B5%A4%E9%96%93%E7%A5%9E%E5%AE%AE"),
    @("景點", "九州鐵道紀念館", "福岡県北九州市門司区清滝2丁目3-29", "https://www.google.com/maps/search/?api=1&query=%E4%B9%9D%E5%B7%9E%E9%89%84%E9%81%93%E8%A8%98%E5%BF%B5%E9%A4%A8"),
    @("景點", "門司港懷舊區", "福岡県北九州市門司区港町", "https://www.google.com/maps/search/?api=1&query=%E9%96%80%E5%8F%B8%E6%B8%AF%E3%83%AC%E3%83%88%E3%83%AD"),
    @("景點", "小倉市區", "福岡県北九州市小倉北区", "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E5%80%89%E9%A7%85"),
    @("交通", "トヨタレンタカー 博多駅東インター店", "福岡県福岡市博多区東比恵1-4-10", "https://www.google.com/maps/search/?api=1&query=%E3%83%88%E3%83%A8%E3%82%BF%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%AB%E3%83%BC+%E5%8D%9A%E5%A4%9A%E9%A7%85%E6%9D%B1%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E5%BA%97"),
    @("景點", "太宰府天滿宫", "福岡県太宰府市宰府4丁目7-1", "https://www.google.com/maps/search/?api=1&query=%E5%A4%AA%E5%AE%B0%E5%BA%9C%E5%A4%A9%E6%BA%80%E5%AE%AE"),
    @("景點", "基山PA (下行)", "佐賀県三養基郡基山町小倉", "https://www.google.com/maps/search/?api=1&query=%E5%9F%BA%E5%B1%B1PA+%E4%B8%8B%E3%82%8A"),
    @("景點", "八女白壁區", "福岡県八女市本町", "https://www.google.com/maps/search/?api=1&query=%E5%85%AB%E5%A5%B3%E7%99%BD%E5%A3%81%E3%81%AE%E7%94%BA%E4%B8%A6%E3%81%BF"),
    @("景點", "福島八幡宮", "福岡県八女市本町105-1", "https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E5%B3%B6%E5%85%AB%E5%B9%A1%E5%AE%AE"),
    @("景點", "新阿蘇大橋展望所", "熊本県阿蘇郡南阿蘇村立野", "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E9%98%BF%E8%98%87%E5%A4%A7%E6%A9%8B%E5%B1%95%E6%9C%9B%E6%89%80"),
    @("景點", "上色見熊野座神社", "熊本県阿蘇郡高森町上色見2619", "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%89%B2%E8%A6%8B%E7%86%8A%E9%87%8E%E5%BA%A7%E7%A5%9E%E7%A4%BE"),
    @("景點", "道之驛 阿蘇望之鄉 Kugino", "熊本県阿蘇郡南阿蘇村久石2801", "https://www.google.com/maps/search/?api=1&query=%E9%81%93%E3%81%AE%E9%A7%85+%E3%81%82%E3%81%9D%E6%9C%9B%E3%81%AE%E9%83%B7%E3%81%8F%E3%81%8E%E3%81%AE"),
    @("景點", "草千里之濱", "熊本県阿蘇市草千里ヶ浜", "https://www.google.com/maps/search/?api=1&query=%E8%8D%89%E5%8D%83%E9%87%8C%E3%83%B6%E6%B5%9C"),
    @("景點", "阿蘇中岳火口", "熊本県阿蘇市黒川", "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%98%87%E4%B8%AD%E5%B2%B3%E7%81%AB%E5%8F%A3"),
    @("景點", "牛奶之路 (Milk Road)", "熊本県阿蘇市", "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%98%87+%E3%83%9F%E3%83%AB%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%89"),
    @("景點", "蓮華院誕生寺 奧之院", "熊本県玉名市築地1512-77", "https://www.google.com/maps/search/?api=1&query=%E8%93%AE%E8%8F%AF%E9%99%A2%E8%AA%95%E7%94%9F%E5%AF%BA+%E5%A5%A5%E4%B9%8B%E9%99%A2"),
    @("餐廳", "千龍拉麵 (千龍ラーメン)", "熊本県玉名市高瀬下町468", "https://www.google.com/maps/search/?api=1&query=%E7%8E%89%E5%90%8D%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3+%E5%8D%83%E9%BE%8D"),
    @("餐廳", "大輪拉麵 (大輪ラーメン)", "熊本県玉名市中1154-1", "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E8%BC%AA%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3"),
    @("景點", "花之香酒造", "熊本県玉名郡和水町西吉地2226-2", "https://www.google.com/maps/search/?api=1&query=%E8%8A%B1%E3%81%AE%E9%A6%99%E9%85%92%E9%80%A0"),
    @("景點", "道之驛 菊水 (菊水浪漫館)", "熊本県玉名郡和水町江田455", "https://www.google.com/maps/search/?api=1&query=%E9%81%93%E3%81%AE%E9%A7%85+%E3%81%8D%E3%81%8F%E3%81%99%E3%81%84"),
    @("景點", "櫻町熊本 (SAKURA MACHI)", "熊本県熊本市中央区桜町3-10", "https://www.google.com/maps/search/?api=1&query=SAKURA+MACHI+Kumamoto"),
    @("景點", "熊本城", "熊本県熊本市中央区本丸1-1", "https://www.google.com/maps/search/?api=1&query=%E7%86%8A%E6%9C%AC%E5%9F%8E"),
    @("景點", "道の駅 うきは", "福岡県うきは市浮羽町山北729-2", "https://www.google.com/maps/search/?api=1&query=%E9%81%93%E3%81%AE%E9%A7%85+%E3%81%86%E3%81%8D%E3%81%AF"),
    @("景點", "浮羽稻荷神社", "福岡県うきは市浮羽町流川1513-9", "https://www.google.com/maps/search/?api=1&query=%E6%B5%AE%E7%BE%BD%E7%A8%B2%E8%8D%B7%E7%A5%9E%E7%A4%BE"),
    @("景點", "流川櫻並木", "福岡県うきは市浮羽町流川", "https://www.google.com/maps/search/?api=1&query=%E6%B5%81%E5%B7%9D%E6%A1%9C%E4%B8%A6%E6%9C%A8")
)

$row = 2
foreach ($loc in $locations) {
    $sheet.Cells.Item($row, 1).Value2 = $loc[0]
    $sheet.Cells.Item($row, 2).Value2 = $loc[1]
    $sheet.Cells.Item($row, 3).Value2 = $loc[2]
    
    $url = $loc[3]
    [void]$sheet.Hyperlinks.Add($sheet.Cells.Item($row, 4), $url, [Type]::Missing, "Google Maps 導航", "Google Maps 導航")
    
    $row++
}

$range = $sheet.UsedRange
$range.EntireColumn.AutoFit() | Out-Null
$range.Borders.LineStyle = 1

$savePath = "C:\Users\USER\OneDrive\Desktop\Kyushu_Locations.xlsx"
if (Test-Path $savePath) { Remove-Item $savePath -Force }
$workbook.SaveAs($savePath)
$workbook.Close()
$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
Remove-Variable excel
Write-Output "Excel XLSX Saved to $savePath"
