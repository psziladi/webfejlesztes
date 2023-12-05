/*SZOLGALTATASOK KISZAMOLO*/
document.getElementById("mybutton").addEventListener
    ("click", kiszamol);

function kiszamol() {
    let dij = 100;

    const a = document.getElementById("per").checked;
    const b = document.getElementById("okirat").checked;
    const c = document.getElementById("altalanos").checked;

    if (a || b) {
        dij += 200;
    } else if (c) {
        dij += 300;
    }

    const d = document.getElementById("lista").selectedIndex;

    if (d == 0 || d == 1) {
        dij += 400;
    } else if (d == 2) {
        dij += 1000;
    }

    const e = document.getElementById("adatvedelem").checked;
    const f = document.getElementById("munkajog").checked;
    const g = document.getElementById("itjog").checked;

    if (e && f && g) {
        dij += 500;
    } else if (e && f) {
        dij += 400;
    } else if (e && g) {
        dij += 300;
    } else if (f && g) {
        dij += 200;
    } else if (e) {
        dij += 100;
    } else if (f) {
        dij += 100;
    } else if (g) {
        dij += 100;
    }

    const h = document.getElementsByName("mennyiregyorsan")[0].value;

    if (h === "1 munkanapon belül" || h === "2 munkanapon belül") {
        dij += 500;
    } else if (h === "3 munkanapon belül") {
        dij += 1500;
    }

    if (dij < 600) {
        document.getElementById("dij_kiir").innerText = "A szolgáltatás átalánydíja: " + String(dij) + " EUR/hónap" + "\nOlcsón megúszta, ennyiért ilyen minőségű szolgáltatást máshol nem talál!";
    
    } else if (dij < 1100) {
        document.getElementById("dij_kiir").innerText = "A szolgáltatás átalánydíja: " + String(dij) + " EUR/hónap" + "\nEgész jó ár, ha szeretne egyedi kedvezményt, keressen meg!";
    
    } else if (dij < 1600) {
        document.getElementById("dij_kiir").innerText = "A szolgáltatás átalánydíja: " + String(dij) + " EUR/hónap" +  "\nMagas ár, de a szolgáltatás minőségéhez képest így is nagyon olcsó!";
    
    } else {
        document.getElementById("dij_kiir").innerText = "A szolgáltatás átalánydíja: " + String(dij) + " EUR/hónap" + "\nNem olcsó, de profi munkáért profi díjazás jár!";
    }
    
    }
