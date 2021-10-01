/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from 'semantic-ui-react';

const MainHeader = ({ title, type = 'h1'}) => {
	//const title = props.title;
	//const { title, type = 'h1' } = props;
	return (
		<Header as={type} style={{marginTop: '1.5em'}}>{title}</Header>
	);
};

export default MainHeader;
