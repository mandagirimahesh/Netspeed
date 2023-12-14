
var imageAddr = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bloemen_van_adderwortel_%28Persicaria_bistorta%2C_synoniem%2C_Polygonum_bistorta%29_06-06-2021._%28d.j.b%29.jpg";
var downloadSize = 7300000; //bytes

function ShowProgressMessage(msg) {
    if (console) {
        if (typeof msg == "string") {
            console.log(msg);
        } else {
            for (var i = 0; i < msg.length; i++) {
                console.log(msg[i]);
            }
        }
    }
}

function InitiateSpeedDetection() {
    // ShowProgressMessage("Loading the image, please wait...");
    window.setTimeout(MeasureConnectionSpeed, 1);
    let pro2 = document.getElementById('pro2')
    let btn = document.getElementById('testbtn')
    pro2.classList.add('spin')
    btn.classList.add('nospin')
};

function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }

    download.onerror = function (err, msg) {
        ShowProgressMessage("Invalid image, or error downloading");
    }

    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        // ShowProgressMessage([
        //     "Your connection speed is:",
        //     speedBps + " bps",
        //     speedKbps + " kbps",
        //     speedMbps + " Mbps"
        // ]);

        let h2tag = document.getElementById('a12');
        let pro2 = document.getElementById('pro2')
        let btn = document.getElementById('testbtn')

        h2tag.innerHTML = speedMbps + ' Mbps';
        pro2.style.transform = `rotate(${speedMbps}deg)`;
        btn.style.transform = `rotate(-${speedMbps}deg)`;
        pro2.classList.remove('spin')
        btn.classList.remove('nospin')




        // setTimeout(InitiateSpeedDetection, 500);
    }
}