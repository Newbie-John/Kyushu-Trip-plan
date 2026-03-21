$ErrorActionPreference = "Stop"

$dataJsPath = "c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\data.js"
$content = [System.IO.File]::ReadAllText($dataJsPath, [System.Text.Encoding]::UTF8)

# Find "福岡天神東方快捷酒店" section to fix the typo
$orientalIdx = $content.IndexOf('"福岡天神東方快捷酒店"')
if ($orientalIdx -gt 0) {
    # It says: roomType: "標準大床  itinerary: [
    # We will just replace everything from 'roomType: "標準大床' to 'itinerary: ['
    # But since the string might be mangled, let's use a regex
    $content = $content -replace '(?s)roomType:\s*"標準大床[^\n]*?itinerary:\s*\[', "roomType: `"標準大床房`",`r`n      meal: `"無早餐 06:30-10:00 (可加購)`"`r`n    }`r`n  ],`r`n  itinerary: ["
    
    $utf8NoBom = New-Object System.Text.UTF8Encoding $False
    [System.IO.File]::WriteAllText($dataJsPath, $content, $utf8NoBom)
    Write-Output "Fixed Oriental Hotel structure"
} else {
    Write-Output "Hotel not found"
}
