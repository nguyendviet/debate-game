import React from 'react';
import {backImg, editImg, changePassImg} from '../img';
import '../css/Profile.scss';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: 'example@gmail.com', name: 'example', password: '12341234' };
		this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
	}

	handleEditClick() {
		this.email.focus();
	}

	handleOnKeyUp(target, event) {
		if (event.keyCode === 13) {
			switch (target) {
				case 'email':
					this.name.focus();
					break;
				case 'name':
					this.password.focus();
					break;
				case 'password':
					this.changePassword.focus();
					break;
				default:
					this.email.focus();
			}
		}
	}

	render() {
		const { email, name } = this.state;
		return (
			<div className="profile-info-container">
				<div className="profile-form-container">
					<div className="profile-header">
						<div className="back-module-container">
							<button className="back-button" onClick={this.props.history.goBack}>
								<img className="back-icon" src={backImg} alt="back-arrow" />
							</button>

							<p className="my-profile-label">My Profile - Coming Soon</p>
						</div>
						<img
							ref={(input) => {
								this.edit = input;
							}}
							onClick={this.handleEditClick}
							className="edit-icon"
							src={editImg}
							alt="edit-icon"
						/>
					</div>
					<div className="input-container">
						<p className="input-label">Your email address</p>
						<input
							ref={(input) => {
								this.email = input;
							}}
							className="profile-input"
							type="text"
							placeholder={email}
							onKeyUp={this.handleOnKeyUp.bind(this, 'email')}
						/>
						<p className="input-label input-label-name">Your name</p>
						<input
							ref={(input) => {
								this.name = input;
							}}
							className="profile-input"
							type="text"
							placeholder={name}
							onKeyUp={this.handleOnKeyUp.bind(this, 'name')}
						/>
						<p className="input-label input-label-password">Your password</p>
						<input
							ref={(input) => {
								this.password = input;
							}}
							className="profile-input"
							type="password"
							placeholder="********"
							onKeyUp={this.handleOnKeyUp.bind(this, 'password')}
						/>
					</div>
					<div className="change-password-container">
						<img className="change-password-icon" src={changePassImg} alt="back-arrow" />
						<a
							ref={(input) => {
								this.changePassword = input;
							}}
							className="change-password-link"
							href="/profile"
							onClick={this.updateCredentials}
						>
							Change password
						</a>
					</div>
				</div>
				<div>
					<p className="career-progress-label">Game Progress - Coming Soon</p>
					<div className="overall-info">
						<p className="rank-info">You are ranked in top 100</p>
						<div className="modules-info">
							<p className="heading">Designing an Argument</p>
							<p>
								Currently pursuing <span>Level 1</span>
							</p>
							<p>
								Scored <span>20/100</span> in <span>Level 1</span>
							</p>
							<p className="heading">Finding Evidence</p>
							<p>
								Currently pursuing <span>Level 1</span>
							</p>
							<p className="heading">Finding Flaws in Arguments</p>
							<p>Not yet started</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
