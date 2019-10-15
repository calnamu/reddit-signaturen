var signatures = [
    'Ich bin nicht die Signatur, ich putz\' hier nur!',
    'MfG xXxShadowWarrior1993xXx',
    'Wer Rechtschreibfehler findet, kann sie behalten!',
    '!!! Kein Support per PN !!!',
    'Wenn man keine Ahnung hat einfach mal die Fresse halten :ugly:',
    'Nvidia gt680 Golf III GTI PS3',
    'Ehefrau mit GöGa und Mutter von drei WuKi´s -- Beurteile einen Menschen nie nach seiner Fröhlichkeit, ich habe schon oft gelacht um nicht Weinen zu müssen.',
    'Error 404 - Signatur not found!',
    'Männer haben auch Gefühle: Hunger, Durst und Hubraum!',
    'Intel Pentium III-S 1.4ghz // 512MB PC133 // NVIDIA Quadro4 900 128MB // 80 GB HDD // Pioneer DVR-106A + Plexwriter 12/10/32A // 3½" Floppy // IBM Model M, Logitech MX500 // Asus TUV4X // Windows 98 SE',
    'Wer anderen eine Grube gräbt, der hat ein Grubengrabgerät',
    'Wer anderen eine Bratwurst brät, der hat ein Bratwurstbratgerät',
    'Frag\' nicht – Du könntest eine Antwort erhalten!',
    'There are only 10 types of people in the world: Those who understand binary and those who don\'t.',
    'There are 10 kinds of people in the world, those that understand binary, those that don\'t, and those that didn\'t expect this joke to be in ternary.',
    'This signature is under construction',
    'Ich bin ein Niemand. Niemand ist perfekt. Ergo: Ich bin perfekt!',
    '"Man sollte in einer Forensignatur immer ein Zitat bringen." - Unbekannt',
    'Moderator - bei Problemen bitte PN!',
    'Wer Ironie findet, darf sie behalten.',
    'Real Life ist was für Versager, die ingame nichts erreichen!',
    'Das Leben ist scheiße, aber die Grafik ist geil!',
    'Große Veränderungen fangen klein an - Ressourcen schonen und nicht jede E-Mail drucken.',
    'Bedanken tut nicht weh!'
];

var elements = document.querySelectorAll('div.comment > div.entry > form.usertext > div.usertext-body > div.md');
elements.forEach(appendSignature);

document.body.addEventListener('DOMNodeInserted', function(e) {
    if(e && e.target && e.target.classList && e.target.classList.contains('comment')) {
        var element = e.target.querySelector('div.entry > form.usertext > div.usertext-body > div.md');
        if(element) {
            appendSignature(element);
        }
    }
});

function appendSignature(element) {
    var hr = document.createElement('hr');
    var signature = document.createElement('p');
    signature.innerText = signatures[Math.floor(Math.random() * signatures.length)];
    element.appendChild(hr);
    element.appendChild(signature);
}