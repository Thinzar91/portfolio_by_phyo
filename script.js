// スクロール時に要素をフェードインさせる
const fadeElements = document.querySelectorAll('.fade-in');

const scrollTrigger = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.90) {
      el.classList.add('visible');
    }
  });
};

// navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY === 0) {
      navbar.style.position = 'fixed';
    } else {
      navbar.style.position = 'static';
    }
  });

// レジュメボタンの処理
const resumeBtn = document.getElementById("resumeBtn");
const pdfContainer1 = document.getElementById("pdfContainer1");

resumeBtn.addEventListener("click", () => {
  const isHidden = pdfContainer1.style.display === "none" || pdfContainer1.style.display === "";
  pdfContainer1.style.display = isHidden ? "block" : "none";
  resumeBtn.textContent = isHidden ? "レジュメ（非表示）" : "レジュメ（表示）";
});

// 職務経歴書ボタンの処理
const careerBtn = document.getElementById("careerBtn");
const pdfContainer2 = document.getElementById("pdfContainer2");

careerBtn.addEventListener("click", () => {
  const isHidden = pdfContainer2.style.display === "none" || pdfContainer2.style.display === "";
  pdfContainer2.style.display = isHidden ? "block" : "none";
  careerBtn.textContent = isHidden ? "職務経歴書（非表示）" : "職務経歴書（表示）";
});

// PDFボタンの処理
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".pdfBtn");

  buttons.forEach(function (btn, index) {
    const container = btn.nextElementSibling; // ボタンの直後のdivを取得

    btn.addEventListener("click", function () {
      if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
        btn.textContent = "詳細を非表示";
      } else {
        container.style.display = "none";
        btn.textContent = "詳細を表示";
      }
    });
  });
});
// 以上

// Scroll
window.addEventListener('scroll', scrollTrigger);
window.addEventListener('load', scrollTrigger);

function toggleDetail(button) {
  const detail = button.nextElementSibling.querySelector(".timeline-detail");
  if (detail) {
    detail.classList.toggle("show");
  }
}

// Navi menu
function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.getElementById('hamburger');

  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active');
}

$(window).load(function() {
        $('a[href^=#]').click(function() {
            var speed = 1000;
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({
                scrollTop: position
            }, speed, "swing");
            return false;
        });
    });

// My works Filter button JS
const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

//Modal js
// function openModal(img, modalId) {
//   const modal = document.getElementById(modalId);
//   const modalImg = modal.querySelector(".modal-content");
//   modalImg.src = img.src;
//   modal.style.display = "block";
// }
//
// function closeModal() {
//   const modals = document.querySelectorAll(".modal");
//   modals.forEach(modal => {
//     modal.style.display = "none";
//   });
// }

// MyWorks Filter buttons
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 全てのボタンから active を外す
      buttons.forEach(b => b.classList.remove('active'));
      // クリックしたボタンに active を付与
      btn.classList.add('active');
    });
  });


     $('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
      var animateLeft, slideLeft;

      advance();

      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }

      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');

      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }

      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }

    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }

    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });

    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });

    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');

      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });

    advance();
  });
