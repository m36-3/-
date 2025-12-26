// عناصر DOM
const modal = document.getElementById("login-modal");
const appBlur = document.getElementById("app-blur");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

const userPhoto = document.getElementById("user-photo");
const userName = document.getElementById("user-name");
const userHospital = document.getElementById("user-hospital");
const userTitle = document.getElementById("user-title");

const confirmBtn = document.getElementById("confirm-btn");
const confirmMsg = document.getElementById("confirm-msg");
const logoutBtn = document.getElementById("logout-btn");

const navButtons = document.querySelectorAll(".nav-btn");

// إظهار/إخفاء المودال
function showModal() {
  document.body.classList.add("modal-open");
  modal.classList.add("show");
}
function hideModal() {
  document.body.classList.remove("modal-open");
  modal.classList.remove("show");
}

// تعبئة معلومات المستخدم في البطاقة اليمنى
function fillUserInfo(u) {
  userPhoto.src = u.photo || "assets/img/users/placeholder.png";
  userName.value = u.name || "";
  userHospital.value = u.hospital || "";
  userTitle.value = u.title || "";
}

// تهيئة عند التحميل
window.addEventListener("DOMContentLoaded", () => {
  const sessionUser = getSession();
  if (sessionUser) {
    fillUserInfo(sessionUser);
    hideModal();
  } else {
    showModal();
  }
function fillUserInfo(u) {
  const photoElement = document.getElementById("user-photo");

  // ضع الصورة الأولى
  photoElement.src = u.photo1;

  // إذا لم تُحمّل الصورة الأولى، جرّب الثانية
  photoElement.onerror = function() {
    photoElement.src = u.photo2;
  };

  // باقي البيانات
  document.getElementById("user-name").value = u.name || "";
  document.getElementById("user-hospital").value = u.hospital || "";
  document.getElementById("user-title").value = u.title || "";
}
  // تنقل الصفحات: الضغط على الزر ينقل لنفس التبويب
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      if (target) window.location.href = target;
    });
    // السماح بالنقر على الدائرة أيضًا (مطابقة السلوك المطلوب)
    const circle = btn.previousElementSibling;
    if (circle) {
      circle.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        if (target) window.location.href = target;
      });
    }
  });

  // تأكيد
  confirmBtn.addEventListener("click", () => {
    confirmMsg.textContent = "تم تسجيل الحضور ";
    setTimeout(() => { confirmMsg.textContent = ""; }, 2500);
  });

  // تسجيل خروج (اختياري، صغير وغير مزعج)
  logoutBtn.addEventListener("click", () => {
    clearSession();
    // إعادة إظهار المودال دون تغيير التصميم
    showModal();
    // إعادة تعيين الحقول
    userPhoto.src = "assets/img/users/placeholder.png";
    userName.value = "";
    userHospital.value = "";
    userTitle.value = "";
  });

  // معالجة نموذج تسجيل الدخول
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginError.textContent = "";

    const username = loginForm.username.value.trim();
    const code = loginForm.code.value.trim();

    const u = findUser(username, code);
    if (!u) {
      loginError.textContent = "بيانات الدخول غير صحيحة. حاول مرة أخرى.";
      return;
    }

    // حفظ الجلسة وتعبئة البيانات
    saveSession(u);
    fillUserInfo(u);
    hideModal();
    loginForm.reset();
  });
});
// تنقل صفحات واجهة المخدر
document.addEventListener("DOMContentLoaded", () => {
  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      if (target) window.location.href = target;
    });
    const circle = btn.previousElementSibling;
    if (circle) {
      circle.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        if (target) window.location.href = target;
      });
    }
  });
});
// عند تحميل الصفحة، أضف كلاس fade-in
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-dark");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️ الوضع الفاتح";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙 الوضع المظلم";
    }
  });

  // استرجاع الاختيار عند فتح الصفحة
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ الوضع الفاتح";
  }
});