var fso = new ActiveXObject("Scripting.FileSystemObject");
var f = fso.OpenTextFile("c:\\Users\\USER\\.gemini\\antigravity\\scratch\\trip-planner-app\\data.js", 1, false, -1);
var jsCode = f.ReadAll();
f.Close();

try {
    eval(jsCode);
    if (typeof tripData !== "undefined" && tripData.itinerary && tripData.itinerary.length === 8) {
        WScript.Echo("Syntax OK - 8 Days loaded");
    } else {
        WScript.Echo("Syntax OK but data incomplete");
    }
} catch(e) {
    WScript.Echo("Syntax Error: " + e.message);
}
