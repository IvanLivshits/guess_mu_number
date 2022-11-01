for (var i = 0; i < 5; i++) {
  (j => {
    setTimeout(() => console.log(j), 200);
  })(i);
}
