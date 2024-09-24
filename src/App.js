import React from 'react';

import logo from './assets/images/image.svg';
import Wrapper from './components/Wrapper';

import './assets/css/style.css';

const App = () => {
	return (
		<main className="mx-auto vh-100">
			<div
				className="position-relative d-flex h-100 w-100 text-center"
				style={{
					background:
						'linear-gradient(0deg, #35007F 0%, #4000BF 50%, #35007F 60.81%, #000000 93.75%)',
				}}>
				<Wrapper>
					<div className="d-flex h-100 flex-column align-items-center justify-content-center">
						<div
							className="position-relative z-3 d-flex flex-column min-h-[300px] rounded bg-white"
							style={{ width: '373px' }}>
							<div className="position-absolute top-[-32px] d-flex w-100 flex-column align-items-center justify-content-center">
								<img className="w-16" src={logo} alt="logo" />
							</div>
							<div className="d-flex w-100 flex-column p-4">
								<p className="text-md m-0 pb-[8px] pt-[24px] text-center font-medium text-gray-800">
									Welcome to Insomnia
								</p>
								<div>Login form here</div>
								<p>footer here</p>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
		</main>
	);
};

export default App;
