function sayCode() {
    var textarea = document.getElementById('Code');
    var textareaobf = document.getElementById('ObfCode');
    var set = "a"+Math.random().toString(36).substring(10); //random set
    var setlettre = "Set "+set+"=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; //62 char
    var code = textarea.value; //code contiendra mon code non obfusqué
    var codeobfu = "" //codeobfu contiendra mon code obfusqué

    var lettertab = {
        "0": "%"+set+":~0,1%",
        "1": "%"+set+":~1,1%",
        "2": "%"+set+":~2,1%",
        "3": "%"+set+":~3,1%",
        "4": "%"+set+":~4,1%",
        "5": "%"+set+":~5,1%",
        "6": "%"+set+":~6,1%",
        "7": "%"+set+":~7,1%",
        "8": "%"+set+":~8,1%",
        "9": "%"+set+":~9,1%",
        "a": "%"+set+":~10,1%",
        "b": "%"+set+":~11,1%",
        "c": "%"+set+":~12,1%",
        "d": "%"+set+":~13,1%",
        "e": "%"+set+":~14,1%",
        "f": "%"+set+":~15,1%",
        "g": "%"+set+":~16,1%",
        "h": "%"+set+":~17,1%",
        "i": "%"+set+":~18,1%",
        "j": "%"+set+":~19,1%",
        "k": "%"+set+":~20,1%",
        "l": "%"+set+":~21,1%",
        "m": "%"+set+":~22,1%",
        "n": "%"+set+":~23,1%",
        "o": "%"+set+":~24,1%",
        "p": "%"+set+":~25,1%",
        "q": "%"+set+":~26,1%",
        "r": "%"+set+":~27,1%",
        "s": "%"+set+":~28,1%",
        "t": "%"+set+":~29,1%",
        "u": "%"+set+":~30,1%",
        "v": "%"+set+":~31,1%",
        "w": "%"+set+":~32,1%",
        "x": "%"+set+":~33,1%",
        "y": "%"+set+":~34,1%",
        "z": "%"+set+":~35,1%",
        "A": "%"+set+":~36,1%",
        "B": "%"+set+":~37,1%",
        "C": "%"+set+":~38,1%",
        "D": "%"+set+":~39,1%",
        "E": "%"+set+":~40,1%",
        "F": "%"+set+":~41,1%",
        "G": "%"+set+":~42,1%",
        "H": "%"+set+":~43,1%",
        "I": "%"+set+":~44,1%",
        "J": "%"+set+":~45,1%",
        "K": "%"+set+":~46,1%",
        "L": "%"+set+":~47,1%",
        "M": "%"+set+":~48,1%",
        "N": "%"+set+":~49,1%",
        "O": "%"+set+":~50,1%",
        "P": "%"+set+":~51,1%",
        "Q": "%"+set+":~52,1%",
        "R": "%"+set+":~53,1%",
        "S": "%"+set+":~54,1%",
        "T": "%"+set+":~55,1%",
        "U": "%"+set+":~56,1%",
        "V": "%"+set+":~57,1%",
        "W": "%"+set+":~58,1%",
        "X": "%"+set+":~59,1%",
        "Y": "%"+set+":~60,1%",
        "Z": "%"+set+":~61,1%",
        " ": "^" + '\n '
    };

    if (code.indexOf("=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") != -1) { //on check si le code est déjà obfu
        console.log("code déjà obfu");
        return; // On sors de la fonction
    }

    if (code.indexOf("<script>") != -1) { //on check si l'user nous prendrait pas pour des cons
        console.log("XSS");
        window.location = "https://www.youtube.com/watch?v=-0AlZ3a32Lk"; //lul
        return; // On sors de la fonction
    }

    console.log(code) //on affiche le code dans la console
    for (var i = 0; i < code.length; i++) {
        if (lettertab[code[i]]) {
            codeobfu += lettertab[code[i]];
        } else {
            codeobfu += code[i];
        }
    }
    textareaobf.value = '@echo off\n' + setlettre + '\ncls' + '\n' + codeobfu; //On écris le code obfu dans le textareaobf avec notre Set
}