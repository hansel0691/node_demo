

exports.getUser = async (userName) => {
  const url = `https://api.github.com/users/${userName}`;

  return new Promise((resolve, reject) => {
    if (!userName) reject(new Error("User Name can't be empty."));

    axios.get(url).then(
      value => { resolve(value); },
      reason => { reject(new Error(reason)); });
  });
};
