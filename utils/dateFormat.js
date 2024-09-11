const dayjs = require('dayjs'); // You can use native Date object if you prefer

module.exports = (date) => dayjs(date).format('YYYY-MM-DD HH:mm:ss');

