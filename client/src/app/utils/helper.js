export const sortData = tags => {
  let mappedTags = tags.map((el, i) => {
    return { index: i, value: el.toLowerCase() };
  });

  mappedTags.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  return mappedTags.map(el => tags[el.index]);
};
