document.addEventListener("DOMContentLoaded", function() {
  const tabContents = document.querySelectorAll('.tab-content');

  tabContents.forEach(tabContent => {
    const faqItems = tabContent.querySelectorAll(".faq-item");
    const showAllBtn = tabContent.querySelector(".show-all-btn");

    if (!showAllBtn) return;

    // 初期表示の数
    const initialItemsToShow = 3;

    // 初期表示以外の質問を非表示にする
    for (let i = initialItemsToShow; i < faqItems.length; i++) {
      faqItems[i].classList.add("hidden");
    }

    // 全ての質問を表示するボタンのクリックイベント
    showAllBtn.addEventListener("click", function() {
      for (let i = initialItemsToShow; i < faqItems.length; i++) {
        faqItems[i].classList.toggle("hidden");
      }

      if (showAllBtn.innerText === "すべての質問を見る") {
        showAllBtn.innerText = "閉じる";
      } else {
        showAllBtn.innerText = "すべての質問を見る";
      }
    });

    // 各質問のトグルボタンのクリックイベント
    faqItems.forEach(function(item) {
      const toggleBtn = item.querySelector(".toggle-btn");

      toggleBtn.addEventListener("click", function() {
        item.querySelector(".answer").classList.toggle("active");
      });
    });
  });

  // 初期状態ではタブ1を表示する
  showTabContent(1);
});

function showTabContent(tabNumber) {
  // すべてのタブコンテンツを非表示にする
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.display = 'none';
  });

  // 選択されたタブコンテンツを表示する
  const selectedTabContent = document.getElementById(`tab${tabNumber}-content`);
  selectedTabContent.style.display = 'block';
}




