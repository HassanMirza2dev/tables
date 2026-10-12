function GetTable() {
    let num = Number(document.querySelector("#table").value);
    let result = document.querySelector("#result");
    result.textContent="";
    console.log(result);
    for (let i = 1; i <= 10; i++) {
        console.log(num + " X " + i + " = " + (num * i));
        result.textContent += (num + " X " + i + " = " + (num * i) + "\n");
    }
    
}

let body = document.querySelector("body");

body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
body.style.backgroundColor = "#f1f5f9";
body.style.minHeight = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.padding = "20px";

let table = document.querySelector("#table");

table.style.width = "100%";
table.style.maxWidth = "320px";
table.style.padding = "14px 16px";
table.style.border = "2px solid #dbe3ef";
table.style.borderRadius = "10px";
table.style.outline = "none";
table.style.fontSize = "16px";
table.style.background = "#ffffff";
table.style.color = "#1e293b";
table.style.transition = "0.3s";

table.addEventListener("focus", function () {
    table.style.borderColor = "#2563eb";
    table.style.boxShadow = "0 0 0 4px rgba(37, 99, 235, 0.12)";
});

table.addEventListener("blur", function () {
    table.style.borderColor = "#dbe3ef";
    table.style.boxShadow = "none";
});

let button = document.querySelector("button");

button.style.width = "100%";
button.style.maxWidth = "320px";
button.style.marginTop = "15px";
button.style.padding = "14px";
button.style.background = "#2563eb";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.fontSize = "16px";
button.style.fontWeight = "600";
button.style.cursor = "pointer";
button.style.transition = "0.3s";

button.addEventListener("mouseenter", function () {
    button.style.background = "#1d4ed8";
    button.style.transform = "translateY(-2px)";
});

button.addEventListener("mouseleave", function () {
    button.style.background = "#2563eb";
    button.style.transform = "translateY(0)";
});

button.addEventListener("mousedown", function () {
    button.style.transform = "scale(0.98)";
});

button.addEventListener("mouseup", function () {
    button.style.transform = "translateY(-2px)";
});

let result = document.querySelector("#result");

result.style.width = "100%";
result.style.maxWidth = "320px";
result.style.marginTop = "20px";
result.style.padding = "20px";
result.style.background = "#ffffff";
result.style.borderRadius = "12px";
result.style.color = "#334155";
result.style.fontSize = "16px";
result.style.lineHeight = "2";
result.style.boxShadow = "5px 10px 20px rgba(0, 0, 0, 0.06)";
result.style.overflowWrap = "anywhere";
result.style.whiteSpace = "pre-line";


