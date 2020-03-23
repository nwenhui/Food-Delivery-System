import React from 'react';



class UserStore extends React.Component {
	state = {
		accessRights: 0,
		username: "",
		password: ""
	};

	setData(username,password,accessRights) {
		this.setState({
			accessRights: accessRights,
			username: username,
			password: password
		})
	}

}

export const userStore = new UserStore();