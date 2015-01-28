var work = new Worker("js/w.js");
        //发送消息
        work.postMessage("100");
        // 监听消息
        work.onmessage = function(event) {
            alert(event.data);
        };