
var coords = [1, 2];

function move(pos, amount) {

    coords[pos] += amount;
    document.getElementById('startno').innerHTML = coords[0];
    if (pos == 0) {

        if (coords[0] >= coords[1]) {
            coords[1] = coords[0] + 1;
        }
    }
    else {

        if (coords[1] <= coords[0]) {

            coords[0] = coords[1] - 1;
        }
    }
    document.getElementById('startno').innerHTML = coords[0];
    document.getElementById('endno').innerHTML = coords[1];

    console.log(coords);
}



function A() {
    document.getElementById('inspo').style.display = "none";
}