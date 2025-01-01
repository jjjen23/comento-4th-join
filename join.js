
// 1. 아이디 중복체크
// 2. 비밀번호 정상성 체크

const users = [];

const signBtn = document.getElementById("sign_up");
const idInput = document.getElementById("id");
const pwInput = document.getElementById("pw");


// 아이디 중복체크 함수
function isValidId(id) {
  return users.some(user => user.id === id); // 동일한 아이디 존재시 True
}

// 비밀번호 규칙 체크 함수
function isValidPw(pw) {
  // 정규표현식 사용
  const rg = /^(?=.*[!@#$%^&*])(?=.{8,})/;
  return rg.test(pw); // 조건 충족시 True
}

// 가입하기 버튼 클릭시 처리
signBtn.addEventListener('click', ()=>{
  // trim함수를 통해 불필요한 공백 처리
  const id = idInput.value.trim();
  const pw = pwInput.value.trim();

  // 아이디 미 입력시 경고
  if (!id) {
    alert('아이디를 입력해주세요.');
    return;
  }
  // 비밀번호 미 입력시 경고고
  if (!pw) {
    alert(' 비밀번호를 입력해주세요.');
    return;
  }
  // 아이디 중복 체크
  if (isValidId(id)) {
    alert('이미 사용 중인 아이디입니다.')
    return;
  }
  // 비밀번호 유효성 체크크
  if (!isValidPw(pw)) {
    alert('비밀번호 생성 규칙을 지켜주세요');
    return;
  }

  // 유효성 검사 통과시 저장
  users.push({id,pw});
  alert('가입 완료!');
  console.log(users)

  // 초기화
  idInput.value = '';
  pwInput.value = '';
})