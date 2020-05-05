const axios = require('axios');

exports.getUserList = async (req, res) => {
  try {
    const resApi = await axios.get('https://reqres.in/api/users', {
      params: {
        page: req.query.page,
      },
    });
    res.status(200).json({
      status: 'success',
      ...resApi.data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const resApi = await axios.get(
      `https://reqres.in/api/users/${req.params.id}`
    );
    console.log(resApi);
    res.status(200).json({
      status: 'success',
      ...resApi.data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
