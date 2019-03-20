const userInfo = {
	insert:'INSERT INTO user_info(id, user_id, nickname, gender, avatar_url, country, province, city, language) VALUES(0,?,?,?,?,?,?,?,?)',
	update:'update user_info set nickname=?, gender=?, avatar_url=?, country=?, province=?, city=?, language=? where user_id=?',
	delete: 'delete from user_info where id=?',
	queryById: 'select * from user_info where id=?',
	queryByUserId: 'select * from user_info where user_id=?',
	queryAll: 'select * from user_info'
};
 
module.exports = userInfo;