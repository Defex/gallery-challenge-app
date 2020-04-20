// const updateList = list => {
//   const updated = list.map(field => ({
//     ...field,
//     img: `https://picsum.photos/${Math.floor(Math.random() * 100 + 100)}`,
//   }));
//   console.log(updated);
// };

// const updateDetails = details => {
//   const updated = details.map(field => {
//     const thumbnail = `https://picsum.photos/${Math.floor(Math.random() * 400 + 800)}`;
//     return {
//       ...field,
//       thumbnail,
//       original: thumbnail,
//     };
//   });
//   console.log(updated);
// };

export const getList = async () => {
  const request = await fetch(`${process.env.PUBLIC_URL}/mocks/list.json`);
  const result = await request.json();
  return result;
};

export const getDetails = async () => {
  const request = await fetch(`${process.env.PUBLIC_URL}/mocks/details.json`);
  const result = await request.json();
  return result;
};
