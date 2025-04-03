import emotion1 from "./../assets/emoji1.png";
import emotion2 from "./../assets/emoji2.png";
import emotion3 from "./../assets/emoji3.png";
import emotion4 from "./../assets/emoji4.png";
import emotion5 from "./../assets/emoji5.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
