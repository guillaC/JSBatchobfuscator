function sayCode() {
    var textarea = document.getElementById('Code');
    var textareaobf = document.getElementById('ObfCode');
    var setlettre = "Set ¤=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; //62 char
    var code = textarea.value; //code contiendra mon code non obfusqué
    var codeobfu = "" //codeobfu contiendra mon code obfusqué

    var lettertab = {
        "0": "%¤:~0,1%",
        "1": "%¤:~1,1%",
        "2": "%¤:~2,1%",
        "3": "%¤:~3,1%",
        "4": "%¤:~4,1%",
        "5": "%¤:~5,1%",
        "6": "%¤:~6,1%",
        "7": "%¤:~7,1%",
        "8": "%¤:~8,1%",
        "9": "%¤:~9,1%",
        "a": "%¤:~10,1%",
        "b": "%¤:~11,1%",
        "c": "%¤:~12,1%",
        "d": "%¤:~13,1%",
        "e": "%¤:~14,1%",
        "f": "%¤:~15,1%",
        "g": "%¤:~16,1%",
        "h": "%¤:~17,1%",
        "i": "%¤:~18,1%",
        "j": "%¤:~19,1%",
        "k": "%¤:~20,1%",
        "l": "%¤:~21,1%",
        "m": "%¤:~22,1%",
        "n": "%¤:~23,1%",
        "o": "%¤:~24,1%",
        "p": "%¤:~25,1%",
        "q": "%¤:~26,1%",
        "r": "%¤:~27,1%",
        "s": "%¤:~28,1%",
        "t": "%¤:~29,1%",
        "u": "%¤:~30,1%",
        "v": "%¤:~31,1%",
        "w": "%¤:~32,1%",
        "x": "%¤:~33,1%",
        "y": "%¤:~34,1%",
        "z": "%¤:~35,1%",
        "A": "%¤:~36,1%",
        "B": "%¤:~37,1%",
        "C": "%¤:~38,1%",
        "D": "%¤:~39,1%",
        "E": "%¤:~40,1%",
        "F": "%¤:~41,1%",
        "G": "%¤:~42,1%",
        "H": "%¤:~43,1%",
        "I": "%¤:~44,1%",
        "J": "%¤:~45,1%",
        "K": "%¤:~46,1%",
        "L": "%¤:~47,1%",
        "M": "%¤:~48,1%",
        "N": "%¤:~49,1%",
        "O": "%¤:~50,1%",
        "P": "%¤:~51,1%",
        "Q": "%¤:~52,1%",
        "R": "%¤:~53,1%",
        "S": "%¤:~54,1%",
        "T": "%¤:~55,1%",
        "U": "%¤:~56,1%",
        "V": "%¤:~57,1%",
        "W": "%¤:~58,1%",
        "X": "%¤:~59,1%",
        "Y": "%¤:~60,1%",
        "Z": "%¤:~61,1%",
        " ": "^" + '\n '
    };

    if (code.indexOf("%¤:") != -1) { //on check si le code est déjà obfu
        console.log("code déjà obfu");
        return; // On sors de la fonction
    }

    if (code.indexOf("<script>") != -1) { //on check si l'user nous prendrait pas pour des cons
        console.log("XSS");
        window.location = "https://www.youtube.com/watch?v=bseXgKgiZmY"; //on redirige vers "Final Boss of the Internet"
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