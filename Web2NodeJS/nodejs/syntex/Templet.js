// 문장이 길 때 중간에 역슬래시를 넣어 주면 줄바꿈이 가능하다
var letter = 'asdfja;lksefasenf;l \
\jaslef jaslefj ;asejf ;lasfj a;lse;fj aesf ae alssejf;lksaejf;lkasejf;\
\kaefjasekfjasekfjaskefjas;ekfjaes;klfjase;kfjas;klfjaskfjasekfjsae;kfjasefkase;f';
console.log(letter);

letter = 'asdfja;lksefasenf;l \n\
\jaslef jaslefj ;asejf ;lasfj a;lse;fj aesf ae alssejf;lksaejf;lkasejf;\
\kaefjasekfjasekfjaskefjas;ekfjaes;klfjase;kfjas;klfjaskfjasekfjsae;kfjasefkase;f';
console.log(letter);
var name = '한글이면잘보이겠지';
var a = 1;
letter = `asdfja;lksefasenf;l [[${name}]]\n\njaslef jaslefj ;asejf ;lasfj a;lse;fj aesf ae alssejf;lksaejf;lkasejf;\
\kaefjasekfjasekfjaskefjas;ekfjaes;klfjas[[${name}]]e;kfjas;klfjaskfjasekfjsae;kfjasefkase;f`;
console.log(letter);