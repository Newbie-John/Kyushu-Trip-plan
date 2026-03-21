$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$dataJsPath = "c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\data.js"
$flightsText = Get-Content "c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\flights.txt" -Encoding UTF8 -Raw
$walletText = Get-Content "c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\wallet.txt" -Encoding UTF8 -Raw
$daysText = Get-Content "c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\days.txt" -Encoding UTF8 -Raw

$content = Get-Content $dataJsPath -Encoding UTF8 -Raw

# 1. Replace flights
$content = $content -replace '(?m)^\s*flights:\s*\[\],\s*//.*', $flightsText

# 2. Replace wallet
$content = $content -replace '(?m)^\s*wallet:\s*\[\],\s*//.*', $walletText

# 3. Replace the mangled days 7 & 8 from my previous bad script or to just replace the end of the file.
# Since my previous script ran and inserted mangled text, let's find the closing of day 6 and replace everything after.
# Day 6 ends with:
#        { time: "19:00", desc: "入住福岡天神東方快捷酒店", type: "hotel", mapUrl: "https://maps.apple.com/?q=Hotel+Oriental+Express+Fukuoka+Tenjin" }
#      ]
#    }
$regex = '(?m)(^\s*\{\s*time:\s*"19:00",\s*desc:\s*"入住福岡天神東方快捷酒店".*?\}\s*\r?\n\s*\]\s*\r?\n\s*\})\s*\r?\n\s*\][^-]*'
$content = $content -replace $regex, ("`$1`r`n" + $daysText)

$utf8NoBom = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllText($dataJsPath, $content, $utf8NoBom)
Write-Output "Patch V2 Successful"
