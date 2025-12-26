// بيانات المستخدمين الثابتة
const Users = [
  {
    user: "مصطفى ابراهيم",
    code: "2005",
    name: "مصطفى إبراهيم حسن",
    title: "تقني تخدير",
    hospital: "بغداد التعليمي/ طابق السادس",
    photo1: "assets/img/users/pp.png",
    photo2: "assets/img/pp.jpg"    // الصورة الثانية (امتداد آخر أو نسخة أخرى)

  },
  {
    user: "همسة",
    code: "2005",
    name: "همسة",
    title: "تقني تخدير",
    hospital: "مدينة الطب/ وحدة العمليات",
     photo1: "assets/img/users/hamsa.png",
    photo2: "assets/img/hamsa.png"  
  },
  {
    user: "علي",
    code: "2006",
    name: "علي الاكبر طالب رحمة",
    title: "تقني تخدير",
    hospital: "مدينة الطب/ وحدة العمليات",
     photo1: "assets/img/users/ali.png",
    photo2: "assets/img/ali.png"  
  },
    {
    user: "جمانة",
    code: "2004",
    name: "جمانة",
    title: "تقني تخدير",
    hospital: "الكاظمية / وحدة العمليات",
     photo1: "assets/img/users/jmana.png",
    photo2: "assets/img/jmana.png"  
  },
    {
    user: "احمد",
    code: "2005",
    name: "احمد كاظم",
    title: "تقني تخدير",
    hospital: "مدينة الطب/ وحدة العمليات",
     photo1: "assets/img/users/ahmed.png",
    photo2: "assets/img/ahmed.png"  
  },
      {
    user: "مصطفى طارق",
    code: "2005",
    name: "مصطفى طارق",
    title: "تقني تخدير",
    hospital: "مدينة الطب/ وحدة العمليات",
     photo1: "assets/img/users/mustafatarq.png",
    photo2: "assets/img/mustafatarq.png"  
  },
      {
    user: "محمد",
    code: "2005",
    name: "محمد",
    title: "تقني تخدير",
    hospital: "مدينة الطب/ وحدة العمليات",
     photo1: "assets/img/users/moo.png",
    photo2: "assets/img/moo.png"  
  },
      {
    user: "انس",
    code: "2004",
    name: " انس",
    title: "تقني تخدير",
    hospital: "مدينة الطب/ وحدة العمليات",
     photo1: "assets/img/users/anas.png",
    photo2: "assets/img/anas.png"  
  },
      {
    user: "رقية",
    code: "2005",
    name: "رقية ",
    title: "تقني تخدير",
    hospital: "مدينة الطب/ وحدة العمليات",
     photo1: "assets/img/users/ruu.png",
    photo2: "assets/img/ruu.png"  
  },
    {
    user: "بتول",
    code: "2002",
    name: "بتول",
    title: "فني تخدير",
    hospital: "مدينة الطب/ وحدة العمليات",
     photo1: "assets/img/users/personal.png",
    photo2: "assets/img/personal.jpg"  
  }
];

// دوال مصادقة بسيطة
function findUser(username, code) {
  return Users.find(u => u.user === username && u.code === code) || null;
}

function saveSession(userObj) {
  try {
    localStorage.setItem("sessionUser", JSON.stringify(userObj));
  } catch (_) {}
}

function getSession() {
  try {
    const raw = localStorage.getItem("sessionUser");
    return raw ? JSON.parse(raw) : null;
  } catch (_) {
    return null;
  }
}

function clearSession() {
  try {
    localStorage.removeItem("sessionUser");
  } catch (_) {}
}