// 1つ目の関数:キーボードが押されたら音が鳴って該当のキーボードに赤枠がつく
function playingAdd(e) { 
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);
  //クラス属性playingの記述
  key.classList.add('playing');
  // クラスを加える
}
window.addEventListener('keydown', playingAdd);
//関数playingAddをイベントを呼び出す記述の中で呼び出す
// 2つ目の関数:キーボードが離れたら音が消えて赤枠が消える