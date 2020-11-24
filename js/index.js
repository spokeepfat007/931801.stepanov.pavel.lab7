const show1 = () => {
    const int = document.getElementById("elem").value;
    for (let i = 0; i < int; i++) {
        const rect = document.createElement("div");
        rect.classList.add("square")
        const y = Math.random() * (500 - 75) + 75;//точка отсчета
        rect.style.marginTop = y + "px";
        let x = Math.random() * (900 - 75) + 75;
        rect.style.marginLeft = x + "px";
        let k = Math.random() * (150 - 40) + 40;
        rect.style.width = k + "px";
        rect.style.height = k + "px";
        const wrack = document.getElementById("wracked")
        wrack.appendChild(rect);
    }
}
const show2 = () => {
    const int = document.getElementById("elem").value;
    for (let i = 0; i < int; i++) {
        const trig = document.createElement("div");
        trig.classList.add("block")
        const y = Math.random() * (360);//точка отсчета
        trig.style.marginTop = `${y}px`;
        let x = Math.random() * (900 - 75) + 75;
        trig.style.marginLeft = `${x}px`;
        let k = Math.random() * (150 - 40) + 40;
        trig.style.borderLeft = k/2 + "px" + " solid transparent";
        trig.style.borderRight = k/2 + "px" + " solid transparent";
        trig.style.borderBottom = `${k}px` + " solid rgba(26,26,255,0.8)";
        const wrack = document.getElementById("wracked")
        wrack.appendChild(trig);
    }
}
const show3 = () => {
    const int = document.getElementById("elem").value;
    for (let i = 0; i < int; i++) {
        const circ = document.createElement("div");
        circ.classList.add("round")
        const y = Math.random() * (500 - 75) + 75;//точка отсчета
        circ.style.marginTop = `${y}px`;
        let x = Math.random() * (900 - 75) + 75;
        circ.style.marginLeft = `${x}px`;
        let k = Math.random() * (150 - 40) + 40;
        circ.style.width = `${k}px`;
        circ.style.height = `${k}px`;
        const wrack = document.getElementById("wracked")
        wrack.appendChild(circ);
    }
}
const element = document.getElementById('wracked');
element.addEventListener('click', function (e) {
    var target = e.target; // элемент по которому кликнули
    if (target.className === 'round' || target.className === 'square') target.style.backgroundColor = "yellow";
    else if (target.className === 'block') {
        target.style.borderBottomColor = "yellow";
    }
}, false);
element.addEventListener('dblclick', function (e) {
    var target = e.target; // элемент по которому кликнули
    if (target.className === 'round' || target.className === 'square' || target.className === 'block') target.remove();
}, false);