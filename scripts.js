

// let progress = 0;

// function increaseProgress() {
//   if (progress < 10) {
//     progress++;
//     updateProgressBar();
//   }
// }

// function updateProgressBar() {
//   let elem = document.getElementById("myBar");
//   let width = (progress / 10) * 100;
//   elem.style.width = width + "%";
//   elem.innerHTML = progress + " / 10";
// }

// function changeColor(button, color) {
//   if (color === "greenBtn") {
//     button.classList.toggle("greenBtn");
//   } else if (color === "redBtn") {
//     button.classList.toggle("redBtn");
//   }
// }



//@ 1. ดึงข้อมูลมาจาก Database
//@ 2. นำข้อมูลจาก Database มาสุ่ม ก่อนแสดงผล
//@ 3. นำ คำแปลไทย(vocabTH) สุ่มลงในปุ่ม Choice A,B
//@ 4. ถ้าคำตอบที่ถูกต้องสุ่มได้ A คำตอบที่ผิดจะเป็น B
//@ 5. เมื่อเลือกคำตอบ ถ้าตอบถูก คะแนนจะ +1 / ผิด = 0
//@ 6. ไม่ว่าจะตอบ ถูก หรือ ผิด ก็ไปยังข้อถัดไป


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // สุ่มตำแหน่งในอาร์เรย์
    let j = Math.floor(Math.random() * (i + 1));

    // สลับตำแหน่งของออบเจ็กต์
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

let point = 0;

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
console.log("START RANDOM");
  console.log('API DATA : ',data);

window.onload = () =>{
  const vocabAll = data.vocab;
  showQuestion(vocabAll);
}


const showQuestion = async (vocab) => {
  const vocabTextDOM = document.getElementById("vocab-text");
  const partsOfDOM = document.getElementById("vocab-parts");
  const btnChoiceA = document.getElementById("btn-choice1");
  const btnChoiceB = document.getElementById("btn-choice2");

  let indexVocab = 0

   //? เปรียบเหมือน ใช้ Axios ดึงมา
  //console.log("Variable VocabAll : ", vocabAll);

  const vocabRandom = await shuffleArray([...vocab]); //? สุ่มข้อมูลที่ได้มาจาก API ใหม่ทั้งหมดเพื่อให้การแสดงผลแต่ละครั้ง จะได้ไม่เหมือนกัน
  console.log('RANDOM DATA : ',vocabRandom);
  //console.log("VocabRandom Line : ", vocabRandom[0].vocabEN);

  vocabTextDOM.innerText = vocabRandom[indexVocab].vocabEN
  partsOfDOM.innerText = `(${vocabRandom[indexVocab].partOf})`
  
  // const randomNum = (Math.random()*10);
  // console.log(randomNum.toFixed())

  // TODO ไม่ให้ช้อย คำตอบที่ ถูก กับคำตอบที่ ผิด ซ้ำกัน
  const randomChoice = (Math.random() * 10).toFixed()
  console.log('ข้อผิดที่นำมาใส่อีกช้อย Index = ',randomChoice)
  if(Math.random() < 0.5) {
    btnChoiceA.innerText = vocabRandom[indexVocab].vocabTH
    if(indexVocab == randomChoice){
      console.log('สุ่มเจอตำแหน่งเดียวกัน')
    }
    btnChoiceB.innerText = vocabRandom[randomChoice].vocabTH
  }else{
    btnChoiceB.innerText = vocabRandom[indexVocab].vocabTH
    btnChoiceA.innerText = vocabRandom[randomChoice].vocabTH
  }
  


};