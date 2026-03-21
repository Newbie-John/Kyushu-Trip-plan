$ErrorActionPreference = "Stop"
$dataJsPath = "c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\data.js"
$content = [System.IO.File]::ReadAllText($dataJsPath, [System.Text.Encoding]::UTF8)

$idx = $content.IndexOf('"入住福岡天神東方快捷酒店"')
if ($idx -gt 0) {
    $closingBrace = $content.IndexOf('}', $idx)
    $match = [regex]::Match($content.Substring($closingBrace), '(?s)\}\s*\]\s*\}')
    if ($match.Success) {
        $cutLength = $closingBrace + $match.Index + $match.Length
        $cleanTop = $content.Substring(0, $cutLength)
        
        $daysText = [System.IO.File]::ReadAllText("c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\days.txt", [System.Text.Encoding]::UTF8)
        $walletText = [System.IO.File]::ReadAllText("c:\Users\USER\.gemini\antigravity\scratch\trip-planner-app\wallet.txt", [System.Text.Encoding]::UTF8)
        
        $goshuinStr = @"
  goshuin: [
    { id: "g1", name: "櫛田神社 (博多)", checked: false },
    { id: "g2", name: "太宰府天滿宮", checked: false },
    { id: "g3", name: "熊本城加藤神社", checked: false },
    { id: "g4", name: "阿蘇神社", checked: false }
  ]
};
"@

        $finalContent = $cleanTop + "," + "`r`n" + $daysText + "`r`n  " + $walletText + "," + "`r`n" + $goshuinStr
        
        $utf8NoBom = New-Object System.Text.UTF8Encoding $False
        [System.IO.File]::WriteAllText($dataJsPath, $finalContent, $utf8NoBom)
        Write-Output "Cleaned and reconstructed"
    } else { Write-Output "Match failed" }
} else { Write-Output "Idx failed" }
