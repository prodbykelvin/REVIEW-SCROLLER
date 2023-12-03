var previous = document.getElementById("previous");
var next = document.getElementById("next");
var reviewDocument = document.getElementById("review-contents");
var hTag = document.getElementById("h6-tags");
var pTag = document.getElementById("p-tags");
var image = document.getElementById("image-tag");

let contentContain = 0;
let jobContent = 0;
let contentCount = 0;
const nameArray = ["KINTO OLAOYE", "KELVIN CHRIS", "JANE STEVE"];
const jobArray = ["SELF-MADE ACCOUNTANT", "TECH PRACTIONER", "REVIEW ANALYST"];
const contentArray = [
  "I'm quiet confident, naturally curious, And perpetually working on improving my chops one design problem at a time, As i major in varios Programming languages/Styling",
  "languages like Python, React/Javascript, Html and Css, Im a very ambitious Software Engineer looking for a role in an established IT company with the opportunity to work with the latest  technologies on challenging and diverse projects",
  "Helvetica artisan Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores facere iste id cupiditate amet earum nesciunt molestiae esse! Quam voluptate autem ut distinctio inventore vitae consectetur impedit. Dignissimos, provident ipsa?",
];

const imageArray = ["_kinto.jpg", "me.jpg", "sis.jpg"];

imageIndex = 0;
// imageIndex === imageArray.length && imageIndex != 0
function images() {
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
    image.src = imageArray[imageIndex];
  }
  image.src = imageArray[imageIndex];
  imageIndex++;
}

next.addEventListener("click", images);
const content = function next() {
  if (contentCount === nameArray.length) {
    contentCount = 0;
    jobContent = 0;
    contentContain = 0;
  }
  reviewDocument.innerHTML = nameArray[contentCount];
  hTag.innerHTML = jobArray[jobContent];
  pTag.innerHTML = contentArray[contentContain];
  contentContain++;
  jobContent++;
  contentCount++;
};

const previousContent = function previous() {
  if (contentCount <= nameArray.length) {
    if (contentCount != 0) {
      --contentContain;
      --jobContent;
      --contentCount;
      --imageIndex;
    }

    // if (contentCount === nameArray.length) {
    //   console.log(contentCount);
    //   contentCount = 0;
    //   jobContent = 0;
    //   contentContain = 0;
    // }
  }
  // console.log((reviewDocument.innerHTML = nameArray[contentCount]));
  reviewDocument.innerHTML = nameArray[contentCount];
  hTag.innerHTML = jobArray[jobContent];
  pTag.innerHTML = contentArray[contentContain];
  image.src = imageArray[imageIndex];
};
// next.addEventListener("click", content);
// previous.addEventListener("click", previousContent);
