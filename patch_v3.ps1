$ErrorActionPreference = "Stop"

$dataJsPath = "c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\data.js"
$flightsText = [System.IO.File]::ReadAllText("c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\flights.txt", [System.Text.Encoding]::UTF8)
$walletText = [System.IO.File]::ReadAllText("c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\wallet.txt", [System.Text.Encoding]::UTF8)
$daysText = [System.IO.File]::ReadAllText("c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\days.txt", [System.Text.Encoding]::UTF8)

$content = [System.IO.File]::ReadAllText($dataJsPath, [System.Text.Encoding]::UTF8)

# 1. Replace flights
# Wait, my previous script ALREADY replaced flights and wallet! 
# The previous script replaced 'flights: [], //...' with the mangled flightsText.
# So now they are mangled in data.js! I need to replace the mangled text.
# The mangled text starts at 'flights: [' and ends at 'transport: {...},'.
# Let's just use regular expressions to replace the whole block.
$content = $content -replace '(?s)flights:\s*\[.*?transport:\s*\{.*?\},', $flightsText

# 2. Replace wallet
# The mangled wallet is: 'wallet: [ ... ],'
$content = $content -replace '(?s)wallet:\s*\[[^\]]*?\s*\],', $walletText

# 3. Replace the mangled days 7 & 8
# The mangled text starts after Day 6.
$regex = '(?s)(^\s*\{\s*time:\s*"19:00",\s*desc:\s*"入住福岡天神東方快捷酒店".*?\}\s*\r?\n\s*\]\s*\r?\n\s*\})\s*\r?\n\s*\][^-]*'
$content = $content -replace $regex, ("`$1`r`n" + $daysText)

$utf8NoBom = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllText($dataJsPath, $content, $utf8NoBom)
Write-Output "Patch V3 Successful"
