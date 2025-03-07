$('#change-color').on({
  'click': () => {
    // 文字色を赤 
    $('#target').css('color', 'red');
  },
});

$('#change-text').on({
  'click': () => {
    // 文字内容変更
    $('#target').text('おはようございます');
  },
});

$('#fade-out').on({
  'click': () => {
    // フェードアウトで文字が消える
    $('#target').fadeOut();
  },
});

$('#fade-in').on({
  'click': () => {
    // フェードインで文字が現れる
    $('#target').fadeIn();
  },
});