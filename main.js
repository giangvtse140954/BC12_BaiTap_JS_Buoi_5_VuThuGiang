var getEle = function (ele) {
  return document.getElementById(ele);
};
function clickToViewResult(e) {
  e.preventDefault();
  var diemChuan, khuVuc, doiTuong, mon1, mon2, mon3, ketQua;

  // get value from ui
  diemChuan = getEle('diemChuan').value;
  khuVuc = getEle('khuVuc').value;
  doiTuong = getEle('doiTuong').value;
  mon1 = getEle('mon1').value;
  mon2 = getEle('mon2').value;
  mon3 = getEle('mon3').value;
  ketQua = getEle('ketQua');
  var err = getEle('err');

  if (diemChuan === '') {
    err.innerHTML = 'Vui lòng nhập điểm chuẩn';
  } else if (diemChuan > 30 || diemChuan < 0) {
    err.innerHTML = 'Vui lòng nhập điểm chuẩn từ 0 đến 30 điểm';
  } else if (mon1 === '') {
    err.innerHTML = 'Vui lòng nhập điểm môn thứ nhất';
  } else if (mon1 > 10 || mon1 < 0) {
    err.innerHTML = 'Vui lòng nhập điểm môn thứ nhất từ 0 đến 10 điểm';
  } else if (mon2 === '') {
    err.innerHTML = 'Vui lòng nhập điểm môn thứ hai';
  } else if (mon2 > 10 || mon2 < 0) {
    err.innerHTML = 'Vui lòng nhập điểm môn thứ hai từ 0 đến 10 điểm';
  } else if (mon3 === '') {
    err.innerHTML = 'Vui lòng nhập điểm môn thứ ba';
  } else if (mon3 > 10 || mon3 < 0) {
    err.innerHTML = 'Vui lòng nhập điểm môn thứ ba từ 0 đến 10 điểm';
  } else {
    var tmp = '';
    var result =
      parseFloat(mon1) +
      parseFloat(mon2) +
      parseFloat(mon3) +
      parseFloat(doiTuong) +
      parseFloat(khuVuc);
    console.log(result);
    if (
      parseFloat(mon1) === 0 ||
      parseFloat(mon2) === 0 ||
      parseFloat(mon3) === 0 ||
      result < parseFloat(diemChuan)
    ) {
      ketQua.style.color = 'red';
      tmp = 'Xin lỗi bạn đã rớt kỳ thi | Điểm của bạn: ' + result;
    } else {
      ketQua.style.color = 'green';
      tmp = 'Chúc mừng bạn đã đầu rồi | Điểm của bạn: ' + result;
    }

    ketQua.innerHTML = tmp;
    err.innerHTML = '';
  }
}
var tinhTienDien = function () {};
function clickToGetResult(e) {
  e.preventDefault();
  var ten = getEle('ten').value;
  var kw = getEle('kw').value;
  var ketQua2 = getEle('ketQua2');
  var error = getEle('error');

  if (ten === '') {
    error.innerHTML = 'Vui lòng nhập tên';
  } else if (kw === '') {
    error.innerHTML = 'Vui lòng nhập số kw';
  } else if (kw < 0) {
    error.innerHTML = 'Vui lòng nhập số kw lớn hơn hoặc bằng 0';
  } else {
    error.innerHTML = '';
    var t = '';
    var tien = 0;
    if (kw <= 50) {
      tien = kw * 500;
    } else if (kw <= 100) {
      tien = (kw - 50) * 650 + 50 * 500;
    } else if (kw <= 200) {
      tien = (kw - 100) * 850 + 50 * 650 + 50 * 500;
    } else if (kw <= 350) {
      tien = (kw - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    } else {
      tien = (kw - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    }
    t = `Số tiền điện bạn ${ten} phải trả là: ${tien}`;
    ketQua2.innerHTML = t;
  }
}
