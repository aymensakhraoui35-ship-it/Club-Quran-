function validateForm() {

  // جلب القيم
  let inputs = document.querySelectorAll("input, select");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("required") && inputs[i].value === "") {
      alert("❌ يرجى ملء جميع الحقول المطلوبة");
      inputs[i].focus();
      return false; // منع الإرسال
    }
  }

  // التحقق من البريد
  let email = document.querySelector('input[type="email"]').value;
  if (!email.includes("@")) {
    alert("❌ البريد الإلكتروني غير صحيح");
    return false;
  }

  // التحقق من رقم الهاتف
  let phone = document.querySelector('input[type="tel"]').value;
  if (phone.length < 8) {
    alert("❌ رقم الهاتف غير صحيح");
    return false;
  }

  // رسالة نجاح
  alert("✅ تم إرسال طلب التسجيل بنجاح\nنادي منارة الهدى والإحسان");

  return true; // السماح بالإرسال
}
/storage/emulated/0/Android/data/com.fazil.htmleditor/files/Documents/Nnn/media/images/IMG_20251204_235902.jpg
