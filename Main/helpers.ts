export async function getUserFromCookie() {
    try {
		//@ts-ignore
		const { data } = await axios.get('/users/get-user-from-cookies');
		const { userDB } = data;
		return userDB;
	} catch (error) {
		console.error(error);
	}
}