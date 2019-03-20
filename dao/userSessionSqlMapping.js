const userSession = {
	insert:'INSERT INTO user_session(id, open_id, session_key) VALUES(0,?,?)',
	update:'update user_session set session_key=?, open_id=? where id=?',
	delete: 'delete from user_session where id=?',
	queryById: 'select * from user_session where id=?',
	queryAll: 'select * from user_session'
};
 
module.exports = userSession;