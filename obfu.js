function printCode() {
    var textarea = document.getElementById('Code');
    var textareaobf = document.getElementById('ObfCode');
    var set = "a" + Math.random().toString(36).substring(10); //random set
    var letter = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; //62 char
    var setlettre = "Set " + set + "=" + letter;
    var code = textarea.value;
    var codeobfu = "";
    var lettertab = {};
    for (var i = 0; i < letter.length; i++) {
        lettertab[letter[i]] = "%" + set + ":~" + i + ",1%";
    }

    console.log(code)
    for (var i = 0; i < code.length; i++) {
        if (lettertab[code[i]]) {
            codeobfu += lettertab[code[i]];
        } else {
            codeobfu += code[i];
        }
    }
    textareaobf.value = '@echo off\n' + setlettre + '\ncls' + '\n' + codeobfu;
}