let buttonCreateEiei = document.getElementById('loopMePlease');

const sound = [
    {sound: "./audioclips/sa_wad_dee-krub.mp3", label: "สวัสดีครับ"},
    {sound: "./audioclips/tan_sama_chik.mp3", label: "ท่านสมาชิก"},
    {sound: "./audioclips/chom_rom_kon_chop_hee.mp3", label: "ชมรมคนชอบxี"},
    {sound: "./audioclips/wan_pra_wan_jao_mai_ven.mp3", label: "วันพระวันเจ้าไม่เว้นกันเลย"},
    {sound: "./audioclips/yak_ja_doo_tae_hee.mp3", label: "อยากจะดูแต่xี"},
    {sound: "./audioclips/55555.mp3", label: "ขำ (หึหึหึ)"},
    {sound: "./audioclips/pen-a-rai-kan.mp3", label: "เป็นอะไรกัน"}
]

function play(number){
    var audio = new Audio(sound[number].sound);
    audio.play();
}

let output = ""
for (var i = 0; i < sound.length; i++) {
    output += "<div class='col-md-2'>";
    output += "<button class='uwu btn btn-outline-primary' onclick='play(" + i + ");'>" + sound[i].label + "</button>";
    output += "</div>";
    console.log(i)
}

buttonCreateEiei.innerHTML = output;