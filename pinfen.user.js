// ==UserScript==
// @name         查看评分
// @version      0.0.6
// @include      https://www.mcbbs.net/pinfen
// @author       xmdhs
// @description  查看评分。
// @namespace    xmdhs.top
// ==/UserScript==

(async function () {
    await fetch(`https://www.mcbbs.net/?new=no&mobile=no`)
    document.write(`<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>查看评分</title>
        <script src="https://cdn.jsdelivr.net/gh/golang/go@go1.16.3/misc/wasm/wasm_exec.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xmdhs/searchqanda/style.css">
        <script>let go;
        try {
            go = new Go();
        } catch (error) {
            alert("请更新浏览器")
        }
        window.t = false;
        async function fetchAndInstantiate() {
            const response = await fetch("https://cdn.jsdelivr.net/gh/xxmdhs/file/pinfen.wasm");
            const buffer = await response.arrayBuffer();
            const obj = await WebAssembly.instantiate(buffer, go.importObject)
            go.run(obj.instance);
            document.getElementById('q').removeAttribute("readOnly");
        }
        fetchAndInstantiate();
        function Form() {
            let text = document.querySelector("#q").value.toString();
            if (text == "") {
                return;
            }
            pinfen(text, (v) => {
                let a = document.getElementById("text").innerText;
                a = a + "\\n" + v;
                document.getElementById("text").innerText = a;
            }, (v) => {
                let a = document.getElementById("text");
                a.innerHTML = '<textarea id="confirmationText" class="text" cols="86" rows="20" name="confirmationText" style="width: 100%;overflow: auto;word-break: break-all;"></textarea>'
                let b = document.getElementById("confirmationText");
                b.value = v;
                t = false;
            })
        }
        </script>
    </head>
    
    <body>
        <div class="container-lg px-3 my-5 markdown-body">
            <h1>主页</h1>
            <p>总之懒得换了，就这样吧</p>
            <p>在下面那个框中输入 uid，然后回车</p>
            <form id="form"><input type="text" id="q" name="q" readonly="readonly" pattern="^\\d+$">
            <input type="submit" value="查询">
            </form>
            <div id="text"></div>
        </div>
    </body>
    </html>`)
    document.close();

    window.onload = () => {
        let f = document.getElementById("form");
        f.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!t) {
                t = true;
                Form();
            } else {
                alert("一次只能查询一个用户")
            }
        })
    }
})();

