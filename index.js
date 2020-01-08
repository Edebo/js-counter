const counts = document.querySelectorAll(".count");

counts.forEach(count => {
  count.innerHTML = 0;

  const update = () => {
    const countStop = +count.getAttribute("data-target");
    let i = +count.innerHTML;
    if (i < countStop) {
      i += Math.ceil(Math.random() * 20) + 1;
      //making the update counter recursive after 0.01 second
      setTimeout(update, 10);
      count.innerHTML = i;
    } else {
      count.innerHTML = countStop;
    }
  };

  update();
});
