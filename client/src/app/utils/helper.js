export const sortData = (tags, sortProperty) => {
  let mappedTags = tags.map((el, i) => {
    return { index: i, value: el[sortProperty].toLowerCase() };
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
