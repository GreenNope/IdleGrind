commonStatCombos = {
{stat1: magDamage, stat2: atkSpeed}
}



function checkStatCombo() {
    stat1 = document.getElementById(“stat1”)
    stat2 = document.getElementById(“stat2”)
    for (combo in commonStatCombos) {
        if (combo.stat1 = stat1 && combo.stat2 = stat2) {
            return true
        }
    }
}
