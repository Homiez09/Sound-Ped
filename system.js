let buttonCreateEiei = document.getElementById('loopMePlease'); 

const sound = [
    {sound: "./audioclips/sa_wad_dee-krub.mp3", label: "สวัสดีครับ"},
    {sound: "./audioclips/tan_sama_chik.mp3", label: "ท่านสมาชิก"},
    {sound: "./audioclips/chom_rom_kon_chop_hee.mp3", label: "ชมรมคนชอบxี"},
    {sound: "./audioclips/wan_pra_wan_jao_mai_ven.mp3", label: "วันพระวันเจ้าไม่เว้นกันเลย"},
    {sound: "./audioclips/yak_ja_doo_tae_hee.mp3", label: "อยากจะดูแต่xี"},
    {sound: "./audioclips/55555.mp3", label: "ขำ (หึหึหึ)"},
    {sound: "./audioclips/pen-a-rai-kan.mp3", label: "เป็นอะไรกัน"},
    {sound: "./audioclips/kon_tee_nai_puak_nai_pen_kon_jung_wat_r_rai_gert_wan_nai.mp3", label: "คนที่ไหนพวกท่านเป็นคนจังหวัดอะไรเกิดวันไหนเกิดปีไหนเกิดปีจอหรือปีอะไรครับผมไม่เข้าใจ"},
    {sound: "./audioclips/mai_kao_jai.mp3", label: "ไม่เข้าใจ"},
] 

loadSound = (i) => {
    var audio = new Audio(sound[i].sound);
    console.log('loading sound name: ' + sound[i].label);
    return audio;
}

play = (number) => {
    var audio = loadSound(number);
    console.log('playing sound name: ' + sound[number].label);
    audio.play();
}

let output = ""
for (var i = 0; i < sound.length; i++) {
    output += "<div class='col-md-2'>";
    output += "<button class='uwu btn btn-outline-primary' onclick='play(" + i + ");'>" + sound[i].label + "</button>";
    output += "</div>";
    console.log('loading button' + i);
}


buttonCreateEiei.innerHTML = output;

for (let i = 0; i < sound.length; i++) {
    window.onload = loadSound(i);
}