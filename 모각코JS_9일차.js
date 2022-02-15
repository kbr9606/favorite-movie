var title = document.getElementsByClassName("mvTitle");
var genre = document.getElementsByClassName("genre");
var year = document.getElementsByClassName("year");
var story = document.getElementsByClassName("story");

function movies(title, genre, year, story) {
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.story = story;
}

function movie1() {
    var m1 = new movies("콜미 바이 유어 네임", "로맨스", "2017년 11월 24일", "1983년 이탈리아, 열 일곱 소년 Elio(티모시 샬라메)는 아름다운 햇살이 내리쬐는 가족 별장에서 여름이 끝나기만을 기다리고 있다 어느 오후, 스물 넷 청년 Oliver(아미 해머)가 아버지(마이클 스털버그)의 보조 연구원으로 찾아오면서 모든 날들이 특별해지는데... Elio의 처음이자 Oliver의 전부가 된 그 해, 여름보다 뜨거웠던 사랑이 펼쳐진다")

    title[0].innerHTML = m1.title;
    genre[0].innerHTML = m1.genre;
    year[0].innerHTML = m1.year;
    story[0].innerHTML = m1.story;

}

function movie2() {
    var m2 = new movies("마녀 배달부 키키", "애니메이션", "2007년 11월 22일", "사랑스러운 초보마녀 ‘키키’는 검은 고양이 ‘지지’와 함께 빗자루를 타고 마녀 수련을 떠난다. 항구 마을에 불시착한 키키는 첫날부터 우여곡절을 겪지만, ‘배달’에 재능이 있다는 걸 발견하고 본격적인 마법 수련을 시작하는데...")

    title[0].innerHTML = m2.title;
    genre[0].innerHTML = m2.genre;
    year[0].innerHTML = m2.year;
    story[0].innerHTML = m2.story;
}

function movie3() {
    var m3 = new movies("오만과 편견", "로맨스", "2006년 3월 24일", "결혼의 조건은 오직 진정한 사랑이라고 믿는 '엘리자베스'는, '다아시'가 자신의 친구 '빙리'와 그녀의 언니 '제인'의 결혼을 '제인'이 명망있는 가문 출신이 아니라는 이유로 반대한 것을 알게 되자, 그를 오만하고 편견에 가득 찬 속물로 여기며 외면하는데... 서로에 대한 오해와 편견에 빠져 눈이 멀어있는 '엘리자베스'와 '다아시'는 과연 서로의 진심을 알고 사랑을 이룰 수 있을까...")

    title[0].innerHTML = m3.title;
    genre[0].innerHTML = m3.genre;
    year[0].innerHTML = m3.year;
    story[0].innerHTML = m3.story;
}