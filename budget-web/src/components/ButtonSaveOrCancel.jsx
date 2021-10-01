/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = ({ addEntry }) => {
	return (
		<Button.Group style={{marginTop: '20px', marginBottom: '20px'}}>
			<Button>Cancel</Button>
			<Button.Or>
				<Button primary onClick={() => addEntry()}>Ok</Button>
			</Button.Or>
		</Button.Group>
	);
};

export default ButtonSaveOrCancel;
