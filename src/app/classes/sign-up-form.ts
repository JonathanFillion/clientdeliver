export class SignUpForm {
	name : String;
	email : String;
	username : String;
	password : String;
	role: String[];

	constructor(name: String,email: String,username: String,password: String,role: String[]){
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = password;
		this.role = role;
	}
}
