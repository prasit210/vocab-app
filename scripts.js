const data = {
  vocab: [
    { vocabEN: "Cat", vocabTH: "แมว", partOf: "n." },
    { vocabEN: "Dog", vocabTH: "หมา", partOf: "n." },
    { vocabEN: "Tiger", vocabTH: "เสือ", partOf: "n." },
    { vocabEN: "Elephant", vocabTH: "ช้าง", partOf: "n." },
    { vocabEN: "Leopard", vocabTH: "เสือดาว", partOf: "n." },
    { vocabEN: "Panda", vocabTH: "หมีแพนด้า", partOf: "n." },
    { vocabEN: "Bear", vocabTH: "หมี", partOf: "n." },
    { vocabEN: "Crab", vocabTH: "ปู", partOf: "n." },
    { vocabEN: "Bird", vocabTH: "นก", partOf: "n." },
    { vocabEN: "Fish", vocabTH: "ปลา", partOf: "n." },
  ],
};

let progress = 0;

function increaseProgress() {
  if (progress < 10) {
    progress++;
    updateProgressBar();
  }
}

function updateProgressBar() {
  let elem = document.getElementById("myBar");
  let width = (progress / 10) * 100;
  elem.style.width = width + "%";
  elem.innerHTML = progress + " / 10";
}

function changeColor(button, color) {
  if (color === "greenBtn") {
    button.classList.toggle("greenBtn");
  } else if (color === "redBtn") {
    button.classList.toggle("redBtn");
  }
}

// ฟังก์ชันสลับตำแหน่งของออบเจ็กต์ในอาร์เรย์
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // สุ่มตำแหน่งในอาร์เรย์
        let j = Math.floor(Math.random() * (i + 1));
        
        // สลับตำแหน่งของออบเจ็กต์
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// เรียกใช้ฟังก์ชันสลับ
shuffleArray(data.vocab);

// แสดงผลลัพธ์หลังจากสลับตำแหน่ง
console.log(data);

console.log(data.vocab[0].vocabTH);

const vocabTextDOM = document.getElementById('vocab-text')
const partsOfDOM = document.getElementById('vocab-parts')
const btnChoiceA = document.getElementById('btn-choice1')
const btnChoiceB = document.getElementById('btn-choice2')

vocabTextDOM.innerText = data.vocab[0].vocabEN;
partsOfDOM.innerText = `(${data.vocab[0].partOf})`;
btnChoiceA.innerText = data.vocab[0].vocabTH;