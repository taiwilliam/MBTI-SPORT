// 獲取隨機數據
const PAGE_COUNT = 4;
const groupData = shuffleAndGroup([...QUESTIONS_DATA], PAGE_COUNT);

document.addEventListener("DOMContentLoaded", () => {
  // 渲染畫面
  renderView(groupData);
  // 加入下一頁事件
  addNextPageEvent();
  // 檢查是否所有選項都已選擇
  checkAllSelected();
  // 監聽表單送出
  listenFormSubmit();
});

// 監聽表單送出
function listenFormSubmit() {
  const form = document.querySelector(".js-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());
    const MBTIResult = calculateMBTIResult(formObject);

    renderResultPage(MBTIResult);
  });
}

// 渲染結果頁面
function renderResultPage(MBTI) {
  const resultPage = document.querySelector(".js-result");
  const testPage = document.querySelector(".js-test");

  const name_ = resultPage.querySelector(".js-result-name");
  const img_ = resultPage.querySelector(".js-result-img");
  const description_ = resultPage.querySelector(".js-result-description");
  const resultData = QUESTIONS_RESULT.find((item) => compareStrings(item.id, MBTI));

  console.log(resultData)

  name_.innerText = resultData.name
  img_.src = resultData.img
  description_.innerText = resultData.description

  resultPage.classList.remove("d-none");
  testPage.classList.add("d-none");
}

// 字串比對
function compareStrings(str1, str2) {

  console.log(str1, str2)
  // 把字串轉換為字母陣列並排序
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // 比較排序後的字串是否相同
  return sortedStr1 === sortedStr2
}

// 計算MBTI結果
function calculateMBTIResult(data) {
  const result = formateResult(data);
  console.log(result)
  let MBTI = "";

  MBTI_CATEGORY.forEach((category) => {
    const TYPE = compareSubArrays(result, category);
    console.log(TYPE)
    MBTI += TYPE;
  })

  return MBTI;
}

// 定義一個函數來比較不同分類中的子陣列
function compareSubArrays(data, category) {
  // 確保該分類存在
  if (!data[category]) {
    return `Category ${category} not found`;
  }

  const subkeys = Object.keys(data[category]);

  // 確保該分類中有兩個子陣列可供比較
  if (subkeys.length !== 2) {
    return `Category ${category} does not have exactly two subkeys to compare`;
  }

  const [subkey1, subkey2] = subkeys;
  const sum1 = data[category][subkey1].reduce((acc, num) => acc + num, 0); // 計算第一個子陣列的總和
  const sum2 = data[category][subkey2].reduce((acc, num) => acc + num, 0); // 計算第二個子陣列的總和

  // 比較兩個子陣列的總和
  if (sum1 > sum2) {
    return subkey1;
  } else if (sum1 < sum2) {
    return subkey2;
  } else {
    return DEFAULT_RESULT[category]; // 如果兩個總和相等 使用預設結果
  }
}

// 格式化結果
function formateResult(data) {
  return Object.entries(data).reduce((acc, [key, value]) => {
    // 使用正則表達式解析鍵的結構：例如 "AD[A][1]" -> ['AD', 'A', '1']
    const match = key.match(/^([A-Za-z]+)\[([A-Za-z]+)\]\[(\d+)\]$/);
    if (match) {
      const [_, prefix, subkey, index] = match;
      const numValue = Number(value);

      // 如果該前綴不存在於結果中，創建它
      if (!acc[prefix]) {
        acc[prefix] = {};
      }

      // 如果該子鍵不存在，創建一個空的陣列
      if (!acc[prefix][subkey]) {
        acc[prefix][subkey] = [];
      }

      // 將數值推入對應的子鍵陣列中
      acc[prefix][subkey].push(numValue);
    }

    return acc;
  }, {});
}

// 檢查是否所有選項都已選擇
function checkAllSelected() {
  const pages = document.querySelectorAll(".js-page");
  pages.forEach((page) => {
    const radios = page.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        const radios = page.querySelectorAll('input[type="radio"]');
        const checkedRadios = Array.from(radios).filter(
          (radio) => radio.checked
        );
        const nextPageBtn = page.querySelector(".js-page-disabled");
        const checkedRadiosLength = checkedRadios.length;
        const radiosLength = radios.length / 7;

        if (checkedRadiosLength === radiosLength) {
          nextPageBtn.removeAttribute("disabled");
        } else {
          nextPageBtn.setAttribute("disabled", "disabled");
        }
      });
    });
  });
}

// 渲染畫面
function renderView(data) {
  const root = document.querySelector(".js-root");
  let result = "";
  data.forEach((group, index) => {
    const isLast = index + 1 == data.length;
    result += `<div class="carousel-item js-page${
      index == 0 ? " active" : ""
    }">${renderContent(group, index)}${renderNextPageBtn(isLast, index)}</div>`;
  });

  root.innerHTML = result;
}

// 渲染每頁內容
function renderContent(data, pageIndex) {
  let result = "";
  data.forEach((item, index) => {
    result += `<div class="mb-5">
      <div class="mb-2 fw-bold">${item.question}</div>
      <div class="row justify-content-center align-items-center flex-nowrap gx-2">
      ${renderInputWrap(item, index, pageIndex)}
      </div>
    </div>`;
  });

  return result;
}

function renderNextPageBtn(isLast, index) {
  const text = isLast ? "查看結果" : "下一頁";
  const jsClass = isLast ? "js-show-result" : "js-next-page";
  const type = isLast ? "submit" : "button";
  return `<div class="mt-4">
      <button
        type="${type}"
        disabled
        class="btn btn-dark btn-lg rounded-pill js-page-disabled ${jsClass}"
        data-page="${index}"
      >${text}</button>
    </div>
  `;
}

// 渲染input包裝
function renderInputWrap(item, index, pageIndex) {
  return `<div class="col text-warning fw-bold text-end">同意</div>
  <div class="col-auto d-flex align-items-center me-0 x-radio">
    ${renderInput(item, index, pageIndex)}
  </div>
  <div class="col text-primary fw-bold text-start">不同意</div>`;
}

// 渲染input
function renderInput(item, index, pageIndex) {
  const level = 7;
  let result = "";
  for (let i = 1; i <= level; i++) {
    result += `<div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="${item.quadrant}[${item.type}][${item.number}]"
        id="q-${pageIndex}-${index}"
        value="${4 - i}"
      />
    </div>`;
  }
  return result;
}

// 綁定下一頁事件
function addNextPageEvent() {
  const carousel = new bootstrap.Carousel("#carousel");
  const nextPageBtns = document.querySelectorAll(".js-next-page");
  nextPageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.next();
      window.scrollTo(0, 0);
    });
  });
}

// 打亂並分組
function shuffleAndGroup(array, groupCount) {
  // Fisher-Yates 洗牌算法
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  // 分組
  const groups = [];
  const groupSize = Math.ceil(array.length / groupCount); // 每組的最大大小
  for (let i = 0; i < groupCount; i++) {
    groups.push(array.slice(i * groupSize, (i + 1) * groupSize));
  }

  return groups;
}
